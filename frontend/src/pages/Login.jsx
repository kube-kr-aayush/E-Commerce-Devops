import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios"
import { toast } from "react-toastify";

export default function Login() {
  const [currentState,setCurrentState]=useState("Login");
  const{token,setToken,navigate,backendUrl}=useContext(ShopContext);

  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    try {
      if(currentState==="Sign Up"){
        const response=await axios.post(backendUrl+"/api/user/register",{name,email,password})
        // console.log(response.data);
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
        }else{
          toast.error(response.data.message)
        }
        

      }else{
        const response =await axios.post(backendUrl+"/api/user/login",{email,password})
        // console.log(response.data);
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem("token",response.data.token)
        }else{
          toast.error(response.data.message)
        }
        

      }
    } catch (error) {
      console.log(error);
      toast.error(error.message 

      )
      
      
    }
    
  }
  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt- gap-2 text-gray-700  ">
      <div className="inline-flex items-center gap-2 mb-2 ">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-900"
        style={{ border: "none" }} />
      </div>
      {currentState==="Login" ? '':<input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="w-full px-3 py-2 border border-gray-800" required placeholder="Name" style={{
  border: "1px solid #1f2937", // gray-800
 
}}/>}
      <input type="email" onChange={(e)=>setEmail(e.target.value)}  value={email} className="w-full px-3 py-2 border border-gray-800" placeholder="E-mail" required style={{
  border: "1px solid #1f2937", 
  
}} />
       <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="w-full px-3 py-2 border border-gray-800" required placeholder="Password" />
       <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Fogot your password</p>
        {
          currentState==='Login'?
          <p onClick={()=>setCurrentState('Sign Up')}>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')}>Login Here</p>
        }

        

       </div>
       <button className="bg-black text-white font-light px-8 py-2 mt-4 ">{currentState==='Login' ? 'Sign In' : 'Sign Up' }</button>


    </form>
  );
}
