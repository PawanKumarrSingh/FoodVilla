import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../Constants";
import Shimmer from "../component/Shimmer";

const RestrauntMenu = () => {
  const [restraunt, setRestraunt] = useState(null);
  const [restrauntMenu, setRestrauntMenu] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getRestrauntData(id);
  }, []);

  async function getRestrauntData(id) {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2403305&lng=73.1305395&restaurantId=" +
        id
    );
    const json = await data.json();
    const cardsArray =
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    let card3Items = cardsArray?.[3]?.card?.card?.itemCards;
    let card2Items = cardsArray?.[2]?.card?.card?.itemCards;

    let desiredItems = card3Items ? card3Items : card2Items;
    setRestrauntMenu(desiredItems);
    console.log(desiredItems);
    setRestraunt(json?.data?.cards[2]?.card?.card?.info);
  }

  return !restraunt && !restrauntMenu ? (
    <Shimmer />
  ) : (
    <>
      <div id="restraunt_info">
        <div>
          <h2>Restraunt ID : {restraunt.id}</h2>
          <h4>Restraunt Name : {restraunt.name}</h4>
          <img
            src={IMG_CDN_URL + restraunt.cloudinaryImageId}
            alt="restraunt_img"
          ></img>
          <h4>Restraunt Area : {restraunt.locality}</h4>
          <h4>Restraunt Avg Rating : {restraunt.avgRating}</h4>
          <h4>Restraunt Price : {restraunt.costForTwoMessage}</h4>
        </div>

        <div id="restraunt-menu">
          {!restrauntMenu ? (
            <></>
          ) : (
            <ul>
              <h1
                style={{
                  textDecoration: "underline",
                  color: "Red",
                  margin: "20px",
                }}
              >
                Menu
              </h1>
              {restrauntMenu.map((e) => (
                <>
                  <li key={e.card.info.id}>
                    <h3>{e.card.info.name}</h3>
                    <h3>₹ {e.card.info.price ? e.card.info.price / 100 : 0}</h3>
                    <img src={IMG_CDN_URL + e.card.info.imageId}></img>
                  </li>
                </>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default RestrauntMenu;
