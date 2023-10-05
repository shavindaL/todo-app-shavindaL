'use client';

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ITask, ITaskListChildProps, ITaskListContextProps } from "../interfaces/ITasks";

export const TaskListContext = createContext<ITaskListContextProps | null>(null);

const TaskListContextProvider = ({ children }: ITaskListChildProps) => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [highPriorityCount, setHighPriorityCount] = useState<number>(0);
    const [mediumPriorityCount, setMediumPriorityCount] = useState<number>(0);
    const [lowPriorityCount, setLowPriorityCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchTasks();
    }, []);

    const countTasskPriority = (tasks: ITask[]) => {
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

    const taskDateFormatHandler = (task: ITask) => {
        const dateCreated = new Date(task.createdAt);
        const date: number = dateCreated.getDate();
        let month: string = '';
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

        task.createdAt = `${month} ${date}`;
        return task;
    }

    const fetchTasks = () => {
        setIsLoading(true);
        axios
            .get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
            .then(
                (res) => {
                    const data = res.data;
                    data?.map(taskDateFormatHandler);
                    countTasskPriority(data);
                    setTasks(data);
                }
            )
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false));
    };
    return (
        <TaskListContext.Provider value={{ tasks, highPriorityCount, mediumPriorityCount, lowPriorityCount, isLoading }}>
            {children}
        </TaskListContext.Provider>
    );
}

export default TaskListContextProvider;