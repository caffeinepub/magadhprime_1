/**
 * Generates and persists a stable per-device identifier in localStorage
 * Used for rate-limiting actions across sessions
 */

const DEVICE_ID_KEY = 'magadh_device_id';

/**
 * Get or create a persistent device identifier
 * @returns A stable UUID string for this device
 */
export function getOrCreateDeviceId(): string {
  // Check if we already have a device ID
  const existingId = localStorage.getItem(DEVICE_ID_KEY);
  if (existingId) {
    return existingId;
  }

  // Generate a new device ID
  let newId: string;
  
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    // Modern browsers with crypto.randomUUID support
    newId = crypto.randomUUID();
  } else {
    // Fallback for older browsers
    newId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // Store the new ID
  localStorage.setItem(DEVICE_ID_KEY, newId);
  return newId;
}
