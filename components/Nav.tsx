import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';
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

export const Nav = () => {
  return (
    <div className="flex items-center justify-between pt-10 pb-32">
      <nav className="flex gap-2">
        <Link href="/" passHref>
          <CustomLink label="Home" />
        </Link>
        <Link href="/about" passHref>
          <CustomLink label="About" />
        </Link>
        <CustomLink label="Resume" href="/resume.pdf" target="_blank" />
      </nav>
      <div className="rounded-lg bg-gray-300 p-2">
        <Icons name="sun" size={18} />
      </div>
    </div>
  );
};
