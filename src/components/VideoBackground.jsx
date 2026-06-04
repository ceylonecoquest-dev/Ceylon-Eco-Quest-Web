import React, { useRef, useEffect } from 'react';

const VideoBackground = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const opacityRef = useRef(0);
  const animationFrameRef = useRef(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fade = (targetOpacity, duration, callback) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      const startOpacity = opacityRef.current;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        opacityRef.current = startOpacity + (targetOpacity - startOpacity) * progress;
        
        if (video) {
          video.style.opacity = opacityRef.current;
        }

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else if (callback) {
          callback();
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      fade(1, 250); // Fade in on load
    };

    const handleTimeUpdate = () => {
      if (!video) return;
      const timeLeft = video.duration - video.currentTime;
      if (timeLeft <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fade(0, 250); // Fade out
      }
    };

    const handleEnded = () => {
      if (!video) return;
      video.style.opacity = 0;
      opacityRef.current = 0;
      
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => {
          fadingOutRef.current = false;
          fade(1, 250); // Fade back in
        }).catch(err => console.error("Error playing video:", err));
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Initial play if already loaded
    if (video.readyState >= 3) {
      handleLoadedData();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={videoUrl || "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4"}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[115%] h-[115%] max-w-none object-cover object-top"
        style={{ opacity: 0 }}
      />
    </div>
  );
};

export default VideoBackground;
