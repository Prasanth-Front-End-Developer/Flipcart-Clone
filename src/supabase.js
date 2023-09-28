import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://fcpnwkwldhgatfzqqfxl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjcG53a3dsZGhnYXRmenFxZnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0ODI0MDksImV4cCI6MjAwNzA1ODQwOX0.xMj9DcDTxszx3TmrI55D2thSeYtzPs60PZtcunQlQMY"
);

export default supabase;
