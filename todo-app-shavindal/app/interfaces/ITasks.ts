export interface ITaskListContextProps {
    tasks: ITask[];
    highPriorityCount: number;
    mediumPriorityCount: number;
    lowPriorityCount: number;
    isLoading: boolean;
};

export interface ITaskListChildProps {
    children: React.JSX.Element | React.JSX.Element[];
};

export interface ITask {
    id: string;
    createdBy: string;
    priority: string;
    todo: string;
    completed: boolean;
    createdAt: string;
};

export interface ITaskListItemProps {
    id: string;
    createdBy: string;
    priority: string;
    todo: string;
    completed: boolean;
    createdAt: string;
};