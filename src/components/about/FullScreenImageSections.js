import React, { useEffect, useRef, useState } from "react";

const FullScreenImageSections = () => {
  const sectionRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState("");
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoSrc(
              `https://www.youtube.com/embed/Ur8BC49cEDc?autoplay=1&mute=${muted ? 1 : 0}`
            );
          } else {
            setVideoSrc("");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [muted]);

  const handleUserInteraction = () => {
    if (muted) {
      setMuted(false);
      setVideoSrc(`https://www.youtube.com/embed/Ur8BC49cEDc?autoplay=1&mute=0`);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 py-16 px-4 md:px-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900 z-10" />
      
      <div className="container mx-auto relative z-20">
        {videoSrc ? (
          <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 transition-shadow duration-300"
               onClick={handleUserInteraction}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={videoSrc}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            />
            {muted && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer group transition-opacity duration-300 hover:bg-black/40">
                <button className="bg-teal-500 text-white px-6 py-3 rounded-full font-medium transform transition-transform duration-300 group-hover:scale-110">
                  Click to Unmute
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto h-[600px] bg-gray-800 rounded-xl animate-pulse" />
        )}
      </div>
    </section>
  );
};

export default FullScreenImageSections;
