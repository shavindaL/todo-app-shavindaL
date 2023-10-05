const ChartLegend: React.FC = () => {
    return (
        <div className='legend'>
            <div className='legend-item'>
                <div className="bg-red" />
                High
            </div>
            <div className='legend-item'>
                <div className="bg-yellow" />
                Medium
            </div>
            <div className='legend-item'>
                <div className="bg-blue" />
                Low
            </div>
        </div>
    );
};
export default ChartLegend;