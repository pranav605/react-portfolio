import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('https://matdndbserver.blob.core.windows.net/test/cctv_feed/stream/7488fbc9-0175-44ec-b98a-99d70f5ca724/filename.m3u8');
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current.play();
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = 'https://matdndbserver.blob.core.windows.net/test/cctv_feed/stream/7488fbc9-0175-44ec-b98a-99d70f5ca724/filename.m3u8';
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current.play();
      });
    }
  }, []);

  return <video ref={videoRef} loop />;
};

export default VideoPlayer;
