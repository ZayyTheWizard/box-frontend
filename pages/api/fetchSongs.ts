import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sitqlnbcnrmyudybbmsu.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req: any, res: any) {
    let { data, error } = await supabase
        .from('Songs')
        .select('song_path');

    if (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
        return;
    }
    res.status(200).json(data);
}