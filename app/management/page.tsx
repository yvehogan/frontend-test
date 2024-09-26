"use client"

import { DataTable } from '@/components/tableData/DataTable';
import React from 'react'
import { RxSlash } from "react-icons/rx";

const Management = () => {
  return (
    <div className="p-6">
      <div className='flex gap-1 items-center mb-6'>
        <p className="text-textGray font-semibold text-lg">My Courses</p>
        <RxSlash className="text-textGray"/>
        <p className="text-[#111B2F] font-semibold text-lg">Management</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
        <DataTable />
      </div>
    </div>
  )
}

export default Management