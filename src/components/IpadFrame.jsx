import React, { useState } from 'react';
import AppGrid from './AppGrid';
import IframeView from './IframeView';

const IpadFrame = () => {
  const [activeApp, setActiveApp] = useState(null);

  return (
    <div className="w-full max-w-[900px] aspect-[4/3] mx-auto 
     bg-[url('http://localhost:3000/wallpaper.png')]
    bg-cover rounded-3xl shadow-2xl overflow-hidden border-8 border-black">
      {activeApp ? (
        <IframeView app={activeApp} onExit={() => setActiveApp(null)} />
      ) : (
        <AppGrid onLaunch={(app) => setActiveApp(app)} />
      )}
    </div>
  );
};

export default IpadFrame;
