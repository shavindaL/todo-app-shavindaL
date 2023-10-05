'use client';

import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import { ITask, ITaskListChildProps, ITaskListContextProps, ITaskListItemProps } from "../interfaces/ITasks";
import { TASK_URL } from "../constants/constants";

export const TaskListContext = createContext<ITaskListContextProps | null>(null);

const TaskListContextProvider = ({ children }: ITaskListChildProps) => {
    const [tasks, setTasks] = useState<ITaskListItemProps[]>([]);
    const [highPriorityCount, setHighPriorityCount] = useState<number>(0);
    const [mediumPriorityCount, setMediumPriorityCount] = useState<number>(0);
    const [lowPriorityCount, setLowPriorityCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Function to count the number of tasks with each priority
    const countTaskPriority = (tasks: ITask[]) => {
        let highPriorityCount = 0;
        let mediumPriorityCount = 0;
        let lowPriorityCount = 0;

        for (const task of tasks) {
            switch (task.priority) {
                case 'HIGH':
                    highPriorityCount++;
                    break;
                case 'MEDIUM':
                    mediumPriorityCount++;
                    break;
                case 'LOW':
                    lowPriorityCount++;
                    break;
            }
        }

        setHighPriorityCount(highPriorityCount);
        setMediumPriorityCount(mediumPriorityCount);
        setLowPriorityCount(lowPriorityCount);
    };

    //Function to format the date and time of the task
    const taskDateFormatHandler = (task: ITask) => {
        const dateCreated = new Date(task.createdAt);
        const date: number = dateCreated.getDate();
        let month: string = '';
        const year: number = dateCreated.getFullYear();
        const hours: number = dateCreated.getHours();
        const minutes: number = dateCreated.getMinutes();
        switch (dateCreated.getMonth()) {
            case 0:
                month = "Jan";
                break;
            case 1:
                month = "Feb";
                break;
            case 2:
                month = "Mar";
                break;
            case 3:
                month = "Apr";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "Jun";
                break;
            case 6:
                month = "Jul";
                break;
            case 7:
                month = "Aug";
                break;
            case 8:
                month = "Sep";
                break;
            case 9:
                month = "Oct";
                break;
            case 10:
                month = "Nov";
                break;
            case 11:
                month = "Dec";
                break;
        }


        const taskItem: ITaskListItemProps = {
            id: task.id,
            createdBy: task.createdBy,
            priority: task.priority,
            year: `${year}`,
            month: `${month}`,
            date: `${date}`,
            hours: `${hours}`,
            minutes: `${minutes < 10 ? '0' + minutes : minutes}`,
            todo: task.todo,
            completed: task.completed
        }
        return taskItem;
    }

    //Function to fetch tasks from the API
    const fetchTasks = () => {
        setIsLoading(true);
        axios
            .get(TASK_URL)
            .then(
                (res) => {
                    const data = res.data;
                    const formattedData = data?.map(taskDateFormatHandler);

                    countTaskPriority(formattedData);
                    setTasks(formattedData);
                }
            )
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
    };

    //Fetch tasks on component mount
    useEffect(() => {
        fetchTasks();
    }, []);

    //Context value
    const contextValue = useMemo(() => ({ tasks, highPriorityCount, mediumPriorityCount, lowPriorityCount, isLoading }), [tasks, highPriorityCount, mediumPriorityCount, lowPriorityCount, isLoading]);

    return (
        <TaskListContext.Provider value={contextValue}>
            {children}
        </TaskListContext.Provider>
    );
}

export default TaskListContextProvider;