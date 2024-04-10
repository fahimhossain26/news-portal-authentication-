import Header from "../shared/header/Header";
import {useLoaderData} from "react-router-dom"
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navber from "../shared/navber/Navber";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news= useLoaderData()
    
    console.log(news);  
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <h2 className="text-3xl font-Poppins" >This is home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-solid"> 
                    <LeftSideNav></LeftSideNav>
                </div>

                {/* news Comin Soon  */}
                <div className=" md:col-span-2 border-solid">
                  {
                    news.map(aNews=>
                        <NewsCard key={aNews._id}
                         news={aNews}>

                        </NewsCard> )
                  }
                </div>
                <div className="border-solid">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;