import { useEffect } from 'react';
import { embed } from 'embedrax';

export const ExampleComponent = () => {
  useEffect(() => {
    embed([
      {
        width: 854,
        height: 480,
        fullscreen: false,
        controls: true,
        videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
        videoClass: 'embed-youtube-one-clip' 
      }
    ])
  });
  return (
    <>
      <div className="embed-youtube-one-clip"></div>
    </>
  );
};