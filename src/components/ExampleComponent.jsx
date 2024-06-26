import React, { useState, useEffect } from 'react';
import { embed } from 'embedrax';
import  { TabComponent } from './TabComponent';
import  { Footer } from './Footer';

export const ExampleComponent = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [width, setWidth] = useState(720); // Default width
  const [height, setHeight] = useState(405); // Default height
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const handleResize = () => {
      const newWidth = Math.min(720, window.innerWidth - 20); // Adjust 20 for padding/margin
      setWidth(newWidth);
    };

    handleResize(); // Call once on initial render
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
    };
  }, []);

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
      setError("Please enter a valid video URL."); // Set error message
    }
  }, [videoUrl, width, height]);

  const isValidUrl = (url) => {
    // Basic URL validation, you might want to enhance this depending on your requirements
    return url.startsWith('http://') || url.startsWith('https://');
  };




  return (
    <>
      <div className="row mb-3">
        <div className="col mt-3">
          <label className="visually-hidden">Paste video URL / Link here:</label>
          <div className="input-group">
            <div className="input-group-text">Paste video URL / Link here:</div>
            <input
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="form-control"
              placeholder="YouTube, Shorts, Facebook, Reels, Twitter, TikTok, Instagram"
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
              placeholder="720"
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
      {error && <div style={{ color: 'red', textAlign:'center' }}>{error}</div>}
      <div className="embed-youtube-one-clip" style={{ maxWidth: `${width}px`}}></div>
      
      <br></br>
      <h6 style={{ color: 'orange', textAlign:'center' }}>Disclaimer: This is a demo only; the data will never be stored.</h6>
      <br></br>
      <br></br>
      <hr></hr>

      <div className="col-lg-8 mx-auto"><div className="text-center">
          <div className="text-left">  
            <img
              src="https://raw.githubusercontent.com/demjhonsilver/embedrax/main/img/logo.png"
      
              className="img-fluid"
            />
          </div>
          </div>
          </div>



      <br></br>
      <h1 style={{ textAlign:'center' }}>Embedrax</h1>
      <br></br>
      
   
      <br></br>

      <h5>url / link Paradigm:</h5>
      <hr></hr>
      <p><code> https://www.youtube.com/watch?v=xxxxxxxxxxx</code></p>
      <p><code> https://youtube.com/watch?v=xxxxxxxxxxx</code></p>
      <p><code> https:/m.youtube.com/watch?v=xxxxxxxxxxx</code></p>
      <p><code> https://www.youtube.com/shorts/xxxxxxxxxxx</code></p>
      <p><code> https://youtube.com/shorts/xxxxxxxxxxx</code></p>
      <p><code>https://youtube.com/shorts/xxxxxxxxxxx?si=xxxxxxxxxxxxxxxx</code></p>
      <p><code>https://www.facebook.com/username/videos/xxxxxxxxxxxxxxxxx</code></p>
      <p><code>https://www.instagram.com/p/xxxxxxxxxxx</code></p>
      <p><code>https://www.instagram.com/reel/xxxxxxxxxxx</code></p>
      <p><code>https://www.instagram.com/username/reel/xxxxxxxxxxx</code></p>
      <p><code>https://twitter.com/i/status/xxxxxxxxxxxxxxxxxxx</code></p>
      <p><code>https://twitter.com/username/status/xxxxxxxxxxxxxxxxxxx</code></p>
      <p><code>https://www.tiktok.com/@username/video/xxxxxxxxxxxxxxxxxxxx</code></p> 
      <p><code>https://www.dailymotion.com/video/xxxxxxx</code></p>
      <p><code>https://vimeo.com/XXXXXXXXX</code></p>
      
      <hr></hr>

      <br></br>

      <TabComponent />
      <Footer />
      <br></br>
   <br></br>
    </>
      
  );

 

};
