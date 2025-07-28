import React,{useState} from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
    const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>

        {login?<LoginForm state={setLogin}/>:<RegisterForm state={setLogin}/>}
        
      
    </div>
    
  )
}

export default AuthPage