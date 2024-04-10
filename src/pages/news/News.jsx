import { useParams,useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import Navber from "../shared/navber/Navber";


const News = () => {
  
    
     const {id,title}= useParams();
  
    //  const  news=useLoaderData();
    
   
    //  const {title,image_url,thumbnail_url,details,total_view,rating,_id} = nes;
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid   md:grid-cols-4 ">
                
                <div className="col-span-3">
                    <h2 className="text-5xl"> News Details </h2>
                      <p> {id} </p> 
                       <h2>{title}</h2> 
                     {/* {image_url}  */}

                </div>
                <div>  
                    <RightSideNav></RightSideNav>
                 </div>
                 </div>
                 
               
                 
            
        </div>
    );
};

export default News;