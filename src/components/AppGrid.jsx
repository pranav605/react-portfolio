import React from 'react';
import AppIcon from './AppIcon';

const apps = [
    {
      title: "Sai Pranav Nishtala",
      icon: "/profile-pic-1.png",
      url: "https://saipranavnishtala.vercel.app",
      canEmbed: true,
    },
    {
        title: "Journal",
        icon: '/journal.png',
        url: 'https://journal-eight-theta.vercel.app/',
        canEmbed: true,
    }
    // add more as you build
  ];
  

const AppGrid = ({ onLaunch }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      {/* Grid of Apps */}
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-items-center">
        {apps.map((app, index) => (
          <AppIcon
            key={index}
            title={app.title}
            icon={app.icon}
            onClick={() => onLaunch(app)}
          />
        ))}
      </div>

      {/* Bottom Tray (optional, for favorite apps) */}
      <div className="mt-6 mx-auto w-full max-w-md bg-white/10 rounded-xl px-4 py-2 flex justify-around backdrop-blur-md shadow-inner">
        {apps.slice(0, 3).map((app, index) => (
          <AppIcon
            key={`tray-${index}`}
            title={app.title}
            icon={app.icon}
            onClick={() => onLaunch(app)}
          />
        ))}
      </div>
    </div>
  );
};

export default AppGrid;
