import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';
import type { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Icons } from 'components/atoms/Icons';

type CustomLinkProps = {
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  icon?: ReactNode;
};

// TODO spread HTMLAnchorElement props correctly to the anchor element
export const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ label, href, className, onClick, target, icon }: CustomLinkProps, ref) => (
    <a
      target={target}
      onClick={onClick}
      ref={ref}
      href={href}
      className={clsx(
        'flex cursor-pointer items-center gap-2 rounded-md text-neutral-400 sm:py-2 sm:px-3 sm:hover:bg-neutral-800',
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
  const router = useRouter();

  return (
    <div className="flex flex-col items-baseline gap-8 pt-8 pb-28 sm:flex-row sm:items-center sm:justify-between sm:pt-10 sm:pb-32">
      <nav className="flex gap-8 sm:gap-2">
        {navLinks.map((link, index) => {
          if (link.label === 'Resume') {
            return (
              <div key={index}>
                <CustomLink
                  label={link.label}
                  href={link.href}
                  target="_blank"
                  icon={<Icons name="arrowTopRight" size={10} />}
                />
              </div>
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
