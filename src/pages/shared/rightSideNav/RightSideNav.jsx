import { FaGoogle } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF , FaTwitter , FaInstagramSquare} from "react-icons/fa";
import imgQone1 from '../../../assets/qZone1.png'
import imgQone2 from '../../../assets/qZone2.png'
import imgQone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 ">
                   <h2 className="text-3xl"> Login With</h2>
                   <button className="btn btn-outline w-full hover:text-blue-500 bg-slate-100 mb-2"> 
                   <FaGoogle />
                Google</button>

                    <button className="btn btn-outline w-full hover:text-blue-500  bg-slate-100"> 
                    <IoLogoGithub />
                    GitHub </button>
            </div>


            <div className="p-4 space-y-0 mb-2">
            <h2 className="text-3xl"> Find On US </h2>
            <button className="btn btn-outline w-full bg-fuchsia-100 mb-2 justify-start  bg-slate-100  hover:text-blue-500"> 
            <FaFacebookF /> 
             FaceBook </button>

             <button className="btn btn-outline w-full bg-fuchsia-100 mb-2 justify-start  bg-slate-100  hover:text-blue-500"> 
             <FaTwitter /> 
             Twiter</button>

             <button className="btn btn-outline w-full bg-fuchsia-100 mb-2 justify-start  bg-slate-100  hover:text-blue-500"> 
             <FaInstagramSquare />
            Instaram </button>


           
            </div>

            

            {/*  Q jone  */}
            <div className="p-4 space-y-3 ">
                   <h2 className="text-3xl"> Q Jone</h2>

                   <img src={imgQone1 }  alt="" />
                   <img src={imgQone2 }  alt="" />
                   <img src={imgQone3}  alt="" />
                 
            </div>

        </div>



    );
};

export default RightSideNav;