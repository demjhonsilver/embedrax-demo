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



    </>
  );
};
