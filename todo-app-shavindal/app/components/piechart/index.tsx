'use client';
import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Group A", value: 1400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
];
const COLORS = ["#2F80ED", "#F2C94C", "#EB5757"];

const CustomPieChart: React.FC = () => {
    return (
        <div className="w-full border-solid border-2 border-stroke rounded-lg mt-8">
            <div className="flex items-center py-2 px-4">
                <h1 className="font-medium text-large w-max ">Task Priorities</h1>
            </div>
            <hr />
            <PieChart className='w-max' width={400} height={200}>
                <Pie
                    data={data}
                    cx={200}
                    cy={100}
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
