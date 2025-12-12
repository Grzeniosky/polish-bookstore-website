"use client"

import Image from "next/image"

export function ImageModal({
  open,
  onClose,
  src,
  alt,
}: {
  open: boolean
  onClose: () => void
  src: string
  alt: string
}) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 md:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-lg p-2 md:p-4 max-w-[95vw] md:max-w-2xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} width={1200} height={900} className="w-full h-auto" />
      </div>
    </div>
  )
}