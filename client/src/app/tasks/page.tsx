"use client";

import { CreateTaskDialog } from "@/components/dialog/create-task-dialog";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchToDaysTasks } from "@/redux/slices/tasksSlice";
import { useEffect } from "react";
import { TaskListView } from "src/sections/tasks/view";

export default function ServiceCreatePage() {
  const despatch = useAppDispatch();
  const refetch = useAppSelector((slice) => slice.TaskSlice.refetch);

  useEffect(() => {
    despatch(fetchToDaysTasks());
  }, [refetch]);
  return (
    <>
      <TaskListView />
      <CreateTaskDialog />
    </>
  );
}
