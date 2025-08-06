import React from "react";
import {
  IMG_CDN_URL,
  FOODFIRE_API_URL,
  ITEM_IMG_CDN_URL,
} from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  // console.log(restaurantData);

  const {
    name,
    avgRating,
    area,
    lastMileTravelString,
    cuisines,
    costForTwo,
    cloudinaryImageId,
  } = restaurantData;
  return (
    <div
      data-testid="resCard"
      className="p-2 h-[300px] w-[205px] bg-gray-200 shadow-md rounded-lg  hover:border border-gray-50 hover:cursor-pointer hover:bg-gray-500"
    >
      <img className=" rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <div>
        <div className="font-bold py-4 font-xl">{name}</div>
        <div className="font-semibold"> {cuisines.join(", ")}</div>
        <div>{area}</div>
        <span className=" flex justify-evenly align-center items-center">
          <div
            className="flex  align-center items-center bg-green-500 rounded text-white px-2 py-1"
            style={
              avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {avgRating}
          </div>
          <div>{lastMileTravelString} Minutes</div>
          <div>{costForTwo}</div>
          {/* <div>{costForTwoString / 100} For Two</div> */}
        </span>
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
