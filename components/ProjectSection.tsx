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
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-5 text-neutral-200">{children}</div>
      {images && images.length > 0 && (
        <div className="flex flex-col gap-8">
          {images.map((image, index) => (
            <Image
              key={index}
              className="rounded-md"
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          ))}
        </div>
      )}
      {link && <div className="flex gap-1">{link}</div>}
    </div>
  );
};
