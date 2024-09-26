import React, { useState } from "react";
import { ColumnFiltersState, SortingState } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { columns } from "./columns";
import { courseData } from "@/lib/data/courseData";
import { Table } from "./table";

export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [instructorFilter, setInstructorFilter] = useState("");

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter instructors..."
          value={instructorFilter}
          onChange={(event) => setInstructorFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table
        data={courseData}
        columns={columns}
        sorting={sorting}
        setSorting={setSorting}
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
        instructorFilter={instructorFilter}
      />
    </div>
  );
}