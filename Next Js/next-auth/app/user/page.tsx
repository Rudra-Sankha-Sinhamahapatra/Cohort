import { getServerSession } from "next-auth"
import { Appbar } from "../components/Appbar";
import { NEXT_AUTH } from "../lib/auth";

export default async function(){
const session=await getServerSession(NEXT_AUTH);
    return(
        <>
        <div>
            <Appbar/>
            User Component
            {JSON.stringify(session)}
        </div>
        </>
    )
}