import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Email" },
        password: {
          label: "pasword",
          type: "password",
          placeholder: "Password",
        },
        otp:{
            label:"otp",
           type:"otp",
           placeholder:"OTP"
        }
      },
      async authorize(credentials:any){
        console.log(credentials);
        
        return{
         id:'user1',
         name:"Rudra",
         email:"rudra@gmail.com"
        };
      }
    }),
  ],
});

export const GET = handler;
export const POST = handler;
