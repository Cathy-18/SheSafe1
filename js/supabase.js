const SUPABASE_URL = "https://enuumdnfebipvlvplfce.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVudXVtZG5mZWJpcHZsdnBsZmNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2MDgyNjgsImV4cCI6MjA4NzE4NDI2OH0.aPM_tN7tn-jJ3AzQPf7ZTnWD8_mD5aro1SNjKlryPX4";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);