import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import emailjs from '@emailjs/browser'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const sendMail = async (templateParams) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
    )
  } catch (error) {
    console.log('Error', error)
  }
}
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
