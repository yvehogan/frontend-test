import React from "react";
import { Progress } from "@/components/ui/progress";
import { MdCheck } from "react-icons/md";
import { GoLock } from "react-icons/go";
import { CourseItem } from "@/lib/types/details";

interface CourseProgressProps {
  courseItems: CourseItem[];
}

export default function CourseProgress({ courseItems }: CourseProgressProps) {
  const completedItems = courseItems.filter(item => item.icon === "MdCheck").length;
  const progressPercentage = (completedItems / courseItems.length) * 100;

  return (
    <div className="px-6">
      <h3 className="text-textColor text-lg font-semibold mt-7">
        Course Completion
      </h3>
      <div className="text-textGray flex justify-between mt-3 mb-1">
        <p>{progressPercentage.toFixed(0)}% completed</p>
        <p>{completedItems}/{courseItems.length}</p>
      </div>
      <Progress value={progressPercentage} />
      {courseItems.map((item, index) => (
        <div
          className={`flex justify-between py-4 ${
            !item.icon ? "bg-[#F9F9F9] -mx-4 px-4" : ""
          }`}
          key={index}
        >
          <div className="flex gap-2">
            <p className="text-textGray">{item.number}</p>
            <p
              className={
                item.icon === "MdCheck" ? "text-textGray" : "text-textColor"
              }
            >
              {item.title}
            </p>
          </div>
          {item.icon ? (
            item.icon === "MdCheck" ? (
              <MdCheck size={24} className="text-green-500" />
            ) : (
              <GoLock size={24} className="text-textColor" />
            )
          ) : (
            <div className="w-6 h-6"></div>
          )}
        </div>
      ))}
    </div>
  );
}