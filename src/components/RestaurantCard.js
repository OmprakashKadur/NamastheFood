import React from "react";
import { IMG_CDN_URL,FOODFIRE_API_URL, ITEM_IMG_CDN_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#dddd",
  minHeight: "250px",
  maxWidth: "205px",
};
const RestaurantCard = ({restaurantData}) => {
  // console.log(restaurantData)
  const {name,avgRating, costForTwo,cuisines,slaString,cloudinaryImageId,deliveryTime} = restaurantData
  return (
    <div className="p-1 hover:border border-gray-400 hover:cursor-pointer shadow-md" style={styleCard}>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div>
      <div className="font-bold">{name}</div>
      <div className="font-semibold"> {cuisines.join(", ")}</div>
      <div>{avgRating} stars</div>
      <div>{costForTwo/100} For Two</div>
      <div>{deliveryTime} Minutes</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
