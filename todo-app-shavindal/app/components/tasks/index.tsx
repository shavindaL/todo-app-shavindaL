'use client';
import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TaskListContext } from "@/app/context/TaskListContext";
import { ITask } from "@/app/interfaces/ITasks";

const Tasks: React.FC = () => {
    const taskContext = useContext(TaskListContext);
    const { tasks } = taskContext!;
    return (
        <div className="border-solid border-2 border-stroke rounded-lg px-2 py-2 w-full mr-6">
            <div className="py-2 w-full">
                <p>Tasks</p>
                <hr />
            </div>
            <div>
                {tasks?.map((task:ITask, ) => TaskItem(task))}
            </div>

        </div>
    );
};

export default Tasks;
