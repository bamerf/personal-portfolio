import type { FC } from 'react';

type SummaryProps = {
  title: string;
  children: React.ReactNode;
};

export const Summary: FC<SummaryProps> = ({ title, children }) => (
  <div>
    <h1 className="text-fluid">{title}</h1>
    {children}
  </div>
);
