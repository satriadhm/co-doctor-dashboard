import SearchBar from "../atoms/SearchBar";
import UserProfile from "../atoms/UserProfile";

export default function DashboardHeader() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-lg">
          <SearchBar placeholder="Search for Something" />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            🔔
          </button>
          <UserProfile 
            name="Dr. Olivia Harper"
            role="Internal Medicine"
          />
        </div>
      </div>
    </div>
  );
}
