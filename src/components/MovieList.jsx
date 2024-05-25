import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MOVIE_DATA from "../data";
function MovieList() {
  const movies = MOVIE_DATA.result;
  console.log(movies);
  return (
    <>
      <div className="flex flex-wrap mb-10">
        {/* movie card */}
        {movies.map((movie, index) => (
          <div
            key={index}
            className="w-[90%] md:w-[30%] mx-auto border-2 border-gray-500 rounded-2xl h-[2%] relative mt-5"
          >
            <div className="flex">
              <div className="flex flex-col justify-between px-4 items-center py-12">
                <ArrowDropUpIcon sx={{ fontSize: "3em" , cursor:"pointer"}} />
                <p>{movie.voting}</p>
                <ArrowDropDownIcon sx={{ fontSize: "3em" , cursor:"pointer" }} />
                <p>Votes</p>
              </div>
              <div className="h-full rounded-lg py-4 w-[300px]">
                <img src={movie.poster} alt="" className="rounded-md h-[250px] object-fill" />
              </div>
              <div className=" px-4 py-7 overflow-hidden">
                <h1 className=" text-3xl font-bold mb-1 truncate">{movie.title}</h1>
                <p className="text-gray-600 text-lg pt-1">
                  Genre : {movie.genre}
                </p>
                <p className="text-gray-600 text-lg pt-1">
                  Language: {movie.language}
                </p>
                <p className="text-gray-600 text-lg pt-1 truncate">
                  Director : [{movie.director}]
                </p>
                <p className="text-gray-600 text-lg pt-1 truncate">
                  Starring : [{movie.stars}]
                </p>
                <p className="text-gray-600 text-lg pt-1 truncate">
                  Release Date: {movie.releasedDate}
                </p>
                <p className="text-blue-500 text-lg pt-1">
                  | Voted by {movie.totalVoted} people |
                </p>
              </div>
            </div>
            <div className="px-5 pb-2">
              <button className=" bg-blue-400 mx-auto w-full h-16 text-xl font-bold text-white hover:bg-blue-500 rounded-md">
                Watch Trailer
              </button>
            </div>
          </div>
        ))}

        {/* <div className=" w-[40%] mx-auto border-2 border-black rounded-2xl h-[400px] relative mt-5 px-10">
          <div className="flex">
            <div className="flex flex-col justify-between px-4 items-center font-bold py-4">
              <ArrowDropUpIcon sx={{ fontSize: "3em" }} />
              <p>4</p>
              <ArrowDropDownIcon sx={{ fontSize: "3em" }} />
              <p>Votes</p>
            </div>
            <div className="h-full rounded-lg border-red-500 py-4">
              <img
                src="https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1558340965271_Yuvarathnaa.jpg"
                alt=""
                className="rounded-2xl"
              />
            </div>
            <div></div>
          </div>
          <div className=""></div>
        </div> */}
      </div>
    </>
  );
}

export default MovieList;
