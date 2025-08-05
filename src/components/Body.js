import React, { useEffect, useState ,useContext} from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const Body = () => {
  const [searchedText, setSearchedText] = useState("");
  const [listOfRestraunt, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
const {setUserName}= useContext(UserContext)
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
      // "https://pastebin.com/raw/0QcdEDBL"
      // "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );

    const json = await data.json();

    setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filteredRestaurants = (searchedText, listOfRestraunt) => {
    const filteredItems = listOfRestraunt.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchedText.toLowerCase())
    );
    return filteredItems;
  };
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you'r Offline, Please check your internet connection</h1>
    );
  return (
    <div className="px-4 mb-4">
      <div className=" flex">
        <div className="search m-1">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-gray-400 px-4 py-2 rounded"
            value={searchedText}
            onChange={(e) => {
              setSearchedText(e.target.value);
              if (e.target.value === "") {
                setFilteredRestaurant(listOfRestraunt);
              }
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              const filData = filteredRestaurants(
                searchedText,
                listOfRestraunt
              );
              setFilteredRestaurant(filData);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = filteredRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-2 flex items-center">
          <label>User Name</label>
          <input className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer" onChange={(e)=>{setUserName(e.target.value)}}/>
          
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {listOfRestraunt.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurant?.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={`/restaurant/${restaurant?.info?.id}`}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted restaurantData={restaurant.info} />
              ) : (
                <RestaurantCard restaurantData={restaurant.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
