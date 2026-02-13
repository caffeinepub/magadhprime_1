/**
 * Frontend rate-limiting helper using backend actor
 * Provides fail-closed protection against abuse
 */

import { type backendInterface } from '../backend';
import { getOrCreateDeviceId } from './deviceId';

export type RateLimitAction = 'whatsapp' | 'support';

export interface RateLimitResult {
  allowed: boolean;
  error?: string;
}

/**
 * Check if an action is allowed and record it if so
 * @param actor Backend actor instance
 * @param action Action type to check
 * @returns Result indicating if action is allowed
 */
export async function checkRateLimit(
  actor: backendInterface | null,
  action: RateLimitAction
): Promise<RateLimitResult> {
  // Fail closed: if no actor, deny the action
  if (!actor) {
    return {
      allowed: false,
      error: 'Unable to connect to the service. Please try again later.',
    };
  }

  try {
    // Get the persistent device ID
    const deviceId = getOrCreateDeviceId();
    
    // Create a namespaced identifier for this action
    const actionIdentifier = `${action}:${deviceId}`;

    // Check with backend if action is allowed
    const allowed = await actor.canPerformAction(actionIdentifier);

    if (!allowed) {
      return {
        allowed: false,
        error: 'Please wait a moment before trying again.',
      };
    }

    return { allowed: true };
  } catch (error) {
    console.error('Rate limit check failed:', error);
    // Fail closed: on error, deny the action
    return {
      allowed: false,
      error: 'Unable to verify request. Please try again later.',
    };
  }
}
