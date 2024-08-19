import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const GEMINI_KEY = "AIzaSyDvHS4B8wGsn5mqGLsi2tBRBI_iwBW7Q-M"