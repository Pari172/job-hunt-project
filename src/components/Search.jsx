import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { JobContext } from "../pages/SearchPage";
import { jsondata } from "../db";
function Search() {
  const [Query, setQuery] = useState("python developer");
  const { jobdata, setJobdata } = useContext(JobContext);
  const options = {
    // method: "GET",
    // Jsearch API
    // url: "https://jsearch.p.rapidapi.com/search",
    // params: {
    //   query: Query,
    //   page: "1",
    //   num_pages: "1",
    // },
    // headers: {
    //   "X-RapidAPI-Key": "f6782470e0mshb51f20e445a4d6cp126fa2jsn2bcde2d4284e",
    //   "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    // },
    //LinkedIn API
    // url: "https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs",
    // params: {
    //   keywords: "golang",
    //   locationId: "92000000",
    //   datePosted: "anyTime",
    //   sort: "mostRelevant",
    // },
    // headers: {
    //   "X-RapidAPI-Key": "f6782470e0mshb51f20e445a4d6cp126fa2jsn2bcde2d4284e",
    //   "X-RapidAPI-Host": "rapid-linkedin-jobs-api.p.rapidapi.com",
    // },
  };
  function fetchData() {
    setJobdata(jsondata);
    // try {
    //   // const response = await axios.request(options); uncomment this when your api works properly

    //   //console.log(jsondata);
    //   // setJobdata(response.data);
    //   // console.log(response.data); uncmmment this when api works properly
    // } catch (error) {
    //   console.error(error);
    // }
  }
  function handleClick() {
    fetchData();
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="lg:space-x-4 flex justify-center ">
      <img src={process.env.PUBLIC_URL + "/Logo.png"} alt="Description" className="h-40 "/>

      <div className="m-8">
        <input
          type="text"
          placeholder="Search Job..."
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-full bg-orange-50 text-xl border-2 border-orange-500 p-4 placeholder-orange-400 focus:text-violet-950 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 m-6 h-[25px] w-[60%]"
        />
        <button
          type="button"
          onClick={handleClick}
          className="boarder boarder-white boarder px-4 py-2 rounded-3xl h-fit bg-orange-500 hover:bg-orange-400 font-bold text-white  transition duration-150 text-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
