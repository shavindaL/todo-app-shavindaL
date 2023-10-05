'use client';

import { TaskListContext } from "@/app/context/TaskListContext";
import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { PieChart, Pie, Cell } from "recharts";

const PieChartComponent = () => {
    const taskContext = useContext(TaskListContext);
    const { lowPriorityCount, mediumPriorityCount, highPriorityCount, isLoading } = taskContext!;
    const data = [
        { name: "Low Priority Count", value: lowPriorityCount },
        { name: "Medium Priority Count", value: mediumPriorityCount },
        { name: "High Priority Count", value: highPriorityCount },
    ];
    const colorSelector = (name: string) => {
        switch (name) {
            case "Low Priority Count":
                return "#2F80ED";
            case "Medium Priority Count":
                return "#F2C94C";
            case "High Priority Count":
                return "#EB5757";
        }
    };

    return (
        <>
            {isLoading ?
                <div className="flex justify-center items-center h-52 w-40">
                    <CircularProgress />
                </div>
                : <PieChart className='w-max' width={400} height={200}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={100}
                        innerRadius={37}
                        outerRadius={74}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${entry.value + index}`} fill={colorSelector(entry.name)} />
                        ))}
                    </Pie>
                </PieChart>
            }
        </>
    );
};

export default PieChartComponent;