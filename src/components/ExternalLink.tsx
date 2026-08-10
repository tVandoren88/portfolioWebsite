import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type ExternalLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export function ExternalLink({ children, rel, target, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target={target ?? '_blank'} rel={rel ?? 'noreferrer'}>
      {children}
    </a>
  );
}
