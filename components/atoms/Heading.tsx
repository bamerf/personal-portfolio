import type { FC, ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
};

export const Heading: FC<HeadingProps> = ({ children }) => (
  <h1 className="text-4xl font-bold text-black dark:text-white">{children}</h1>
);
