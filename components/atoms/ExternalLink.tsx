import type { FC } from 'react';

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const ExternalLink: FC<ExternalLinkProps> = ({
  href,
  children,
  className,
}) => (
  <a
    className={className}
    target="_blank"
    href={href}
    rel="noreferrer noopener"
  >
    {children}
  </a>
);
