import { randomBytes } from 'crypto';

/**
 * Generates a secure random token for password recovery
 * @returns A hex string token
 */
export function generatePasswordResetToken(): string {
  return randomBytes(32).toString('hex');
}
