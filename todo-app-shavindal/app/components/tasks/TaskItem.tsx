import { ITask } from "@/app/interfaces/ITasks";
import Image from "next/image"

const TaskItem: React.FC<ITask> = ({ id, createdBy, priority, todo, completed, createdAt }) => {

    let priorityImage = "";
    switch (priority) {
        case "LOW":
            priorityImage = "/assets/Priority-LOW.svg";
            break;
        case "MEDIUM":
            priorityImage = "/assets/Priority-MEDIUM.svg";
            break;
        case "HIGH":
            priorityImage = "/assets/Priority-HIGH.svg";
            break;
        default:
            priorityImage = "/assets/Priority-LOW.svg";
            break;
    };
    return (
        <div key={id} className="py-1 px-4">
            <div className="flex justify-between items-center ">
                <div className="flex items-center">
                    <Image src={priorityImage} alt={""} width={20} height={20} />
                    <p className="font-medium text-large mx-2">{todo}</p>
                </div>
                <div className="flex items-center ">
                    {completed ?
                        <div className="bg-light-green py-1 px-2 rounded-2xl text-green mx-2 w-max"><p className="w-max">Done</p></div>
                        : <div className="bg-light-yellow py-1 px-2 rounded-2xl text-yellow mx-2 "><p className="w-max">In-Progress</p></div>}
                    <p className="w-max text-grey">{createdAt}</p>
                </div>
            </div>
            {!completed ? <button className="pl-8 text-magenta">Mark as done</button> : null}
            <hr />
        </div>
    )
};

export default TaskItem;