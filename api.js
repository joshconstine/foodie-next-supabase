import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://pqehnksadnfujxmckwut.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZWhua3NhZG5mdWp4bWNrd3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE1NTUyMTAsImV4cCI6MTk3NzEzMTIxMH0.5b38R3F9WXBmABwsmzL1SMeFDdbjyvqAp9Z6-npl2Bw"
);
