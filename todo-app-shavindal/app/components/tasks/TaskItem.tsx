import Image from "next/image"

const TaskItem: React.FC = () => {
    return (
        <div className="py-2 px-4">
            <div className="flex justify-between items-center ">
                <div className="flex items-center">
                    <Image src={"/assets/Priority-LOW.svg"} alt={""} width={20} height={20} />
                    <p className="font-medium text-large w-max mx-2">Tasks</p>
                </div>
                <div className="flex items-center ">
                    <div className="bg-light-green py-1 px-2 rounded-2xl text-green mx-2"><p>Done</p></div>
                    <p>Sep 16</p>
                </div>
            </div>
            <button className="pl-8 text-magenta">Mark as done</button>
        </div>
    )
};

export default TaskItem;