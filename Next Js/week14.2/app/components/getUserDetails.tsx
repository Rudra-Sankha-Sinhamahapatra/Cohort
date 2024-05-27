import axios from "axios";

export async function getUserDetails(){
    await new Promise((r)=>setTimeout(r,5000))
    const res=await axios.get('http://localhost:3000/api/user')
    return res.data;
}