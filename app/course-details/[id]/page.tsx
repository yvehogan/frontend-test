"use client";

import React, { useState } from "react";
import { RxSlash } from "react-icons/rx";
import { MdOutlineShare, MdCheck } from "react-icons/md";
import { Progress } from "@/components/ui/progress";
import { GoLock } from "react-icons/go";

import { CiBookmarkMinus } from "react-icons/ci";
import YouTube from "react-youtube";
import { useParams } from "next/navigation";
import Image from "next/image";
import TabNavigation from "@/components/TabNavigation";
import notification from "@/lib/utilities/notification";


const mockCourseData = {
  "01": {
    name: "Frontend Development",
    instructor: "Colt Steele",
    link: "https://www.youtube.com/watch?v=YTv1iL9zib8",
    video_id: "YTv1iL9zib8",
    role: "Frontend expert",
    description1: 'A project management methodology is a set of principles and practices that guide you in organizing your projects to ensure their optimum performance. Basically, it is a framework that helps you to manage your project in the best way possible.',
    description2: 'Project management is so important to organizations and teams, but in order for it to be really effective, you need to make sure you are correctly mapping your project management methodology to your team type, project, organization and goals.',
    about:
      "This course is designed to help you for practical day to day project management, to improve your project management knowledge",
    courseItems: [
      {
        number: "01",
        title: "Introduction to project management",
        icon: MdCheck,
      },
      {
        number: "02",
        title: "Basic concepts of project management",
        icon: MdCheck,
      },
      {
        number: "03",
        title: "Terminologies in project management",
        icon: MdCheck,
      },
      {
        number: "04",
        title: "Project Life cycle",
        icon: MdCheck,
      },
      {
        number: "05",
        title: "Project management processes",
        icon: "",
      },
      {
        number: "06",
        title: "Project management methodologies",
        icon: GoLock,
      },
      {
        number: "07",
        title: "Common documents in project management",
        icon: GoLock,
      },
    ],
  },
  "02": {
    name: "Backend Development",
    instructor: "Maximilian Schwarzmüller",
    link: "https://www.youtube.com/watch?v=cNaEyuTd2YA",
    video_id: "cNaEyuTd2YA",
    role: "Backend expert",
    description1: 'A project management methodology is a set of principles and practices that guide you in organizing your projects to ensure their optimum performance. Basically, it is a framework that helps you to manage your project in the best way possible.',
    description2: 'Project management is so important to organizations and teams, but in order for it to be really effective, you need to make sure you are correctly mapping your project management methodology to your team type, project, organization and goals.',
    about:
      "This course is designed to help you for practical day to day project management, to improve your project management knowledge",
    courseItems: [
      {
        number: "01",
        title: "Introduction to project management",
        icon: MdCheck,
      },
      {
        number: "02",
        title: "Basic concepts of project management",
        icon: MdCheck,
      },
      {
        number: "03",
        title: "Terminologies in project management",
        icon: MdCheck,
      },
      {
        number: "04",
        title: "Project Life cycle",
        icon: MdCheck,
      },
      {
        number: "05",
        title: "Project management processes",
        icon: "",
      },
      {
        number: "06",
        title: "Project management methodologies",
        icon: GoLock,
      },
      {
        number: "07",
        title: "Common documents in project management",
        icon: GoLock,
      },
    ],
  },
  "03": {
    name: "Project Management",
    instructor: "Angela Yu",
    link: "https://www.youtube.com/watch?v=l5jUaLBXEg8",
    video_id: "l5jUaLBXEg8",
    role: "Project expert",
    description1: 'A project management methodology is a set of principles and practices that guide you in organizing your projects to ensure their optimum performance. Basically, it is a framework that helps you to manage your project in the best way possible.',
    description2: 'Project management is so important to organizations and teams, but in order for it to be really effective, you need to make sure you are correctly mapping your project management methodology to your team type, project, organization and goals.',
    about:
      "This course is designed to help you for practical day to day project management, to improve your project management knowledge",
    courseItems: [
      {
        number: "01",
        title: "Introduction to project management",
        icon: MdCheck,
      },
      {
        number: "02",
        title: "Basic concepts of project management",
        icon: MdCheck,
      },
      {
        number: "03",
        title: "Terminologies in project management",
        icon: MdCheck,
      },
      {
        number: "04",
        title: "Project Life cycle",
        icon: MdCheck,
      },
      {
        number: "05",
        title: "Project management processes",
        icon: "",
      },
      {
        number: "06",
        title: "Project management methodologies",
        icon: GoLock,
      },
      {
        number: "07",
        title: "Common documents in project management",
        icon: GoLock,
      },
    ],
  },
  "04": {
    name: "Product Management",
    instructor: "Stephen Grider",
    link: "https://www.youtube.com/watch?v=cdUyEou0LHg",
    video_id: "cdUyEou0LHg",
    role: "Product expert",
    description1: 'A project management methodology is a set of principles and practices that guide you in organizing your projects to ensure their optimum performance. Basically, it is a framework that helps you to manage your project in the best way possible.',
    description2: 'Project management is so important to organizations and teams, but in order for it to be really effective, you need to make sure you are correctly mapping your project management methodology to your team type, project, organization and goals.',
    about:
      "This course is designed to help you for practical day to day project management, to improve your project management knowledge",
    courseItems: [
      {
        number: "01",
        title: "Introduction to project management",
        icon: MdCheck,
      },
      {
        number: "02",
        title: "Basic concepts of project management",
        icon: MdCheck,
      },
      {
        number: "03",
        title: "Terminologies in project management",
        icon: MdCheck,
      },
      {
        number: "04",
        title: "Project Life cycle",
        icon: MdCheck,
      },
      {
        number: "05",
        title: "Project management processes",
        icon: "",
      },
      {
        number: "06",
        title: "Project management methodologies",
        icon: GoLock,
      },
      {
        number: "07",
        title: "Common documents in project management",
        icon: GoLock,
      },
    ],
  },
  "05": {
    name: "Business Analyst",
    instructor: "Rob Percival",
    link: "https://www.youtube.com/watch?v=Q-e0FwT4Mk4",
    video_id: "e0FwT4Mk4",
    role: "Expert analyst",
    description1: 'A project management methodology is a set of principles and practices that guide you in organizing your projects to ensure their optimum performance. Basically, it is a framework that helps you to manage your project in the best way possible.',
    description2: 'Project management is so important to organizations and teams, but in order for it to be really effective, you need to make sure you are correctly mapping your project management methodology to your team type, project, organization and goals.',
    about:
      "This course is designed to help you for practical day to day project management, to improve your project management knowledge",
    courseItems: [
      {
        number: "01",
        title: "Introduction to project management",
        icon: MdCheck,
      },
      {
        number: "02",
        title: "Basic concepts of project management",
        icon: MdCheck,
      },
      {
        number: "03",
        title: "Terminologies in project management",
        icon: MdCheck,
      },
      {
        number: "04",
        title: "Project Life cycle",
        icon: MdCheck,
      },
      {
        number: "05",
        title: "Project management processes",
        icon: "",
      },
      {
        number: "06",
        title: "Project management methodologies",
        icon: GoLock,
      },
      {
        number: "07",
        title: "Common documents in project management",
        icon: GoLock,
      },
    ],
  },
};

export default function CourseDetails() {
  const params = useParams();
  const id = params.id as string;
  const courseDetails = mockCourseData[id as keyof typeof mockCourseData];
  const [isExpanded, setIsExpanded] = useState(false);

  if (!courseDetails) {
    return <div>Course not found</div>;
  }

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const maxLength = 15;
  const content = courseDetails?.about || "";
  const displayedContent = isExpanded
    ? content
    : content.split(" ").slice(0, maxLength).join(" ") +
      (content.split(" ").length > maxLength ? "..." : "");

      const handleIconClick = (action: any) => {
        notification({
          title: "Action Successful",
          message: `You have successfully ${action} this item`,
          type: "success"
        });
      };
      
    
    

  return (
    <div className="flex">
      <div className="w-3/4 border-r-2 border-[#F2F2F2]  min-h-screen">
        <div className="mt-10 mr-14">
          <div className="flex gap-1 items-center mb-4">
            <p className="text-textGray font-semibold text-lg">My Courses</p>
            <RxSlash className="text-textGray" />
            <p className="text-textGray font-semibold text-lg">Management</p>
            <RxSlash className="text-textGray" />
            <p className="text-[#111B2F] font-semibold text-lg">
              {courseDetails.name}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl text-textColor font-semibold mt-3">
              {courseDetails?.name}
            </h2>
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
          <p className="text-textGray mt-2 mb-5">{courseDetails?.instructor}</p>
          <YouTube
            videoId={courseDetails?.video_id}
            iframeClassName="w-full h-[400px] rounded-md"
          />
          <TabNavigation courseDetails={courseDetails} />
        </div>
      </div>
      <div className="w-1/4 mt-14">
        <h3 className="text-textColor text-lg font-semibold px-6">
          About the Course
        </h3>
        <div className="border-b-2 border-[#F2F2F2] px-6">
          <div className="flex gap-3 mt-7 mb-3">
            <Image
              src="/images/avatar.png"
              height={50}
              width={50}
              alt="avatar"
              className="rounded-full"
            />
            <div className=" font-semibold">
              <p className="text-textColor">{courseDetails?.instructor}</p>
              <p className="text-textGray">{courseDetails?.role}</p>
            </div>
          </div>
          <p className="text-textGray mt-5 mb-8">
            {displayedContent}{" "}
            {content.split(" ").length > maxLength && (
              <button
                onClick={toggleReadMore}
                className="text-textColor focus:outline-none inline"
              >
                {isExpanded ? "read less" : "read more"}
              </button>
            )}
          </p>
        </div>
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
