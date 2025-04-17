import React from 'react';

const AppIcon = ({ title, icon, onClick }) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <img
        src={icon}
        alt={title}
        className="w-16 h-16 rounded-xl shadow-md mb-1 object-cover"
      />
      <span className="text-sm text-center">{title}</span>
    </div>
  );
};

export default AppIcon;
