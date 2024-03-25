import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero  container  m-auto mt-2 p-3">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between lg:px-32 bg-base-300 rounded-lg ">
          <div className="lg:w-1/3 w-[50%] p-3">
            <img src="./pngwing 1.png" className=" w-full  rounded-lg " />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold text-black mb-6">
              Books to freshen <br /> up your bookshelf
            </h1>

            <Link  to="listedbooks" >
              <button className="btn bg-[#23BE0A] text-white">View The List</button>
            </Link>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-black mb-6 text-center mt-5">
              Books 
            </h1>
    </div>
  );
};

export default Home;
