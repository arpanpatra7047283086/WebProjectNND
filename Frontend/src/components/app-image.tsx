import type { ImgHTMLAttributes } from 'react'

type AppImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean
}

export default function AppImage({ priority: _priority, ...props }: AppImageProps) {
  return <img {...props} />
}
