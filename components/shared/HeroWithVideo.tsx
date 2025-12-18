'use client';

import { ReactNode, useEffect, useRef } from 'react';

interface HeroWithVideoProps {
  title: string;
  subtitle?: string;
  videoId: string;
  children?: ReactNode;
  height?: 'small' | 'medium' | 'large';
}

export default function HeroWithVideo({ 
  title, 
  subtitle, 
  videoId, 
  children, 
  height = 'medium' 
}: HeroWithVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const heights = {
    small: 'h-[300px]',
    medium: 'h-[400px] md:h-[500px]',
    large: 'h-[500px] md:h-[600px]',
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Function to send command to YouTube player
    const sendCommand = (func: string, args: any[] = []) => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func,
            args,
          }),
          'https://www.youtube.com'
        );
      }
    };

    // Function to seek to 3 seconds
    const seekToStart = () => {
      sendCommand('seekTo', [3, true]);
    };

    // Set up interval to loop the video segment every 10 seconds (3-13 seconds)
    const setupLoop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      // Every 10 seconds, seek back to 3 seconds
      intervalRef.current = setInterval(() => {
        seekToStart();
      }, 10000);
    };

    // Wait for iframe to load, then initialize
    const initTimer = setTimeout(() => {
      seekToStart();
      setupLoop();
    }, 2000);

    // Listen for messages from YouTube player
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'onStateChange') {
          // If video ends, loop back to 3 seconds
          if (data.info === 0) {
            seekToStart();
          }
        }
      } catch (e) {
        // Ignore parse errors
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      clearTimeout(initTimer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // YouTube embed URL with parameters
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}&start=3&end=13&enablejsapi=1&iv_load_policy=3&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`;

  return (
    <div className={`relative ${heights[height]} w-full rounded-3xl overflow-hidden mb-12`}>
      {/* Background Video */}
      <div className="absolute inset-0">
        <iframe
          ref={iframeRef}
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          style={{
            pointerEvents: 'none',
            transform: 'scale(1.1)',
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          title={title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/70" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

