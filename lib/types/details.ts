import { IconType } from 'react-icons';

export interface CourseItem {
  number: string;
  title: string;
  icon: string;
}

export interface Detail {
  id: string;
  amount: number;
  courses: string;
  instructor: string;
  link: string;
  video_id: string;
  about: string;
  role: string;
  description1: string;
  description2: string;
  // courseItems: CourseItem[];
}

export interface CourseDataMap {
  [key: string]: Detail;
}