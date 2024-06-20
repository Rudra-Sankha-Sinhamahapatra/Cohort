import { Turnstile } from '@marsidev/react-turnstile'

import './App.css'
import axios from 'axios'
import { useState } from 'react'
import { VITE_SITE_KEY } from './conf'

function App() {
  const [token, setToken] = useState<string>("")


  return ( 
    <>
      <input placeholder='OTP'></input>
      <input placeholder='New password'></input>

      <Turnstile onSuccess={(token) => {
        setToken(token)
      }} siteKey={VITE_SITE_KEY} />

      <button onClick={() => {
        axios.post("http://localhost:3000/reset-password", {
          email: "jie@gmail.com",
          otp: "123456",
          token: token,
        })
      }}>Update password</button>
    </>
  )
}

export default App