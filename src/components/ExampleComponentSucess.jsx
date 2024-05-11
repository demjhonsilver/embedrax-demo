import React, { useState, useEffect, useRef } from 'react';
import { embed } from 'embedrax';

export const ExampleComponent = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [width, setWidth] = useState(854); // Default width
  const [height, setHeight] = useState(480); // Default height
  const [error, setError] = useState(null); // State to track errors
  const containerRef = useRef(null); // Ref to the container element

  useEffect(() => {
    if (videoUrl && isValidUrl(videoUrl) && containerRef.current) {
      embed([
        {
          width: width,
          height: height,
          fullscreen: false,
          controls: true,
          videoUrl: videoUrl,
          videoClass: 'embed-youtube-one-clip',
          container: containerRef.current // Pass the container element to embed
        }
      ]);
      setError(null); // Clear any previous errors
    } else {
      setError("Invalid video URL"); // Set error message
    }
  }, [videoUrl, width, height]);

  const isValidUrl = (url) => {
    // Basic URL validation, you might want to enhance this depending on your requirements
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const handleSave = () => {
    localStorage.setItem('savedVideoUrl', videoUrl);
    localStorage.setItem('savedWidth', width);
    localStorage.setItem('savedHeight', height);
  };

  const handleClearStorage = () => {
    localStorage.removeItem('savedVideoUrl');
    localStorage.removeItem('savedWidth');
    localStorage.removeItem('savedHeight');
    setVideoUrl(''); // Clear the input fields
    setWidth(854); // Reset width to default
    setHeight(480); // Reset height to default
  };

  useEffect(() => {
    // Load saved data from localStorage on component mount
    const savedVideoUrl = localStorage.getItem('savedVideoUrl');
    const savedWidth = localStorage.getItem('savedWidth');
    const savedHeight = localStorage.getItem('savedHeight');
    if (savedVideoUrl && savedWidth && savedHeight) {
      setVideoUrl(savedVideoUrl);
      setWidth(parseInt(savedWidth));
      setHeight(parseInt(savedHeight));
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
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
        placeholder="Width"
      />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
        placeholder="Height"
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div ref={containerRef} className="embed-youtube-one-clip"></div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClearStorage}>Clear Storage</button>
    </>
  );
};
