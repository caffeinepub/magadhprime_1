/**
 * Helper function to build correct static asset URLs.
 * Ensures assets under /public are properly resolved.
 */
export function getAssetUrl(path: string): string {
  // Remove leading slash if present to normalize
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, assets are served from root
  // In development, Vite serves them from root as well
  return `/${normalizedPath}`;
}

/**
 * Get a generated asset URL from the /assets/generated directory
 */
export function getGeneratedAssetUrl(filename: string): string {
  return getAssetUrl(`assets/generated/${filename}`);
}
