import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// WhatsApp utility functions
export const WHATSAPP_PHONE = "+393476735353"

export function openWhatsApp(message?: string) {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  const defaultMessage = "Ciao! Vorrei inviare foto e misure dei miei cerchi per un preventivo."
  const finalMessage = message || defaultMessage
  
  const encodedMessage = encodeURIComponent(finalMessage)
  
  if (isMobile) {
    // For mobile devices, open WhatsApp app
    window.open(`whatsapp://send?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`, '_blank')
  } else {
    // For desktop, open WhatsApp Web
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank')
  }
}

export function getWhatsAppUrl(message?: string) {
  const defaultMessage = "Ciao! Vorrei inviare foto e misure dei miei cerchi per un preventivo."
  const finalMessage = message || defaultMessage
  const encodedMessage = encodeURIComponent(finalMessage)
  
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`
}

// FontAwesome WhatsApp icon - use string format
export const whatsappIcon = "fab fa-whatsapp"
