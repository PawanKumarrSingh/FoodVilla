import { IMG_CDN_URL } from "../../Constants";

const RestrauntCard = (restraunt) => {
  const { cloudinaryImageId, name, areaName, avgRating, costForTwo } =
    restraunt.restaurant;
  return (
    <div id="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h5>{areaName}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestrauntCard;
