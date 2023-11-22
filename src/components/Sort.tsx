import React, { useState } from 'react'

const Sort = ({data, updateSortedData}:any) => {
const [sortOptions,setSortOptions]=useState("None");
const [sortedProjects,setSortedProjects] =useState([...data])

const handleSort =(option:string)=>{
    let sortedArray;
    switch(option){
        case 'likes':
            sortedArray=[...sortedProjects].sort((a,b)=> b.likes - a.likes)
            break;
        case 'views':
            sortedArray=[...sortedProjects].sort((a,b)=> b.views - a.views)
            break;
        case 'none':
            sortedArray=[...sortedProjects]
            break;
        default:
            sortedArray=[...sortedProjects]
            break;
    }
    setSortedProjects(sortedArray);
    setSortOptions(option);
    updateSortedData(sortedArray);
}

  return (
    <div className="max-w-[600px] h-[4.5rem] mx-auto flex items-center justify-center   ">
        <div><label htmlFor="sortOptions">Sort By: </label>
        <select
        id="sortOptions"
        value={sortOptions}
        onChange={(e)=> handleSort(e.target.value)}
        className="border-black"
        >
            <option value="none">None</option>
            <option value="likes">Most Likes</option>
            <option value="views">Most Views</option>
        </select>
        </div>
    </div>
  )
}

export default Sort