import levchenko from "@/assets/coaches/levchenko.jpg.asset.json";
import petryanina from "@/assets/coaches/petryanina.jpg.asset.json";
import papanova from "@/assets/coaches/papanova.jpg.asset.json";
import melnikova from "@/assets/coaches/melnikova.jpg.asset.json";

// Фото хранит Lovable по абсолютному пути /__l5e/...; на GitHub Pages сайт живёт в подпапке,
// поэтому путь начинаем с BASE_URL (в Lovable он "/", и ничего не меняется).
// Сами файлы при публикации скачивает scripts/fetch-lovable-assets.mjs.
const assetUrl = (url: string) => import.meta.env.BASE_URL + url.replace(/^\//, "");

export type Coach = {
  slug: string;
  name: string;
  short: string;
  photo: string;
  directions: string[];
  education?: string[];
  titles: string[];
  gratitude: string[];
};

const supreme =
  "Международный турнир по воздушно-силовой атлетике и эриал спорту «Supreme WORLD 2023»";
const step = "Международный конкурс «Мой шаг к успеху», г. Москва";
const art = "Фестиваль «Спорт как искусство», г. Москва";

export const COACHES: Coach[] = [
  {
    slug: "levchenko",
    name: "Левченко Елена Александровна",
    short: "Воздушная гимнастика, растяжка",
    photo: assetUrl(levchenko.url),
    directions: ["Воздушная гимнастика", "Растяжка"],
    education: [
      "Высшее образование — Федеральный институт повышения квалификации и переподготовки, специализация «Физическая культура»",
    ],
    titles: ["Судья ФВАР, IFAS", "Постановщик индивидуальных и групповых программ"],
    gratitude: [supreme, step, art, "и многие другие"],
  },
  {
    slug: "petryanina",
    name: "Петрянина Вероника Николаевна",
    short: "Воздушная гимнастика, растяжка, хореография, pole",
    photo: assetUrl(petryanina.url),
    directions: ["Воздушная гимнастика", "Растяжка", "Хореография", "Pole sport / dance"],
    education: [
      "Высшее образование — Академия ВЭГУ, специализация «Физическая культура»",
      "Многолетний стаж работы тренером",
    ],
    titles: [
      "Призёр 5-го Кубка России по ВСЭ",
      "Призёр Catwalk Dance Fest 2017",
      "Призёр отборочного турнира ФВАР 2019",
      "Постановщик индивидуальных и групповых программ",
    ],
    gratitude: [supreme, step, art, "и многие другие"],
  },
  {
    slug: "papanova",
    name: "Папанова Кристина Геннадьевна",
    short: "Воздушная гимнастика, воздушное кольцо",
    photo: assetUrl(papanova.url),
    directions: ["Воздушная гимнастика"],
    education: [
      "Университет им. Ярослава Мудрого, г. Великий Новгород — профили «Начальное образование» и «Внеурочная деятельность»",
      "Две международные аттестации по направлению «Воздушное кольцо»",
    ],
    titles: [],
    gratitude: [
      supreme,
      "V Международный турнир по воздушной гимнастике и pole sport, г. Сочи, 2021",
      "VII Международный открытый танцевальный фестиваль Pole Spirit Dance, 2018",
      "и другие",
    ],
  },
  {
    slug: "melnikova",
    name: "Мельникова Дария Алексеевна",
    short: "Воздушная гимнастика",
    photo: assetUrl(melnikova.url),
    directions: ["Воздушная гимнастика"],
    titles: [
      "Призёр соревнований по ВСЭ в соло и дуэте",
      "Призёр воздушного фестиваля Catwalk в дуэте",
    ],
    gratitude: [supreme, step, art, "и другие"],
  },
];

export const SOCIAL = {
  max: "https://max.ru/u/f9LHodD0cOJGH2maVdt2xMeJsh5dmMxrYGqtcV21uI7d_TQPkUdVBOXlUBM",
  vk: "https://vk.com/air_gym_school",
  whatsapp: "https://wa.me/79680139060",
};
