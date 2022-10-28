import Link from 'next/link';
import type { FC } from 'react';
import type { NavLink } from 'components/Nav';
import { CustomLink } from 'components/Nav';
import { Icons } from 'components/atoms/Icons';

type FooterProps = {
  navLinks: NavLink[];
};

export const Footer: FC<FooterProps> = ({ navLinks }) => (
  <footer className="flex flex-col items-center justify-between gap-4 border-t-[1px] border-neutral-800 pt-8 sm:flex-row sm:pb-32">
    <nav className="flex gap-6 pb-16 sm:gap-2 sm:pb-0">
      {navLinks.map((link, index) => {
        if (link.label === 'Resume') {
          return (
            <CustomLink
              key={index}
              label={link.label}
              href={link.href}
              target="_blank"
              className="!text-neutral-600 hover:bg-transparent hover:!text-neutral-500"
              icon={
                <Icons
                  name="arrowTopRight"
                  className="stroke-neutral-600"
                  size={10}
                />
              }
            />
          );
        }

        return (
          <Link key={index} href={link.href} passHref>
            <CustomLink
              label={link.label}
              className="!text-neutral-600 hover:bg-transparent hover:!text-neutral-500"
            />
          </Link>
        );
      })}
    </nav>
    <p className="mb-6 text-neutral-600 sm:mb-0">
      © {new Date().getFullYear()} Bamdad Erfanian
    </p>
  </footer>
);
