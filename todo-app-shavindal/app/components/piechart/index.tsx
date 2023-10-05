import './piechart.css';
import PieChartComponent from "./PieChart";
import ChartLegend from './ChartLegend';

const CustomPieChart: React.FC = () => {
    return (
        <div className="piechart">
            <div className="flex items-center py-2 px-4">
                <h1 className="font-medium text-large w-max">Task Priorities</h1>
            </div>
            <hr />
            <div className="flex justify-center">
                <PieChartComponent />
                <ChartLegend />
            </div>
        </div>
    );
};

export default CustomPieChart;
