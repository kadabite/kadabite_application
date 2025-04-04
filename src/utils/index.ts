import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const inDevEnvironment =
  !!process && process.env.NODE_ENV === 'development'

export const ROOT_DOMAIN = 'auth.kadabite.com'
