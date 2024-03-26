import { NavLink } from "react-router-dom";


const ListedNavber = () => {
  return (
    <div>
      <div className=" flex container m-auto items-center justify-center mt-5">
        <NavLink
          to="/listedbooks/read"
          className={({ isActive }) =>
            `  duration-200 rounded-tl-lg rounded-tr-lg  ${
              isActive
                ? "  text-black font-bold border-r border-l border-t border-black   "
                : "text-gray-700 border-b"
            }   hover:bg-gray-50 lg:hover:bg-transparent   hover:text-[#23BE0A]  font-bold`
          }
        >
           <h1 className=" p-3 ">Read Books</h1>
        </NavLink>
        <NavLink
          to="/listedbooks/wish"
          className={({ isActive }) =>
            `  duration-200 rounded-tl-lg rounded-tr-lg  ${
              isActive
                ? "  text-black font-bold border-r border-l border-t border-black   "
                : "text-gray-700 border-b"
            }   hover:bg-gray-50 lg:hover:bg-transparent   hover:text-[#23BE0A]  font-bold`
          }
        >
        <h1 className="p-3">Wishlist Books</h1>
        </NavLink>

        
        <h1 className="flex-1 border-b   border-black p-3"></h1>
      </div>
     
    </div>
  );
};

export default ListedNavber;
