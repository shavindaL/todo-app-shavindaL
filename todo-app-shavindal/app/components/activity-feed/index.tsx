import ActivityFeedItem from "./ActivityFeedItem";

const ActivityFeed: React.FC = () => {
    const activityData = [
        {
            username: 'Kushantha Charuka',
            task: 'Contract #00124 need John Beige’s signature',
            date: 'Sep 16, 2022 at 11:30 AM',
            avatarImage: '/assets/Avatar-1.svg'
        },
        {
            username: "Alice Johnson",
            task: "Contract #00125 need Sarah White's signature",
            date: "Oct 10, 2023 at 2:45 PM",
            avatarImage: '/assets/Avatar-2.svg',
        }
        ,
        {
            username: "Alice Johnson",
            task: "Contract #00125 need Sarah White's signature",
            date: "Oct 10, 2023 at 2:45 PM",
            avatarImage: '/assets/Avatar-2.svg'
        }

    ];
    return (
        <div className="border-solid border-2 border-stroke rounded-lg w-full h-max py-2">
            <div className="flex items-center py-2 px-4">
                <h1 className="font-medium text-large w-max ">Activity Feed</h1>
            </div>
            <hr />
            {activityData?.map((activity) => ActivityFeedItem(activity))}
        </div>
    )
};
export default ActivityFeed;