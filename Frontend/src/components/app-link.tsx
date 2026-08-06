import { Link as RouterLink } from 'react-router-dom'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children?: ReactNode
}

export default function AppLink({ href, children, ...props }: AppLinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')

  if (isExternal) {
    return <a href={href} {...props}>{children}</a>
  }

  return <RouterLink to={href} {...props}>{children}</RouterLink>
}
