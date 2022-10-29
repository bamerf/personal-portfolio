import type { ImageProps } from 'next/image';
import type { FC } from 'react';
import Image from 'next/image';
import { neutral } from 'tailwindcss/colors';
import { Icons } from './atoms/Icons';
import type { IconNames } from './atoms/Icons';
import { ExternalLink } from './atoms/ExternalLink';

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
  <div className="mb-24 sm:mb-32">
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
    <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-1">
        <div className="animate-pulse">
          <Icons name="location" size={16} fill={neutral[500]} />
        </div>
        <p className=" text-sm text-neutral-500">Currently in {location}</p>
      </div>
      <div className="flex gap-3">
        {socialLinks.map((socialLink, index) => (
          <ExternalLink
            className="transition-all duration-100 ease-linear hover:-translate-y-1"
            key={index}
            href={socialLink.url}
          >
            <Icons name={socialLink.iconName} size={24} fill={neutral[600]} />
          </ExternalLink>
        ))}
      </div>
    </div>
  </div>
);
