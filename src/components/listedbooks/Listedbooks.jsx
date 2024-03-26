import { Outlet } from "react-router-dom";
import ListedNavber from "./ListedNavber";
import { useState } from "react";

const Listedbooks = () => {
  const [sortBy, setSortBy] = useState(""); // State variable to store the selected value

  // Event handler to update the selected value when the selection changes
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  console.log(sortBy)

  return (
    <div>
      <div className="text-4xl bg-slate-200 text-black container rounded-lg py-5 text-center m-auto font-bold mt-5">
        <h1>Books</h1>
      </div>
      <div className="text-center mt-7">
        <select
          className="select select-bordered font-bold text-white bg-[#23BE0A] max-w-xs"
          value={sortBy} // Set the selected value to the state variable
          onChange={handleSortByChange} // Call the event handler when the selection changes
        >
          <option disabled value="">
            Sort By
          </option>
          <option value="Rating">Rating</option>
          <option value="Number of pages">Number of pages</option>
          <option value="Publisher year">Publisher year</option>
        </select>
      </div>
      <ListedNavber sortBy={sortBy} /> {/* Pass the selected value to ListedNavber */}
      <Outlet />
    </div>
  );
};

export default Listedbooks;
