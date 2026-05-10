'use client';

import clsx from 'clsx';
import { forwardRef } from 'react';
import type { FC, ReactNode } from 'react';
import { useTheme } from 'next-themes';
import { neutral } from 'tailwindcss/colors';
import { Icons } from 'components/atoms/Icons';

type CustomLinkProps = {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  icon?: ReactNode;
};

export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    { label, href, className, onClick, target, rel, icon }: CustomLinkProps,
    ref
  ) => (
    <a
      target={target}
      rel={rel}
      onClick={onClick}
      ref={ref}
      href={href}
      className={clsx(
        'flex cursor-pointer items-center gap-2 rounded-md text-neutral-600 dark:text-neutral-400 sm:px-3 sm:py-2 sm:hover:bg-neutral-200 dark:sm:hover:bg-neutral-800',
        className
      )}
    >
      {label}
      {icon && icon}
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
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-baseline gap-8 pt-8 pb-28 sm:flex-row sm:items-center sm:justify-between sm:pt-10 sm:pb-32">
      <nav className="flex gap-8 sm:gap-2">
        {navLinks.map((link, index) => {
          if (link.label === 'Resume') {
            return (
              <CustomLink
                key={index}
                label={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                icon={
                  <Icons
                    name="arrowTopRight"
                    size={10}
                    className="stroke-neutral-600 dark:stroke-neutral-400"
                  />
                }
              />
            );
          }

          return (
            <CustomLink key={index} label={link.label} href={link.href} />
          );
        })}
      </nav>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'light' ? (
          <div className="rounded-lg bg-neutral-900 p-2">
            <Icons name="moon" size={18} fill={neutral[300]} />
          </div>
        ) : (
          <div className="rounded-lg bg-neutral-200 p-2">
            <Icons name="sun" size={18} />
          </div>
        )}
      </button>
    </div>
  );
};
