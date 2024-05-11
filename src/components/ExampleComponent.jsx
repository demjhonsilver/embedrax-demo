import React, { useState, useEffect } from 'react';
import { embed } from 'embedrax';

export const ExampleComponent = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [width, setWidth] = useState(854); // Default width
  const [height, setHeight] = useState(480); // Default height
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    if (videoUrl && isValidUrl(videoUrl)) {
      embed([
        {
          width: width,
          height: height,
          autoplay: false,
          fullscreen: true,
          controls: true,
          videoUrl: videoUrl,
          videoClass: 'embed-youtube-one-clip',
        }
      ]);
      setError(null); // Clear any previous errors
    } else {
      setError(""); // Set error message
    }
  }, [videoUrl, width, height]);

  const isValidUrl = (url) => {
    // Basic URL validation, you might want to enhance this depending on your requirements
    return url.startsWith('http://') || url.startsWith('https://');
  };

  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <label className="visually-hidden">Video URL</label>
          <div className="input-group">
            <div className="input-group-text">Video URL:</div>
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="form-control"
              placeholder="put url here: like youtube, facebook, twitter, tiktok, instagram, dailymotion and vimeo."
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label className="visually-hidden">Width</label>
          <div className="input-group">
            <div className="input-group-text">Width:</div>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
              className="form-control"
              placeholder="854"
            />
          </div>
        </div>
        <div className="col">
          <label className="visually-hidden">Height</label>
          <div className="input-group">
            <div className="input-group-text">Height:</div>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="form-control"
              placeholder="480"
            />
          </div>
        </div>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div className="embed-youtube-one-clip" style={{ width: `${width}px` }}></div>
    </>
  );
};
