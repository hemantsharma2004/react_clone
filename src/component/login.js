import Header from "./header";
import { useRef, useState } from "react";
import Validate from "../utils/validate";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

 const Login=()=>{
    const [IsSignIn , setIsSignIN] = useState(true);
     const [Message , setMessage] = useState(null);
     const email=useRef(null);
     const password= useRef(null);

     const handleValidate=()=>{
          const message=Validate(email.current.value, password.current.value)
            setMessage(message);

            if(message) return;

            if(!IsSignIn){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  const user = userCredential.user;
                   console.log(user);
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                   setMessage(errorCode + errorMessage)
                });
              
              }else { 
                 
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
           .then((userCredential) => {
           
            const user = userCredential.user;
              console.log(user);
              })
           .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setMessage(errorCode + errorMessage);
           });
    
              }
     }

     const toogleClick=()=>{
          setIsSignIN(!IsSignIn);
     }
    return (
        <div>
             <Header />
          <div className="absolute w-[100%]">
            <img className="w-[100%]" src="https://www.pcworld.com/wp-content/uploads/2024/01/Netflix-Hintergrund.jpg?resize=1024%2C576&quality=50&strip=all" alt="background img" />
          </div>
    
          <form onSubmit={(e) => e.preventDefault()} className="w-3/12  absolute my-40 mx-auto left-0 right-0 pr-9 bg-black p-10 bg-transparent-black  text-white bg-opacity-80">
            <h1 className="text-white  text-4xl mb-8">{IsSignIn ? "sign in" : "sign up"}</h1>
    
            {!IsSignIn && <input  type="text" placeholder="Name" className="p-3 pl-2 pr-2  m-1 bg-gray-700  mb-4  w-full  text-white" />}
    
            <input ref={email} type="text" placeholder="Email Address" className="p-3 pl-2 pr-2  m-1 bg-gray-700  mb-4  w-full  text-white" />
            <input ref={password} type="password" placeholder="password" className="p-3 pl-2 pr-2 m-1 mb-4 bg-gray-700 text-white  w-full" />
            <p className="text-sm text-red-600 font-bold py-2">{Message}</p>
    
            <button className="bg-red-700 mt-1 text-white m-1 pr-2  p-3 px-2 w-full rounded-lg" onClick={handleValidate} >{IsSignIn ? "sign in" : "sign up"}</button>
          
    
    
            <div className="flex justify-between cursor-pointer mt-6">
              <p className="">alrady have acount </p>
              <p onClick={toogleClick}>{IsSignIn ? "sign up" : "sign in"}</p>
            </div>
          </form>
        </div>
      )
 }
 export default Login;