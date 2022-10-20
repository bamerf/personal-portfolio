import Image from 'next/image';
import type { FC } from 'react';

type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
  imageNames: string[];
};

export const ProjectSection: FC<ProjectSectionProps> = ({
  title,
  children,
  imageNames,
}) => {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-5">
        {children}

        {imageNames.map((image, index) => (
          <Image
            key={index}
            className="rounded-md"
            src={`/images/${image}`}
            width={2850}
            height={1388}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
