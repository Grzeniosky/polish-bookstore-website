"use client"

interface GMapProps {
  query: string
  zoom?: number
  width?: string
  height?: string
  marker?: boolean
}

/**
 * Lekki wrapper na &#60;iframe&#62; z Google Maps.
 * Nie wymaga klucza API – korzysta z publicznego embed z parametrem output=embed.
 */
export function GMap({ query, zoom = 16, width = "100%", height = "200px", marker = true }: GMapProps) {
  const encoded = encodeURIComponent(query)
  const src = marker
    ? `https://www.google.com/maps?q=${encoded}&z=${zoom}&output=embed`
    : `https://www.google.com/maps?ll=${encoded}&z=${zoom}&output=embed`

  return (
    <iframe
      title={query}
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
