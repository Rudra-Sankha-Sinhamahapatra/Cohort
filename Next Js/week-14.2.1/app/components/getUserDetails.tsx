import { PrismaClient } from "@prisma/client";


const client=new PrismaClient();

export  async function getUserDetails(){
    try {
        const user=await client.user.findFirst({});
        if(!user){
            return "User dosent exists"
        }
        return{
            name:user?.username,
            username:user?.username
        }
    } catch (error) {
        console.error(error);
        throw error;
    
    }
}