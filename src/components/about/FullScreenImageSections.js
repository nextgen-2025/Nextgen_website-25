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
              `https://www.youtube.com/embed/Ur8BC49cEDc?autoplay=1&mute=${
                muted ? 1 : 0
              }`
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
      setVideoSrc(
        `https://www.youtube.com/embed/Ur8BC49cEDc?autoplay=1&mute=0`
      );
    }
  };

  return (
    <div
      ref={sectionRef}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleUserInteraction}
    >
      {videoSrc && (
        <iframe
          width="100%"
          height="615"
          src={videoSrc}
          allow="autoplay"
          allowFullScreen
          title="YouTube Video"
        />
      )}
    </div>
  );
};

export default FullScreenImageSections;
