import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items?.map((item) => (
        <div data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex"
        >
          <div className=" w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div>{dummy}</div>
            <div className="text-xs">{item.card.info.description}</div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-8 my-8 rounded-lg text-white bg-gray-700 shadow-lg"
                 onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="h-16"
              src={IMG_CDN_URL + item.card.info.imageId}
              alt={"Image"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
