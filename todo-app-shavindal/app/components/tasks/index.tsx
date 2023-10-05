'use client';

import { ChangeEvent, useContext, useState } from "react";
import TaskItem from "./TaskItem";
import { TaskListContext } from "@/app/context/TaskListContext";
import { ITask } from "@/app/interfaces/ITasks";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Tasks: React.FC = () => {
    const taskContext = useContext(TaskListContext);
    const { tasks, isLoading } = taskContext!;

    const [currentPage, setCurrentPage] = useState<number>(1);
    const taskItemsPerPage = 8;
    const indexOfLastTaskItem = currentPage * taskItemsPerPage;
    const indexOfFirstTaskItem = indexOfLastTaskItem - taskItemsPerPage;
    const currentTaskItems = tasks?.slice(indexOfFirstTaskItem, indexOfLastTaskItem);

    const handle = (e: ChangeEvent<unknown>, val: number) => {
        setCurrentPage(val);
    }

    // if (isLoading)
    //     return <div>Loading...</div>

    return (
        <div className="border-solid border-2 border-stroke rounded-lg px-2 py-2 w-full mr-8 min-h-full flex flex-col items-center">
            <div className="pb-2 px-4 w-full">
                <p>Tasks</p>
            </div>
            <hr />
            {isLoading ? <div>Loading...</div> :
                <>
                    <div className="w-full h-full">
                        {currentTaskItems?.map((task: ITask,) => TaskItem(task))}
                    </div>
                    <div className="py-4">
                        <Stack spacing={2} className="mx-auto">
                            <Pagination variant="outlined" shape="rounded" count={Math.ceil(tasks.length / 8)} page={currentPage} onChange={handle} />
                        </Stack>
                    </div>
                </>}

        </div>
    );
};

export default Tasks;
