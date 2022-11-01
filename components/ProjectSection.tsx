import Image from 'next/image';
import type { ImageProps } from 'next/image';
import type { FC, ReactNode } from 'react';

type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
  images?: ImageProps[];
  link?: ReactNode[];
};

export const ProjectSection: FC<ProjectSectionProps> = ({
  title,
  children,
  images,
  link,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
        {title}
      </h2>
      <div className="flex flex-col gap-5 text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
      {images && images.length > 0 && (
        <div className="flex flex-col gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-neutral-200 leading-[0px] dark:border-transparent"
            >
              <Image
                className="rounded-md"
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      )}
      {link && <div className="flex gap-1">{link}</div>}
    </div>
  );
};
