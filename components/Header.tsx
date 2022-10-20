import type { ImageProps } from 'next/image';
import type { FC } from 'react';
import Image from 'next/image';
import { Icons } from './atoms/Icons';
import type { IconNames } from './atoms/Icons';

type SocialLink = {
  name: string;
  url: string;
  iconName: IconNames;
};

export type HeaderProps = {
  name: string;
  title: {
    text: string;
    company: string;
  };
  description: string;
  image: ImageProps;
  socialLinks: SocialLink[];
  location?: string;
};

export const Header: FC<HeaderProps> = ({
  name,
  title,
  description,
  image,
  socialLinks,
  location,
}) => (
  <div className="mb-32">
    {image && (
      <div className="mb-4">
        <Image className=" rounded-full" {...image} alt={image.alt} />
      </div>
    )}
    <h1 className="mb-1 text-4xl font-bold text-white">{name}</h1>
    <h3 className="mb-6 text-neutral-200">
      {title.text} <span className="font-semibold">{title.company}</span>
    </h3>
    <p className="mb-6 max-w-xl text-neutral-400">{description}</p>
    <div className="flex items-end justify-between">
      <div className="flex items-center gap-1">
        <div className="animate-pulse">
          <Icons name="location" size={16} fill="#737373" />
        </div>
        <p className=" text-sm text-neutral-500">Currently in {location}</p>
      </div>
      <div className="flex gap-3">
        {socialLinks.map((socialLink, index) => (
          <a
            className="transition-all duration-100 ease-linear hover:-translate-y-1"
            target="_blank"
            key={index}
            href={socialLink.url}
            rel="noreferrer"
          >
            <Icons name={socialLink.iconName} size={24} fill="#525252" />
          </a>
        ))}
      </div>
    </div>
  </div>
);
