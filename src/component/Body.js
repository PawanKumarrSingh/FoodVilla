import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

// Filter function
const filterData = (searchText, restaurantList) => {
  return restaurantList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Body = () => {
  // State variables
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestraunts] = useState([]);
  const [filteredRestaurants, setFilteredRestraunts] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    getData();
  }, []);

  // Function to fetch data
  async function getData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await response.json();

    setAllRestraunts(
      json?.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestraunts(
      json?.data?.cards[1]?.card?.card.gridElements.infoWithStyle.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div id="search_container">
        <input
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search for a restaurant"
          className="search_input"
        />
        <button
          className="searchBtn"
          onClick={() => {
            // Update restaurant list based on search text
            const filteredRestaurants = filterData(searchText, allRestaurants);
            setFilteredRestraunts(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {filteredRestaurants.length === 0 ? (
          <h3>No restaurants present</h3>
        ) : (
          filteredRestaurants.map((r) => (
            <RestrauntCard key={r.info.id} restaurant={r.info} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
