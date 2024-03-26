import { getWishlist } from "../../util/localStorage";
import WishCard from "./WishCard";


const Wish = () => {
    const data = getWishlist();
    console.log(data)
    return (
        <div className="container m-auto mt-6 space-y-3">
            <WishCard/>
          
        </div>
    );
};

export default Wish;