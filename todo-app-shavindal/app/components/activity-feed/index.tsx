'use client';
import { TaskListContext } from "@/app/context/TaskListContext";
import ActivityFeedItem from "./ActivityFeedItem";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";

const ActivityFeed: React.FC = () => {
    const taskContext = useContext(TaskListContext);
    const { tasks, isLoading } = taskContext!;

    return (
        <div className="border-solid border-2 border-stroke rounded-lg w-full max-h-96 h-96 py-2">
            <div className="flex items-center py-2 px-4">
                <h1 className="font-medium text-large w-max ">Activity Feed</h1>
            </div>
            <hr />
            {
                isLoading ?
                    <div className="flex justify-center items-center h-full">
                        <CircularProgress />
                    </div>
                    : <div className="overflow-auto h-5/6 ">
                        {tasks?.map((activity) => ActivityFeedItem(activity))}
                    </div>
            }

        </div>
    )
};
export default ActivityFeed;