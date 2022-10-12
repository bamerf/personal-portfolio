import type { ImageProps } from 'next/image';
import type { FC } from 'react';
import Image from 'next/image';

type SocialLink = {
  name: string;
  url: string;
  imageName: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  image: ImageProps;
  socialLinks: SocialLink[];
  location?: string;
};

export const Header: FC<HeaderProps> = ({
  title,
  description,
  image,
  socialLinks,
  location,
}) => (
  <div>
    {image && <Image className="rounded-full" {...image} alt={image.alt} />}
    <h1 className="text-fluid">{title}</h1>
    <p>{description}</p>
    <div className="flex">
      <div className="flex flex-col"></div>
    </div>
    {socialLinks.map((socialLink, index) => (
      <a key={index} href={socialLink.url}>
        {socialLink.name}
      </a>
    ))}
  </div>
);
