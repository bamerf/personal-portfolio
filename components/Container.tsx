import type { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className="mx-auto max-w-screen-tablet pt-44 pb-32">{children}</div>
);
