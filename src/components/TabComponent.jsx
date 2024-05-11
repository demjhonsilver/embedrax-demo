import React, { useState } from 'react';

const TerminalCodeBlock = ({ path, output }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = output;
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopied(true);
  };

  const terminalStyle = {
    fontFamily: 'monospace',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    border: '1px solid gray',
    minHeight: '100px',
    height: 'auto',
    overflowY: 'scroll',
  };
  
  const commandStyle = {
    color: 'lime',
    marginBottom: '5px',
  };
  
  const outputStyle = {
    color: 'white',
  };

  return (
    <div>
      <div style={terminalStyle}>
        <button className="btn btn-dark btn-sm float-end" onClick={handleCopy}>
          {copied ? 'Code copied!' : 'Copy code'}
        </button>
        <div style={commandStyle}>$ {path}</div>
        <pre style={outputStyle}><code>{output}</code></pre>
      </div>
    </div>
  );
};

export const TabComponent = () => {

  return (
    <div className="accordion accordion-flush" id="accordionFlushExample" style={{maxWidth:'920px'}}>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            React 
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
          
            <TerminalCodeBlock
              path="ExampleComponent.jsx"
              output={`
                import { useEffect } from 'react';
                import { embed } from 'embedrax';

                export const ExampleComponent = () => {
                  useEffect(() => {
                    embed([
                      {
                        width: 854,
                        height: 480,
                        autoplay: true,
                        fullscreen: false,
                        controls: true,
                        videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
                        videoClass: 'embed-youtube-one-clip'
                      }
                    ])
                  }, []);
                  return (
                    <>
                      <div className="embed-youtube-one-clip"></div>
                    </>
                  );
                };
              `}
            />
            <p>Or </p>
            <p> 
              <code>

                </code></p>
          
            <TerminalCodeBlock path="ExampleComponent.jsx" 
             output={`
             import { useEffect } from 'react';
             import { embed } from 'embedrax';
             
             const ExampleComponent = () => {
               useEffect(() => {
                 embed([
                   {
                     width: 854,
                     height: 480,
                     autoplay: true,
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
             
             export default ExampleComponent
             `}
             />
           
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Vue
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            
          <TerminalCodeBlock
              path="ExampleComponent.vue"
              output={`
            <template>
              <div>
                <div class="embed-youtube-one-clip"></div>
              </div>
            </template>
            
            <script>
            import { onMounted } from 'vue';
            import { embed } from 'embedrax';
            
            export default {
              name: 'ExampleComponent',
              setup() {
            
                onMounted(() => {
                  embed([
                    {
                      width: 854,
                      height: 480,
                      autoplay: true,
                      fullscreen: false,
                      controls: true,
                      videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
                      videoClass: 'embed-youtube-one-clip'
                    }
                  ])
                });
            
                return {};
              },
            };
            </script>
              `}
            />


          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Angular
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            

          <TerminalCodeBlock
              path="ExampleComponent.ts"
              output={`
 
    
            import { Component, AfterViewInit } from '@angular/core';
            import { embed } from 'embedrax';
            
            @Component({
              selector: 'app-example',
              template: \`
                <div class="embed-youtube-one-clip"></div>
              \`,
              styleUrls: ['./example.component.css'],
            })
            export class ExampleComponent implements AfterViewInit {
            
              ngAfterViewInit() {
                embed([
                  {
                    width: 854,
                    height: 480,
                    autoplay: true,
                    fullscreen: false,
                    controls: true,
                    videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
                    videoClass: 'embed-youtube-one-clip'
                  }
                ]);
              }
            }
            `}

            />


          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
            Svelte
          </button>
        </h2>
        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            
          <TerminalCodeBlock
              path="ExampleComponent.svelte"
              output={`
 
              <script>
              import { onMount } from 'svelte';
              import { embed } from 'embedrax';
            
              onMount(() => {
                embed([
                  {
                    width: 854,
                    height: 480,
                    autoplay: true,
                    fullscreen: false,
                    controls: true,
                    videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
                    videoClass: 'embed-youtube-one-clip'
                  }
                ]);
              });
            </script>
            
            <div>
              <div class="embed-youtube-one-clip"></div>
            </div>
            `}

            />


          </div>
        </div>
      </div>
    </div>
  );
};
