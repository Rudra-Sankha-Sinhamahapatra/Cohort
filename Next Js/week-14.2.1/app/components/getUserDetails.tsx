import client from '@/db'



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