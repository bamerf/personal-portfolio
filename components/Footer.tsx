import Link from 'next/link';
import type { FC } from 'react';
import type { NavLink } from 'components/Nav';
import { CustomLink } from 'components/Nav';

type FooterProps = {
  navLinks: NavLink[];
};

export const Footer: FC<FooterProps> = ({ navLinks }) => (
  <footer className="flex items-center justify-between border-t-[1px] border-neutral-800 pt-8 pb-32">
    <nav className="flex gap-2">
      {navLinks.map((link, index) => {
        if (link.label === 'Resume') {
          return (
            <CustomLink
              key={index}
              label={link.label}
              href={link.href}
              target="_blank"
              className="!text-neutral-600 hover:bg-transparent hover:!text-neutral-500"
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
    <p className="text-neutral-600">© 2022 Bamdad Erfanian</p>
  </footer>
);
