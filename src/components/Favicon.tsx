// src/components/Favicon.tsx
import { useEffect } from 'react'

export function Favicon({ href = '/images/favicon.jpeg' }: { href?: string }) {
  useEffect(() => {
    const link: HTMLLinkElement = document.createElement('link')
    link.rel = 'icon'
    link.type = 'images/favicon.jpeg'
    link.href = href
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [href])

  return null
}
