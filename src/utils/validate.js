
const Validate=(email, password)=>{
    const isEmailVali = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassWordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  

     if(!isEmailVali) return "Email is not valid";
     if(!isPassWordValid) return "Password is not valid";

      return null;
}
export default Validate;
