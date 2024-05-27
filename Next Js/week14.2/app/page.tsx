import Image from "next/image";
import { getUserDetails } from "./components/getUserDetails";

export default async function Home() {
  const userDetails=await getUserDetails(); //async components can only be done with server side components

  return (
    <>
    <div className="flex justify-center flex-col items-center text-bold h-screen">
      <div className="border border-white p-8 rounded">
      <div>
      Name:
      {userDetails.username}
      </div>
  
      <div>
        Email:
      {userDetails.email}
      </div>
      </div>
    </div>
    </>
  );
}
