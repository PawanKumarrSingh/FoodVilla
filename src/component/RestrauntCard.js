import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../../Constants";

const RestrauntCard = (restraunt) => {
  const { cloudinaryImageId, name, areaName, avgRating, costForTwo, id } =
    restraunt.restaurant;
  return (
    <div id="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3>
        <Link to={"/restraunt/" + id}>{name}</Link>
      </h3>
      <h5>{areaName}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestrauntCard;
