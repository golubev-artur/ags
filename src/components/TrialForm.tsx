import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const DIRECTIONS = [
  "Воздушные полотна",
  "Воздушное кольцо",
  "Трапеция",
  "Воздушный гамак",
  "Ремни",
  "Растяжка и ОФП",
];
const TIMES = ["Утро", "День", "Вечер", "Выходные"];

export function formatPhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("8") || d.startsWith("7")) d = d.slice(1);
  d = d.slice(0, 10);
  let out = "+7";
  if (d.length) out += " (" + d.slice(0, 3);
  if (d.length >= 3) out += ")";
  if (d.length > 3) out += " " + d.slice(3, 6);
  if (d.length > 6) out += "-" + d.slice(6, 8);
  if (d.length > 8) out += "-" + d.slice(8, 10);
  return out;
}

type Errors = Partial<Record<"name" | "phone" | "age" | "direction" | "time" | "consent", string>>;

export function TrialForm() {
  const [f, setF] = useState({ name: "", phone: "", age: "", adult: false, direction: "", time: "", comment: "", consent: false });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof f, v: string | boolean) => setF((p) => ({ ...p, [k]: v }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    const er: Errors = {};
    if (!f.name.trim()) er.name = "Введите имя";
    if (f.phone.replace(/\D/g, "").length !== 11) er.phone = "Введите номер полностью";
    if (!f.adult && !f.age.trim()) er.age = "Укажите возраст или отметьте «я взрослый»";
    if (!f.direction) er.direction = "Выберите направление";
    if (!f.time) er.time = "Выберите время";
    if (!f.consent) er.consent = "Нужно согласие";
    setErrors(er);
    if (Object.keys(er).length) return;
    setSending(true);
    const { error } = await supabase.from("trial_requests").insert({
      name: f.name.trim().slice(0, 100),
      phone: f.phone,
      age: f.adult ? "Взрослый" : f.age.trim().slice(0, 20),
      direction: f.direction,
      time_slot: f.time,
      comment: f.comment.trim().slice(0, 1000) || null,
    });
    setSending(false);
    if (error) {
      toast.error("Не удалось отправить заявку. Позвоните нам: 8 (968) 013-90-60");
      return;
    }
    toast.success("Заявка отправлена администратору");
    setDone(true);
  }

  const err = (k: keyof Errors) => errors[k] && <p className="mt-1.5 text-sm text-destructive">{errors[k]}</p>;

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div key="ok" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="py-16 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-mint">
            <Check className="h-9 w-9" strokeWidth={1.5} />
          </div>
          <h3 className="mt-6 text-4xl">Спасибо!</h3>
          <p className="mt-3 text-muted-foreground">Мы свяжемся с вами в течение дня</p>
        </motion.div>
      ) : (
        <motion.form key="form" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }} onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
          <div>
            <input className="field" placeholder="Имя *" value={f.name} maxLength={100} onChange={(e) => set("name", e.target.value)} />
            {err("name")}
          </div>
          <div>
            <input className="field" type="tel" inputMode="tel" placeholder="+7 (___) ___-__-__ *" value={f.phone} onFocus={() => !f.phone && set("phone", "+7")} onChange={(e) => set("phone", formatPhone(e.target.value))} />
            {err("phone")}
          </div>
          <div>
            <input className="field disabled:opacity-50" placeholder="Возраст ребёнка *" value={f.age} disabled={f.adult} maxLength={20} onChange={(e) => set("age", e.target.value)} />
            <label className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" checked={f.adult} onChange={(e) => set("adult", e.target.checked)} className="accent-foreground" /> я взрослый
            </label>
            {err("age")}
          </div>
          <div>
            <select className="field" value={f.direction} onChange={(e) => set("direction", e.target.value)}>
              <option value="">Направление *</option>
              {DIRECTIONS.map((d) => <option key={d}>{d}</option>)}
            </select>
            {err("direction")}
          </div>
          <div className="sm:col-span-2">
            <select className="field" value={f.time} onChange={(e) => set("time", e.target.value)}>
              <option value="">Удобное время *</option>
              {TIMES.map((d) => <option key={d}>{d}</option>)}
            </select>
            {err("time")}
          </div>
          <textarea className="field sm:col-span-2 min-h-28" placeholder="Комментарий" maxLength={1000} value={f.comment} onChange={(e) => set("comment", e.target.value)} />
          <div className="sm:col-span-2">
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 accent-foreground" />
              <span>Я согласен(на) на обработку персональных данных в соответствии с <Link to="/privacy" className="underline">политикой конфиденциальности</Link></span>
            </label>
            {err("consent")}
          </div>
          <button type="submit" disabled={sending} className="btn-mint sm:col-span-2 w-full disabled:opacity-60">
            {sending ? "Отправляем…" : "Записаться"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
