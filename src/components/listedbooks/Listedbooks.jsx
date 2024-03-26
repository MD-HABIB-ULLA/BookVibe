import { Outlet } from "react-router-dom";
import ListedNavber from "./ListedNavber";



const Listedbooks = () => {
    return (
        <div>
           <div className=" text-4xl bg-slate-200 text-black container rounded-lg py-5 text-center m-auto  font-bold mt-5">
           <h1 > Books</h1>
           </div>
           <ListedNavber/>
           <Outlet/>
        </div>
    );
};

export default Listedbooks;