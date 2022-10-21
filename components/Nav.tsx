import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';
import type { FC } from 'react';
import { useRouter } from 'next/router';
import { Icons } from './atoms/Icons';

type CustomLinkProps = {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
};

// TODO spread HTMLAnchorElement props correctly to the anchor element
export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ label, href, className, onClick, target }: CustomLinkProps, ref) => (
    <a
      target={target}
      onClick={onClick}
      ref={ref}
      href={href}
      className={clsx(
        'cursor-pointer rounded-md py-2 px-3 text-neutral-400 hover:bg-neutral-800',
        className
      )}
    >
      {label}
    </a>
  )
);

CustomLink.displayName = 'CustomLink';

export type NavLink = {
  label: string;
  href: string;
};

type NavProps = {
  navLinks: NavLink[];
};

export const Nav: FC<NavProps> = ({ navLinks }) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between pt-10 pb-32">
      <nav className="flex gap-2">
        {navLinks.map((link, index) => {
          if (link.label === 'Resume') {
            return (
              <CustomLink
                key={index}
                label={link.label}
                href={link.href}
                target="_blank"
              />
            );
          }

          return (
            <Link key={index} href={link.href} passHref>
              <CustomLink
                label={link.label}
                className={
                  router.pathname === link.href
                    ? 'text-neutral-100 underline'
                    : ''
                }
              />
            </Link>
          );
        })}
      </nav>
      <div className="rounded-lg bg-gray-300 p-2">
        <Icons name="sun" size={18} />
      </div>
    </div>
  );
};
