import Image from 'next/image';
import { useEffect, useState } from 'react';
import Video from 'react-player';

interface GalleryProps {
  images: string[];
  intervalMs?: number;
  scale?: number;
  width?: number | string;
  height?: number | string;
  fillScreen?: boolean;
  zIndex?: number;
  opacity?: number;
}
interface VideoGalleryProps {
  videos: string[];
  intervalMs?: number;
  scale?: number;
  width?: number | string;
  height?: number | string;
  fillScreen?: boolean;
  zIndex?: number;
  opacity?: number;
}

export default function Gallery({
  images,
  intervalMs = 4000,
  scale = 1.04,
  width = '100vw',
  height = '100vh',
  fillScreen = true,
  zIndex = -1,
  opacity = 1.0,
}: GalleryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), intervalMs);
    return () => clearInterval(t);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    inset: fillScreen ? 0 : undefined,
    width: fillScreen ? '100vw' : width,
    height: fillScreen ? '100vh' : height,
    overflow: 'hidden',
    borderRadius: fillScreen ? 0 : 8,
    zIndex,
    top: fillScreen ? 0 : undefined,
    left: fillScreen ? 0 : undefined,
  };

  return (
    <div style={containerStyle} aria-roledescription="image carousel">
      {images.map((src, i) => {
        const active = i === index;
        return (
          <div
            key={src + i}
            style={{
              position: 'absolute',
              inset: 0,
              transition: 'opacity 900ms ease, transform 900ms ease',
              opacity: active ? opacity : 0,
              transform: active ? `scale(${scale})` : 'scale(1)',
            }}
          >
            <Image src={src} alt={`gallery-${i}`} fill style={{ objectFit: 'cover' }} sizes="100vw" />
          </div>
        );
      })}
    </div>
  );
}

export function VideoGallery({
  videos,
  intervalMs = 4000,
  scale = 1.04,
  width = '100vw',
  height = '100vh',
  fillScreen = true,
  zIndex = -1,
  opacity = 1.0,
}: VideoGalleryProps) {
  const [index, setIndex] = useState(0);
  // allowPlay becomes true after the user moves the mouse (global or over container)
  const [allowPlay, setAllowPlay] = useState(false);

  useEffect(() => {
    if (!videos || videos.length <= 1) return;
    const t = setInterval(() => setIndex(i => (i + 1) % videos.length), intervalMs);
    return () => clearInterval(t);
  }, [videos, intervalMs]);

  // Listen for first mousemove anywhere on the page (once)
  useEffect(() => {
    const onFirstMove = () => setAllowPlay(true);
    window.addEventListener('mousemove', onFirstMove, { once: true });
    return () => window.removeEventListener('mousemove', onFirstMove);
  }, []);

  if (!videos || videos.length === 0) return null;

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    inset: fillScreen ? 0 : undefined,
    width: fillScreen ? '100vw' : width,
    height: fillScreen ? '100vh' : height,
    overflow: 'hidden',
    borderRadius: fillScreen ? 0 : 8,
    zIndex,
    top: fillScreen ? 0 : undefined,
    left: fillScreen ? 0 : undefined,
  };

  return (
    <div
      style={containerStyle}
      aria-roledescription="video carousel"
      // also allow play if user moves mouse over the container
      onMouseMove={() => setAllowPlay(true)}
    >
      {videos.map((src, i) => {
        const active = i === index;
        return (
          <div
            key={src + i}
            style={{
              position: 'absolute',
              inset: 0,
              transition: 'opacity 900ms ease, transform 900ms ease',
              opacity: active ? opacity : 0,
              transform: active ? `scale(${scale})` : 'scale(1)',
            }}
          >
            <Video
              src={src}
              playing={allowPlay && active}
              // keep muted to avoid autoplay block; unmute via UI if you want sound later
              muted={true}
              controls={false}
              width="100%"
              height="100%"
              style={{ objectFit: 'cover' }}
            />
          </div>
        );
      })}
    </div>
  );
}