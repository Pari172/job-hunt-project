import React, { createContext , useState } from 'react'

import Search from '../components/Search'
import JobList from '../components/JobList';
export const JobContext = createContext();
function SearchPage() {
    const [jobdata,setJobdata] = useState(null);
  return (
    <div>
      <JobContext.Provider value={{jobdata,setJobdata}}>
        <Search/>
        <JobList jobdata={jobdata}/>
      </JobContext.Provider>
    </div>
  )
}

export default SearchPage
