import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = "https://qhsxppxlubnjkckjmixa.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoc3hwcHhsdWJuamtja2ptaXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjQyOTEsImV4cCI6MjAzMzI0MDI5MX0.KmdSrtfZWkBge__kKzllS6KEvNsiSyd9S6ZJBjp9-_Q";

export const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);
