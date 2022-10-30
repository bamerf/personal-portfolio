import type { HeaderProps } from 'components/Header';

export const headerData: HeaderProps = {
  name: 'Bamdad Erfanian',
  title: {
    text: 'Senior Frontend Engineer at',
    company: 'Corellium',
  },
  description:
    'I architect, build and design user interfaces that work for everyone. I love balancing the needs of the business with the needs of the user to create a delightful experience.',
  image: {
    src: '/images/profile.jpg',
    alt: 'profile picture',
    width: 125,
    height: 125,
  },
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bamdad-erfanian/',
      iconName: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bamerf/',
      iconName: 'github',
    },
  ],
  location: 'Grenoble, France',
};
