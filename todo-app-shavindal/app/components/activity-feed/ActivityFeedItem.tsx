import { ITaskListItemProps } from "@/app/interfaces/ITasks";
import Image from "next/image";

// ActivityFeedItem component
const ActivityFeedItem: React.FC<ITaskListItemProps> = ({ id,createdBy, todo, hours, minutes, date, month, year }) => {
    const avatarImage = Number.parseInt(minutes) % 2 === 0 ? "/assets/Avatar-1.svg" : "/assets/Avatar-2.svg";
    return (
        <div className="flex text-normal px-4" key={id}>
            <Image src={avatarImage} alt="avatar" width={32} height={32} />
            <div className="p-2">
                < p className="">
                    <span className="font-semi-bold">{createdBy}</span>
                    <span>{' created '}</span>
                    <span className="text-magenta  font-semi-bold">${todo}</span></p>
                <p className="text-small text-grey">{`${month} ${date}, ${year} at ${hours}:${minutes}`}</p>
            </div>
            <hr />
        </div >
    );
};

export default ActivityFeedItem;