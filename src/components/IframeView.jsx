import React, { useEffect, useState } from 'react';

const IframeView = ({ app, onExit }) => {
  const [iframeKey, setIframeKey] = useState(Date.now());

  useEffect(() => {
    if (!app.canEmbed) {
      window.open(app.url, '_blank');
      onExit();
    }
  }, [app, onExit]);

  if (!app.canEmbed) return null;

  const reloadIframe = () => setIframeKey(Date.now());

  return (
    <div className="relative w-full h-full">
      {/* Top nav bar */}
      <div className="top-0 left-0 right-0 z-10 p-2 flex justify-between items-center bg-black/60 text-white text-sm">
        <div className="flex gap-2 ml-2">
          <button
            onClick={onExit}
            className="bg-white/10 px-3 py-1 rounded hover:bg-white/20"
          >
            ⬅ Home
          </button>
          <button
            onClick={() => window.open(app.url, '_blank')}
            className="bg-white/10 px-3 py-1 rounded hover:bg-white/20"
          >
            🔗 New Tab
          </button>
          <button
            onClick={reloadIframe}
            className="bg-white/10 px-3 py-1 rounded hover:bg-white/20"
          >
            🔄 Reload
          </button>
        </div>
        <span className="mr-4 font-medium truncate max-w-[40%]">{app.title}</span>
      </div>

      {/* Iframe */}
      <iframe
        key={iframeKey}
        src={app.url}
        title={app.title}
        className="w-full h-full border-none"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-downloads allow-presentation"
      />
    </div>
  );
};

export default IframeView;
