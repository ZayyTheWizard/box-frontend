import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://sitqlnbcnrmyudybbmsu.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function fetchSongs() {
    let res = await fetch('/api/fetchSongs')
    
    if (!res.ok) {
        console.error("Failed to fetch");
        return [];
    }
    const data = await res.json();
    return data;
}