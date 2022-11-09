import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { InView } from 'react-intersection-observer';

type ObserverProps = {
  onChange: (inview: any) => void;
  children: ReactNode;
};

export const Observer: FC<ObserverProps> = ({ onChange, children }) => (
  <InView
    onChange={onChange}
    as="div"
    trackVisibility
    delay={200}
    threshold={0.5}
  >
    {children}
  </InView>
);
