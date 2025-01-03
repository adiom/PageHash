import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xhpgoayngvjbuxnlknhu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocGdvYXluZ3ZqYnV4bmxrbmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5MTA0MDMsImV4cCI6MjA1MTQ4NjQwM30.Ge-g5mckLfJ5mtCCVQNUHcczdQxD8xbNxglRPvSDos0"

export const supabase = createClient(supabaseUrl, supabaseKey)
