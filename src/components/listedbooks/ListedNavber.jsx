import { NavLink } from "react-router-dom";

const ListedNavber = () => {
  return (
    <div>
      <div className="flex container m-auto items-center justify-center mt-5">
        <NavLink
         
          to=""
          className={({ isActive }) =>
            `duration-200 rounded-tl-lg rounded-tr-lg ${
              isActive
                ? "text-black font-bold border-r border-l border-t border-black"
                : "text-gray-700 border-b  border-black"
            } hover:bg-gray-50 lg:hover:bg-transparent hover:text-[#23BE0A] font-bold p-3`
          }
        >
          Read Books
        </NavLink>
        <NavLink
          to="wish"
          className={({ isActive }) =>
            `duration-200 rounded-tl-lg rounded-tr-lg ${
              isActive
                ? "text-black font-bold border-r border-l border-t border-black"
                : "text-gray-700 border-b  border-black"
            } hover:bg-gray-50 lg:hover:bg-transparent hover:text-[#23BE0A] font-bold p-3`
          }
        >
          Wishlist Books
        </NavLink>
        <h1 className="flex-1 border-b border-black p-3 text-white">hdfh</h1>
      </div>
    </div>
  );
};

export default ListedNavber;
