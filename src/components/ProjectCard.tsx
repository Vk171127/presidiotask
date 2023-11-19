import Image from "next/image";
import React from "react";
import { BiLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

type ProjectCardType = {
  projectName: string;
  creatorName: string;
  likes: number;
  views: number;
};

const ProjectCard = ({
  projectName,
  creatorName,
  likes,
  views,
}: ProjectCardType) => {
  return (
    <div className=" rounded-lg   h-[23rem] w-[100%] bg-white cursor-pointer ">
      <div className="w-[100%] h-[85%] rounded-md bg-sky-500">
      </div>
      <div className="flex justify-between">
        <div className="items font-bold">{projectName}</div>
        <div className="items-end flex">
          <div>
            <BiLike />
          </div>
          <div className="px-2 text-xs font-semibold">{likes}</div>
          <div>
            <FaEye />
          </div>
          <div className="px-2 text-xs font-semibold">{views}</div>
        </div>
      </div>
      <div className="text-sm">{creatorName}</div>
    </div>
  );
};

export default ProjectCard;
