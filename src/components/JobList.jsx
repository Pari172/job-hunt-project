import React, { useState, useEffect } from "react";

function JobList({ jobdata }) {
  const [filterList, setFiterList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterSet = new Set();
    jobdata?.data?.forEach((item) => {
      // filterSet.add(item?.job_employment_type.toLowerCase());
      filterSet.add(item?.type.toLowerCase()); // we were using linkedin api to save it from 100% usage we converted its one query into jsondata (local data)
    });
    setFiterList([...filterSet]);
  }, [jobdata]);
  useEffect(() => {
    // Filter the job data based on the selected filter
    if (selectedFilter) {
      const newData = jobdata?.data?.filter(
        // (item) => item.job_employment_type.toLowerCase() === selectedFilter
        (item) => item.type.toLowerCase() === selectedFilter
      );
      setFilteredData(newData);
    } else {
      // If no filter is selected, show complete data
      setFilteredData(jobdata?.data || []);
    }
  }, [selectedFilter, jobdata]);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };
  console.log(filterList);
  return (
    <div>
      <div className="flex gap-6 justify-center bg-orange-50 p-10 m-8 rounded-2xl mx-auto w-fit">
        {/* Render filter buttons */}
        <button
          onClick={() => handleFilterSelect(null)}
          className="w-fit h-fit boarder boarder-white boarder px-4 py-2 rounded-3xl  bg-orange-500 hover:bg-orange-400 font-bold text-white  transition duration-150 text-sm"
        >
          Show All
        </button>{" "}
        {/* Add this button to show all data */}
        {filterList.map((filter, index) => (
          <button
            key={index}
            onClick={() => handleFilterSelect(filter)}
            className=" w-fit h-fit boarder boarder-white boarder px-4 py-2 rounded-3xl  bg-orange-500 hover:bg-orange-400 font-bold text-white  transition duration-150 text-sm"
          >
            {<h4 className="">{filter}</h4>}
          </button>
        ))}
      </div>
      <div className=" ">
        <div className=" ">
          {/* Render filtered job items */}
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="flex space-x-8 bg-orange-100 border-2 cursor-pointer border-orange-500 w-[70%] p-2 rounded-xl mb-10 ml-[20%] h-50 "
            >
              {/* {item.job_title} {item.job_employment_type.toLowerCase()} */}
              <img src={item.company.logo} className="  rounded-sm p-4"/>
              <div className="flex flex-col p-4 pt-8 text-left space-y-2">
                <h3 className="font-bold font-mono text-2xl">
                  {item.title}
                </h3>
                <div className="flex space-x-6">
                <h4 className="font-semibold">{item.company.name}</h4>
                <h4>Job-ID: {item.id}</h4>
                </div>
                <p className="font-light text-lg text-black">Job Location- {item.location}</p>
                <h6 className="font-semibold text-lg text-orange-500">
                  {item.type.toUpperCase()}
                </h6>
                <div className="flex space-x-52 p-6 justify-center">
                  <h3 className="font-light text-gray-800 mt-4">posted {item.postDate}</h3>
                  <a href={item.url} target="_blank" className="flex space-x-2 h-fit w-fit pl-6 pr-6 pt-4 pb-4 rounded-[50px] bg-orange-500 text-white font-bold hover:bg-orange-400">
                    <p>Apply Now</p> <img src={process.env.PUBLIC_URL + '/arrow-right-line.png'} alt="arrow" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobList;
