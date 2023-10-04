import Image from "next/image";
import TaskItem from "./TaskItem";

const Tasks: React.FC = () => {
    return (
        <div className="border-solid border-2 border-stroke rounded-lg px-2 py-2 w-full">
            <div className="py-2 w-full">
                <p>Tasks</p>
                <hr />
            </div>
            <div>
                <TaskItem />
                <TaskItem />
            </div>

        </div>
    );
};

export default Tasks;
