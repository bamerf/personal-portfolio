import Image from 'next/image';
import type { FC, ReactNode } from 'react';

type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
  imageNames?: string[];
  links?: ReactNode;
};

export const ProjectSection: FC<ProjectSectionProps> = ({
  title,
  children,
  imageNames,
  links,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-5 text-neutral-200">{children}</div>
      {imageNames && imageNames.length > 0 && (
        <div className="flex flex-col gap-8">
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
      )}
      {links && links}
    </div>
  );
};
