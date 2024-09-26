"use client"
import React, { useState } from 'react';
import { Home, User, Settings, HelpCircle } from 'lucide-react';
import { PiCalendarMinusBold } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { BiMessageMinus } from "react-icons/bi";
import { TbBook2 } from "react-icons/tb";
import Image from 'next/image';
import Link from 'next/link';

const SideMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: RxDashboard, label: 'RxDashboard' },
    { icon: TbBook2, label: 'TbBook2' },
    { icon: PiCalendarMinusBold, label: 'PiCalendarMinusBold' },
    { icon: BsPeople, label: 'BsPeople' },
    { icon: BiMessageMinus, label: 'BiMessageMinus' },
  ];

  return (
    <nav className="w-20 h-screen bg-white border-r-2 border-[#F2F2F2]">
      <div className="flex flex-col items-center py-4">
        <Link href="/">
        <Image src="/logo.png" height={45} width={45} alt='logo' className='mt-6 mb-6' />
        </Link>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`
              p-5 mb-4 focus:outline-none relative w-full
              ${activeIndex === index 
                ? 'text-blue-500 bg-[#F9F9F9]' 
                : 'text-gray-500 hover:text-gray-800 hover:bg-[#F9F9F9]'
              }
            `}
            onClick={() => setActiveIndex(index)}
            aria-label={item.label}
          >
            <div className="flex justify-center">
              <item.icon size={24} />
            </div>
            {activeIndex === index && (
              <div className="absolute -right-0.5 top-0 bottom-0 w-1 bg-blue-500" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SideMenu;