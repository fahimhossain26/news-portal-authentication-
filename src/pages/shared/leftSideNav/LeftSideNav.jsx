import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories ,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2>All Category </h2>
            {
                categories.map(category=><Link className="block ml-4 font-bold tet-2xl mb-2 p-3 "
                 key={category.id}
                 to={`/category/${category.id}`}
                 >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;