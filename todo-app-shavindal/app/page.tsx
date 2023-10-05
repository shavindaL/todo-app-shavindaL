import ActivityFeed from "./components/activity-feed";
import Header from "./components/header";
import CustomPieChart from "./components/piechart";
import Sidebar from "./components/sidebar";
import Tasks from "./components/tasks";
import Welcome from "./components/welcome";
import TaskListContextProvider from "./context/TaskListContext";

const Dashboard: React.FC = () => {
  return (
    <main className="font-inter">
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Header />
          <Welcome />
          <div className="flex w-full p-6">
            <TaskListContextProvider>
              <Tasks />
              <div>
                <ActivityFeed />
                <CustomPieChart />
              </div>
            </TaskListContextProvider>        
          </div>
        </div>
      </div>
    </main>

  )
}

export default Dashboard;