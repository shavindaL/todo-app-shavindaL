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
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        <Sidebar />
        <div className="w-full h-screen flex flex-col">
          <Header />
          <div className="flex flex-col overflow-auto h-full p-6 gap-y-8">
            <Welcome />
            <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row sm:gap-y-8">
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
      </div>
    </main>

  )
}

export default Dashboard;