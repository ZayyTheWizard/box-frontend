import {createClient} from '@supabase/supabase-js'
require('dotenv').config();

const supabaseUrl = 'https://sitqlnbcnrmyudybbmsu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdHFsbmJjbnJteXVkeWJibXN1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTYzMDUyNywiZXhwIjoyMDM1MjA2NTI3fQ.ra31wxn_N_BTwP8K07rFk_zmbDU7zpMdBKTynKwaMYM'
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function fetchVoiceAudio() {
    let {data, error} = await supabase
        .from('Scripts')
        .select('script_url')
 
    if (error != null) {
        console.error(error);
        return [];
    }
    return data;
}