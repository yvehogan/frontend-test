import React, { useState } from "react";
import Image from "next/image";

interface AboutCourseProps {
  instructor: string;
  role: string;
  about: string;
}

export default function AboutCourse({ instructor, role, about }: AboutCourseProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 15;

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const displayedContent = isExpanded
    ? about
    : about.split(" ").slice(0, maxLength).join(" ") +
      (about.split(" ").length > maxLength ? "..." : "");

  return (
    <div className="border-b-2 border-[#F2F2F2] px-6">
      <h3 className="text-textColor text-lg font-semibold">About the Course</h3>
      <div className="flex items-center gap-3 mt-7 mb-3">
        <Image
          src="/images/avatar.png"
          height={50}
          width={50}
          alt="avatar"
          className="rounded-full"
        />
        <div className="font-semibold">
          <p className="text-textColor">{instructor}</p>
          <p className="text-textGray">{role}</p>
        </div>
      </div>
      <p className="text-textGray mt-5 mb-8">
        {displayedContent}{" "}
        {about.split(" ").length > maxLength && (
          <button
            onClick={toggleReadMore}
            className="text-textColor focus:outline-none inline"
          >
            {isExpanded ? "read less" : "read more"}
          </button>
        )}
      </p>
    </div>
  );
}