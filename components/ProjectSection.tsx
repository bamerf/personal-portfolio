import Image from 'next/image';
import type { ImageProps, StaticImageData } from 'next/image';
import type { FC, ReactNode } from 'react';
import corelliumMagicOne from 'public/images/corellium-magic-1.png';
import corelliumMagicTwo from 'public/images/corellium-magic-2.png';
import corelliumWebsiteOne from 'public/images/corellium-website-2.png';
import corelliumWebsiteTwo from 'public/images/corellium-website-2.png';
import payUiOne from 'public/images/pay-ui-1.png';
import payUiTwo from 'public/images/pay-ui-2.png';
import leadchatOne from 'public/images/leadchat-ui-2.png';
import leadchatTwo from 'public/images/leadchat-ui-3.png';

type ProjectSectionProps = {
  title: string;
  children: React.ReactNode;
  images?: ImageProps[];
  link?: ReactNode[];
};

const imagesMap: { [key: string]: StaticImageData } = {
  corelliumMagicOne: corelliumMagicOne,
  corelliumMagicTwo: corelliumMagicTwo,
  corelliumWebsiteOne: corelliumWebsiteOne,
  corelliumWebsiteTwo: corelliumWebsiteTwo,
  payUiOne: payUiOne,
  payUiTwo: payUiTwo,
  leadchatOne: leadchatOne,
  leadchatTwo: leadchatTwo,
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
                src={imagesMap[image.src as string]}
                width={image.width}
                height={image.height}
                alt={image.alt}
                placeholder="blur"
              />
            </div>
          ))}
        </div>
      )}
      {link && <div className="flex gap-1">{link}</div>}
    </div>
  );
};
