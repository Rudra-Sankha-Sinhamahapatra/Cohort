import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

async function insertUser(username:string,password:string,firstName:string,lastName:string) {
   const res=await prisma.user.create({
    data:{
        email:username,
        password,
        firstName,
        lastName
    },
   select: {
     id:true,
     password:true,
     firstName:true
    }
    })
    console.log(res)
}

interface updateParams{
    firstName:string;
    lastName:string;
}
async function updateUser(username:string,{
    firstName,
    lastName
}:updateParams) {
   const res=await prisma.user.update({
        where:{email:username},
        data:{
            firstName,
            lastName
        },
        select:{
            id:true,
            firstName:true,
            lastName:true
        }
    })
    console.log(res);
}

async function deleteUser(username:string,password:string) {
    const res=await prisma.user.delete({
        where:{
            email:username,
            password
        },
        select:{
            email:true,
            password:true
        }
    })
    console.log(`User with email ${username} deleted succesfully`);
}

async function getUser(username:string) {
    try {
        const res=await prisma.user.findUnique({
            where:{
                email:username
            },
            select:{
                email:true,
                firstName:true,
                lastName:true
            }
        })

     res?console.log(res):console.log("User is not valid");
    } catch (error) {
        console.error(`${error} an error occured`);
    }

}
// insertUser("rudra1@gmail.com","rudra","Rudra","Sankha")
// updateUser("rudra1@gmail.com",{firstName:"Steve",lastName:"Smith"})
// deleteUser("rudra1@gmail.com","rudra")
getUser("rudra@gmail.com");