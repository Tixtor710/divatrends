// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://istrjysubycjeevysopf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdHJqeXN1YnljamVldnlzb3BmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NjU5MjUsImV4cCI6MjA0OTM0MTkyNX0.couWCKUnn8eeUBddWVY6U5Id5QHe6P04ZNWE862DF20";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);