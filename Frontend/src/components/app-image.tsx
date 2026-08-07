import { useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

type AppImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean
}

export default function AppImage({ priority, src, loading, fetchPriority, onError, ...props }: AppImageProps) {
  const [resolvedSrc, setResolvedSrc] = useState(src)

  useEffect(() => {
    setResolvedSrc(src)
  }, [src])

  return (
    <img
      {...props}
      src={resolvedSrc}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      fetchPriority={priority ? 'high' : fetchPriority}
      decoding="async"
      onError={(event) => {
        onError?.(event)
      }}
    />
  )
}
