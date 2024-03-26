import { useLoaderData } from "react-router-dom";
import { getWishlist } from "../../util/localStorage";
import WishCard from "./WishCard";


const Wish = () => {
    const data = getWishlist();
    const allBooks = useLoaderData();


  // Filter books based on stored read IDs
  const books = allBooks.filter((book) => data.includes(book.bookId));
  console.log(books)
    return (
        <div className="container m-auto mt-6 space-y-3">
            
          {
            books.map((book, i)=> <WishCard key={i} book={book}/>)
          }
        </div>
    );
};

export default Wish;