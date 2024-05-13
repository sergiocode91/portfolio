import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fmiuomlhzcskklocfycv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtaXVvbWxoemNza2tsb2NmeWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyODA2MTksImV4cCI6MjAzMDg1NjYxOX0.hL-bhjMmVdhTMM_qZd7DBn6l-6ShTikb4Mnyj9deo-0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);