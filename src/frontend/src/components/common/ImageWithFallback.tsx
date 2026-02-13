import { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallbackClassName?: string;
}

/**
 * Image component that displays a clean gradient placeholder when the image fails to load.
 * Preserves layout and prevents broken image icons. Loading state is constrained within the image bounds.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackClassName = '',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading/error state when src changes
  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-muted via-muted/80 to-muted/60 flex items-center justify-center ${fallbackClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-muted-foreground/40 text-center p-4">
          <svg
            className="w-12 h-12 mx-auto mb-2 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gradient-to-br from-muted via-muted/80 to-muted/60 animate-pulse ${fallbackClassName}`}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}
