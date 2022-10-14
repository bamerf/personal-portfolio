import type { FC } from 'react';
import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={clsx('mx-auto max-w-screen-mobile', className)}>
    {children}
  </div>
);
