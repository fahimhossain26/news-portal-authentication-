import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title,image_url,thumbnail_url,details,total_view,rating,_id} = news;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="" /></figure>
  <p className="ml-10"> total View : {total_view}</p>
 
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length>200? 
        <p>{details.slice(0,200)} <Link
        to={`/news/${_id}`}
         className="text-blue-700 font-bold ml-2 hover:text-green-800 decoration-white "> Read More.....</Link> </p>
        : <p>{details}</p>
    }
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-blue-100">Deails</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewsCard;