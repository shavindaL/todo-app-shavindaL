'use client';
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Group A", value: 1400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
];
const COLORS = ["#2F80ED", "#F2C94C", "#EB5757"];

const CustomPieChart: React.FC = () => {
    return (
        <div className="w-max">
            <div className="flex items-center py-2 px-4">
                <h1 className="font-medium text-large w-max ">Activity Feed</h1>
            </div>
            <hr />
            <PieChart width={300} height={200}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={37}
                    outerRadius={74}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default CustomPieChart;
