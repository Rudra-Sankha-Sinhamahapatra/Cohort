import { getUserDetails } from "./components/getUserDetails";

export default async function Home() {
  const userData:any=await getUserDetails();
  return (
   <>
   <div className="flex flex-col justify-center items-center h-screen">
    <div className="p-8 border border-gray-700 rounded">
    <div className="items-center">
   Name: {userData?.name}
   </div>
   <div className="items-center">
    Email:{userData?.username}
   </div>
    </div>
   </div>
   </>
  );
}
