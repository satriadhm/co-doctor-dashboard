import Sidebar from "../organisms/Sidebar";
import DashboardHeader from "../organisms/DashboardHeader";
import DashboardContent from "../organisms/DashboardContent";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <DashboardContent />
      </div>
    </div>
  );
}
