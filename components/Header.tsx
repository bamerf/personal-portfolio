import Image from 'next/image';
import ProfileImage from 'public/images/profile.jpg';
import { headerData } from 'data';
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
  socialLinks: SocialLink[];
  location?: string;
};

export const Header = () => (
  <div className="mb-24 sm:mb-32">
    <div className="mb-4">
      <Image
        className="rounded-full"
        alt={'profile picture'}
        width={125}
        height={125}
        src={ProfileImage}
      />
    </div>
    <h1 className="mb-1 text-4xl font-bold text-black dark:text-white">
      {headerData.name}
    </h1>
    <h3 className="mb-6 text-neutral-800 dark:text-neutral-200">
      {headerData.title.text}{' '}
      <span className="font-semibold">{headerData.title.company}</span>
    </h3>
    <p className="mb-6 max-w-xl text-neutral-700 dark:text-neutral-400">
      {headerData.description}
    </p>
    <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-center gap-1">
        <div className="animate-pulse">
          <Icons name="location" size={16} className="stroke-neutral-500" />
        </div>
        <p className="text-sm text-neutral-500">
          Currently in {headerData.location}
        </p>
      </div>
      <div className="flex gap-3">
        {headerData.socialLinks.map((socialLink, index) => (
          <ExternalLink
            className="transition-all duration-100 ease-linear hover:-translate-y-1"
            key={index}
            href={socialLink.url}
          >
            <Icons
              name={socialLink.iconName}
              size={24}
              className="fill-neutral-500 dark:fill-neutral-600"
            />
          </ExternalLink>
        ))}
      </div>
    </div>
  </div>
);
