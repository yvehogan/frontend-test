import React, { useState } from "react";
import Review from "./Review";

interface CourseDetails {
  description1: string;
  description2: string;
  instructor: string;
}

interface TabNavigationProps {
  courseDetails: CourseDetails;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ courseDetails }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
    { id: "discussion", label: "Discussion" },
    { id: "resources", label: "Resources" },
    { id: "instructor", label: "Instructor" },
  ];

  return (
    <div className="w-full mt-5">
      <nav className="flex justify-start gap-[75px] border-b border-gray-200 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 text-md font-semibold ${
              activeTab === tab.id
                ? "border-b-2 border-textBlue text-textColor"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="mt-4">
        {activeTab === "description" && (
          <div className="flex">
          <div className="w-[65%] pr-12 text-[#949BA4] text-[17px]">
            <p className="">{courseDetails?.description1}</p>
            <p className="mt-4">{courseDetails?.description2}</p>
          </div>
          <div className="">
          <Review />
          </div>
          </div>
        )}
        {activeTab === "reviews" && <p>Reviews</p>}
        {activeTab === "discussion" && <p>Discussion </p>}
        {activeTab === "resources" && <p>Resources</p>}
        {activeTab === "instructor" && <p>{courseDetails?.instructor}</p>}
      </div>
    </div>
  );
};

export default TabNavigation;
