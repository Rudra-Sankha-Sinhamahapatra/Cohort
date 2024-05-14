interface User1 {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }
  
  const A = {
  id:2,
  name:"marco",
  email:"ro@k.com",
  createdAt:"24-4-2004"
  }
  // For a profile display, only pick `name` and `email`
  type UserProfile = Pick<User1, 'name' | 'email'>;
  
  const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
  };
  
