CREATE TABLE public.trial_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  age text NOT NULL,
  direction text NOT NULL,
  time_slot text NOT NULL,
  comment text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.trial_requests TO anon, authenticated;
GRANT ALL ON public.trial_requests TO service_role;
ALTER TABLE public.trial_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit trial request" ON public.trial_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (char_length(name) BETWEEN 1 AND 100 AND char_length(phone) BETWEEN 10 AND 20 AND char_length(coalesce(comment,'')) <= 1000);