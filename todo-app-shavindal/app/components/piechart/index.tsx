import PieChartComponent from "./PieChart";

const CustomPieChart: React.FC = () => {
    return (
        <div className="w-full border-solid border-2 border-stroke rounded-lg mt-8">
            <div className="flex items-center py-2 px-4">
                <h1 className="font-medium text-large w-max ">Task Priorities</h1>
            </div>
            <hr />
            <PieChartComponent />
        </div>
    );
};

export default CustomPieChart;
