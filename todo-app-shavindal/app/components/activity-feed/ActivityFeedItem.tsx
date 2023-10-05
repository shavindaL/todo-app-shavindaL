import Image from "next/image";

interface ActivityFeedItemProps {
    username: string;
    task: string;
    date: string;
    avatarImage: string;
};

const ActivityFeedItem: React.FC<ActivityFeedItemProps> = ({ username, task, date, avatarImage }) => {
    return (
        <div className="flex text-normal px-4">
            <Image src={avatarImage} alt="avatar" width={32} height={32} />
            <div className="p-2">
                <hr />
                < p className="">
                    <span className="font-semi-bold">{username}</span>
                    <span>{' created '}</span>
                    <span className="text-magenta  font-semi-bold">${task}</span></p>
                <p className="text-small text-grey">{date}</p>
            </div>

        </div >
    );
};

export default ActivityFeedItem;