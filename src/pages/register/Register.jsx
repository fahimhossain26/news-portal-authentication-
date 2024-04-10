import { Link } from "react-router-dom";
import Navber from "../shared/navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const Register = () => {
const {createUser} =useContext(AuthContext);

    const handelRegister=e=>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
        const name=form.get('name')
        const photo=form.get('photoUrl')
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password,name,photo);

        // create user
           createUser(email,password)
           .then(result=>{
            console.log(result.user);
           })
           .catch(error=>{
            console.log(error);
           })

    }
    return (
        <div>
             
             <Navber></Navber>
           
           <div className="w-full max-w-md p-12 space-y-3 rounded-xl border bg-slate-100   font-sans mx-auto">
       <h1 className="text-3xl font-bold text-center text-indigo-600"> Register Account </h1>
       {/* Input fields and the form started */}
       <form onSubmit={handelRegister} className="space-y-6"  >

       <div className="space-y-2 text-sm">
               <label htmlFor="name" className="block ">
                   Your Name
               </label>
               <input type="text" name="name" id="name" placeholder="Name" required className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
           </div>

           <div className="space-y-2 text-sm">
               <label htmlFor="name" className="block ">
                   Photo Url
               </label>
               <input type="text" name="photoUrl" id="photo" placeholder="PhotoUrl" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
           </div>


           <div className="space-y-2 text-sm">
               <label htmlFor="email" className="block ">
                   Your Email
               </label>
               <input type="email" name="email" id="email" placeholder="Email" required className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
           </div>
           <div className="space-y-2 text-sm">
               <label htmlFor="password" className="block ">
                   Password
               </label>
               <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
               <div className="flex justify-end text-xs ">
                   <a href="#" className="hover:underline">
                       Forgot Password?
                   </a>
               </div>
           </div>
           {/* </form> */}
           {/* Sign in Button */}
           <button className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4  hover:bg-blue-400 z-50 group">
               Register 
               {/* <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                   Let&apos;s go
               </span> */}
               {/* <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
               <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
               <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
               <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span> */}
           </button>

           <p>Already Have a Account ? <Link to='/login'> LogIn</Link></p>
           </form>
        </div>
        </div>
    );
};

export default Register;