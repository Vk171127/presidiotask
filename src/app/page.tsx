"use client";

import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";
import { Project, ProjectType } from "@/data/project";
import Search from "@/components/Search";
import Intro from "@/components/Intro";
import Select from "@/components/Select";
import Sort from "@/components/Sort";

const Home = () => {
  const [project, setProject] = useState(Project);
  const totalcat = [
    ...new Set(Project.map((project) => project.creativeField)),
  ];

  const updateSearchedData = (newData :any) => {
    setProject(newData);
  };

  const updateSortedData = (sortedData :any)=>{
    setProject(sortedData);
  }


  const filterCat = (cat: any) => {
    const newCat = Project.filter((newval) => newval.creativeField === cat);
    setProject(newCat);
  };
  return (
    <div>
      <Intro />
      <div className="flex">
        <div className=" m-4 w-[10%]">
          <Select
            totalcat={totalcat}
            setProject={setProject}
            filterCat={filterCat}
          />
        </div>
        <div className="w-[70%]">
          <Search updateSearchedData={updateSearchedData} />
        </div>
        <div className="w-[20%]">
        <Sort data={project} updateSortedData={updateSortedData}/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 justify-stretch gap-5">
        {project.map((project: ProjectType) => (
          <div className="p-1" key={project.id}>
            <ProjectCard
              projectName={project.projectName}
              creatorName={project.creatorName}
              likes={project.likes}
              views={project.views}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
