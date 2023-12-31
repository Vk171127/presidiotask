import { Project } from "@/data/project";
import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ updateSearchedData }: any) => {
  const [trigger, setTrigger] = useState(false);
  const [suggestionDataFiltered, setSuggestionDataFiltered] = useState([""]);
  const searchData = [
    ...new Set(Project.map((p) => p.creativeField)),
    ...new Set(Project.map((p) => p.tools)),
  ];
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestionHandler = (query: string) => {
    const filterData = searchData
      .filter((data) => data.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 5);
    setSuggestionDataFiltered(filterData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    suggestionHandler(query);
    setTrigger(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    const data = Project.filter(
      (p) => p.creativeField === suggestion || p.tools === suggestion
    ).slice(0, 5);

    updateSearchedData(data);
    setTrigger(false);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setTrigger(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="p-5">
      <div className="absolute left-[14rem] top-[26.5rem]">
        <IoSearch />
      </div>
      <div className="w-full border-2 rounded-full bg-white">
        <div className="lg:w-full relative" ref={inputRef}>
          <input
            type="text"
            name=""
            placeholder="Search the creative world at work"
            onChange={handleChange}
            className="bg-transparent outline-none w-[80%] lg:w-full pl-10 text-md lg:text-xl font-bold text-black placeholder:text-gray-500"
          />
          {trigger && (
            <div className="w-[200px] bg-white shadow-lg rounded-md absolute top-[100%] left-10">
              {suggestionDataFiltered.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 border-b hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
