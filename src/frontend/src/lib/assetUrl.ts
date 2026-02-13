/**
 * Helper function to build correct static asset URLs.
 * Ensures assets under /public are properly resolved in both dev and production,
 * including when deployed under a non-root base path.
 */
export function getAssetUrl(path: string): string {
  // Remove leading slash if present to normalize
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use Vite's BASE_URL to handle deployment under subpaths
  const base = import.meta.env.BASE_URL || '/';
  
  // Ensure base ends with / and path doesn't start with /
  const baseWithSlash = base.endsWith('/') ? base : `${base}/`;
  
  return `${baseWithSlash}${normalizedPath}`;
}

/**
 * Get a generated asset URL from the /assets/generated directory
 */
export function getGeneratedAssetUrl(filename: string): string {
  return getAssetUrl(`assets/generated/${filename}`);
}
