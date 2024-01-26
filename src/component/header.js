import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import {  useDispatch , useSelector} from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";


const Header=()=>{
   const navigate=useNavigate();
  const dispatch= useDispatch();
   const user=useSelector((store)=> store.user);

   const handleSignOutt=()=>{
      signOut(auth).then(() => {
         navigate("/");
        }).catch((error) => {
           navigate("/error");
        });
       };


          useEffect(()=>{
         const unsubscribe= onAuthStateChanged(auth, (user) => {
               if (user) {
                  const { uid, email, displayName } = user;
                  dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                  navigate("/browse");
               } else {
                  dispatch(removeUser());
                  navigate("/");
               }
            });
             return ()=> unsubscribe;
        },[]);
      

        
    return (

           <div className="absolute   z-10   bg-opacity-25  bg-gradient-to-b from-black flex items-center justify-between px-10  w-screen  p-2" >
            <img className="w-[140px] " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />  
          { user && (
           <div className="text-white">
           <button className=" bg-gray-500  rounded-xl p-2 text-white" onClick={handleSignOutt}>(signOut)</button>
           </div>
          )}

        </div>
      
    )
}
export default Header;