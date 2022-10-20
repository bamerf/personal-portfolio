import Link from 'next/link';
import { CustomLink } from 'components/Nav';

export const Footer = () => (
  <footer className="flex items-center justify-between border-t-[1px] border-neutral-800 pt-8 pb-32">
    <nav className="flex gap-2">
      <Link href="/" passHref>
        <CustomLink
          label="Home"
          className="!text-neutral-600 hover:bg-transparent hover:!text-neutral-500"
        />
      </Link>
      <Link href="/about" passHref>
        <CustomLink
          label="About"
          className="!text-neutral-600 hover:bg-transparent hover:!text-neutral-500"
        />
      </Link>
      <CustomLink
        href="/resume.pdf"
        target="_blank"
        label="Resume"
        className="!text-neutral-600 hover:bg-transparent hover:!text-neutral-500"
      />
    </nav>
    <p className="text-neutral-600">© 2022 Bamdad Erfanian</p>
  </footer>
);
