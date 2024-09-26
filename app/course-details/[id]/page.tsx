"use client";

import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { MdCheck } from "react-icons/md";

import { useParams } from "next/navigation";
import TabNavigation from "@/components/course-details/TabNavigation";
import { mockCourseData } from "@/lib/data/mockCourseData";
import CourseHeader from "@/components/course-details/CourseHeader";
import CourseVideo from "@/components/course-details/CourseVideo";
import AboutCourse from "@/components/course-details/AboutCourse";


export default function CourseDetails() {
  const params = useParams();
  const id = params.id as string;
  const courseDetails = mockCourseData[id as keyof typeof mockCourseData];

  if (!courseDetails) {
    return <div>Course not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/4 border-r-2 border-[#F2F2F2]  min-h-screen">
        <div className="mt-10  lg:mr-14">
          <CourseHeader name={courseDetails?.name} instructor={courseDetails?.instructor}  />
          <CourseVideo  videoId={courseDetails?.video_id}/>
          <TabNavigation courseDetails={courseDetails} />
        </div>
      </div>
      <div className="w-full lg:w-1/4 mt-14">
          <AboutCourse instructor={courseDetails?.instructor} role={courseDetails?.role} about={courseDetails?.about} />
        <div className="px-6">
          <h3 className="text-textColor text-lg font-semibold mt-7">
            Course Completion
          </h3>
          <div className="text-textGray flex justify-between mt-3 mb-1">
            <p>33% completed</p>
            <p>5/15</p>
          </div>
          <Progress value={33} />
          {courseDetails?.courseItems?.map((item, index) => (
            <div
              className={`flex justify-between py-4 ${
                !item?.icon ? "bg-[#F9F9F9] -mx-4 px-4" : ""
              }`}
              key={index}
            >
              <div className="flex gap-2">
                <p className="text-textGray">{item?.number}</p>
                <p
                  className={
                    item?.icon === MdCheck ? "text-textGray" : "text-textColor"
                  }
                >
                  {item?.title}
                </p>
              </div>
              {item?.icon ? (
                <item.icon
                  size={24}
                  className={
                    item?.icon === MdCheck ? "text-green-500" : "text-textColor"
                  }
                />
              ) : (
                <div className="w-6 h-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}