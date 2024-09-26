import React from "react";
import YouTube from "react-youtube";

interface CourseVideoProps {
  videoId: string;
}

export default function CourseVideo({ videoId }: CourseVideoProps) {
  return (
    <YouTube
      videoId={videoId}
      iframeClassName="w-full h-[400px] rounded-md"
    />
  );
}