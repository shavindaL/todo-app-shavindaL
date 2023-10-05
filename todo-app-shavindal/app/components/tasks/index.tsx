'use client';

import { ChangeEvent, useContext, useState } from "react";
import TaskItem from "./TaskItem";
import { TaskListContext } from "@/app/context/TaskListContext";
import { ITask } from "@/app/interfaces/ITasks";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Tasks: React.FC = () => {
    const taskContext = useContext(TaskListContext);
    const { tasks } = taskContext!;

    const [currentPage, setCurrentPage] = useState<number>(1);
    const taskItemsPerPage = 8;
    const indexOfLastTaskItem = currentPage * taskItemsPerPage;
    const indexOfFirstTaskItem = indexOfLastTaskItem - taskItemsPerPage;
    const currentTaskItems = tasks?.slice(indexOfFirstTaskItem, indexOfLastTaskItem);

    const handle = (e: ChangeEvent<unknown>, val: number) => {
        setCurrentPage(val);
    }

    return (
        <div className="border-solid border-2 border-stroke rounded-lg px-2 py-4 w-full mr-6 h-full">
            <div className="pb-2 px-4 w-full">
                <p>Tasks</p>
            </div>
            <hr />
            <div className="flex flex-col items-center h-min">
                <div className="w-full pb-4 h-full">
                    {currentTaskItems?.map((task: ITask,) => TaskItem(task))}
                </div>
                <div className="py-4">
                    <Stack spacing={2} className="mx-auto">
                        <Pagination variant="outlined" shape="rounded" count={Math.ceil(tasks.length / 8)} page={currentPage} onChange={handle} />
                    </Stack>
                </div>
            </div>

        </div>
    );
};

export default Tasks;
