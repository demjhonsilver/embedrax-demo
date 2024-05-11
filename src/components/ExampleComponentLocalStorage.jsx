import React, { useState, useEffect } from 'react';
import { embed } from 'embedrax';

export const ExampleComponent = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    if (videoUrl) {
      embed([
        {
          width: 854,
          height: 480,
          fullscreen: false,
          controls: true,
          videoUrl: videoUrl,
          videoClass: 'embed-youtube-one-clip' 
        }
      ]);
    }
  }, [videoUrl]);

  const handleSave = () => {
    localStorage.setItem('savedVideoUrl', videoUrl);
  };

  const handleClearStorage = () => {
    localStorage.removeItem('savedVideoUrl');
    setVideoUrl(''); // Clear the input field
  };

  useEffect(() => {
    // Load saved video URL from localStorage on component mount
    const savedVideoUrl = localStorage.getItem('savedVideoUrl');
    if (savedVideoUrl) {
      setVideoUrl(savedVideoUrl);
    }
  }, []);

  return (
    <>
      <input
        type="text"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        placeholder="Enter video URL"
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClearStorage}>Clear Storage</button>
      <div className="embed-youtube-one-clip"></div>
    </>
  );
};
