import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here using 'username' and 'password'
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <>
    <div className='h-full w-full bg-blue-300'>
    <div className=''>
    <div className='flex flex-col items-center h-screen justify-center'>
        <form className='flex flex-col items-center border border-gray-500' onSubmit={handleSubmit} >
          <div className='m-10'>
          <div className='mb-4'>
            <input
              type='text'
              id='username'
              placeholder='Enter your Username'
              className='p-2 border border-gray-300 rounded'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className='mb-4'>
            <input
              type='password'
              id='password'
              placeholder='Enter your Password'
              className='p-2 border border-gray-300 rounded'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <div className='mb-4'>
            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded relative left-14 w-20 pr-2 pl-2'
            >
              Log In
            </button>
          
          </div>
        
          <div className='mb-4'>
          <button
              type='submit'
              className='bg-green-500 text-white px-4 py-2 rounded relative left-14 w-20 pr-2 pl-2'
            >
              Sign Up
            </button>
            <p className=' mt-4 text-white relative left-5 hover:text-gray-600'>Don't Have an Account</p>
          </div>
          </div>
        </form>
      </div>
    </div>
     </div>
    </>
  );
}

export default Login;
