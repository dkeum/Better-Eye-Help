import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from 'next/headers'
import Navbar from "./navbar/Navbar";

export default async function NavbarServer(){
    const supabase = createServerComponentClient({cookies})
    const {data: {session}} = await supabase.auth.getSession()

    return(
        <Navbar session={session}/>
    )
}