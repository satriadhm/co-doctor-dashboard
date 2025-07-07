import SidebarItem from "../atoms/SidebarItem";

export default function Sidebar() {
  const menuItems = [
    { icon: "📊", label: "Dashboard", active: true },
    { icon: "📤", label: "Upload", active: false },
    { icon: "📋", label: "History", active: false },
    { icon: "⚙️", label: "Setting", active: false },
    { icon: "❓", label: "Help", active: false }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-[#6E62E5] rounded flex items-center justify-center">
            <span className="text-white text-sm">☰</span>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              active={item.active}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
