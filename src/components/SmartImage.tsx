import React, { useState } from 'react';
import { getCandidateUrls, getFallbackSvg, getImageMeta } from '../utils/imageUtils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  filename: string;
  alt: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  filename,
  alt,
  fallbackTitle,
  fallbackSubtitle,
  className = '',
  ...props
}) => {
  const meta = getImageMeta(filename);
  const candidates = getCandidateUrls(src, filename);
  
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [useSvgFallback, setUseSvgFallback] = useState(false);

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      // Try next candidate URL
      setCandidateIndex((prev) => prev + 1);
    } else {
      // All file URLs failed, fallback to rich SVG data URI
      setUseSvgFallback(true);
    }
  };

  const currentSrc = useSvgFallback
    ? getFallbackSvg(fallbackTitle || meta.title, fallbackSubtitle || meta.subtitle, meta.icon)
    : candidates[candidateIndex] || src;

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
    />
  );
};
