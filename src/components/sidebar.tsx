import React, { ReactElement } from 'react';
interface ISidebarItemProps {
    icon: ReactElement;
    title: string;
    isSelected: boolean;
    onClick: () => void;
}
const SidebarItem: React.FC<ISidebarItemProps> = ({ icon, title, isSelected, onClick }) => (
    <div
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${isSelected ? 'bg-purple-700 shadow-lg' : 'hover:bg-purple-600'}`}
      onClick={onClick}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span className={`flex-grow text-sm font-medium ${isSelected ? 'text-white' : 'text-purple-200 hover:text-white'}`}>
        {title}
      </span>
    </div>
  );
  export default SidebarItem;
