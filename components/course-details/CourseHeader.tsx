import React from "react";
import { RxSlash } from "react-icons/rx";
import { MdOutlineShare } from "react-icons/md";
import { CiBookmarkMinus } from "react-icons/ci";
import notification from "@/lib/utilities/notification";

interface CourseHeaderProps {
  name: string;
  instructor: string;
}

export default function CourseHeader({ name, instructor }: CourseHeaderProps) {
  const handleIconClick = (action: string) => {
    notification({
      title: "Action Successful",
      message: `You have successfully ${action} this item`,
      type: "success"
    });
  };

  return (
    <>
      <div className="flex flex-wrap gap-1 items-center mb-4">
        <p className="text-textGray font-semibold text-lg">My Courses</p>
        <RxSlash className="text-textGray" />
        <p className="text-textGray font-semibold text-lg">Management</p>
        <RxSlash className="text-textGray" />
        <p className="text-[#111B2F] font-semibold text-lg">{name}</p>
      </div>
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-3xl text-textColor font-semibold mt-3">{name}</h2>
        <div className="flex gap-4">
          <MdOutlineShare 
            className="h-10 w-10 border-2 rounded-full p-2 border-[#F2F2F2] cursor-pointer" 
            onClick={() => handleIconClick('shared')}
          />
          <CiBookmarkMinus 
            className="h-10 w-10 border-2 rounded-full p-2 border-[#F2F2F2] cursor-pointer" 
            onClick={() => handleIconClick('bookmarked')}
          />
        </div>
      </div>
      <p className="text-textGray mt-2 mb-5">{instructor}</p>
    </>
  );
}