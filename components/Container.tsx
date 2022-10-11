import type { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }) => (
  <div className="mx-auto max-w-screen-laptop bg-slate-400">{children}</div>
);
