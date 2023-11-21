import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://unlmtwsycshistghvrym.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVubG10d3N5Y3NoaXN0Z2h2cnltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NjI4NjMsImV4cCI6MjAxNTUzODg2M30.lf4BM03gzLoCCZQzM5kUE1KhW47qihwoOGfQNlns5YM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
