import type { ImageProps } from 'next/image';
import type { IconNames, StackIconNames } from 'components/atoms/Icons';

export type ProjectLink = {
  text: string;
  href: string;
  hrefLabel: string;
};

export type WorkData = {
  name: string;
  title: string;
  description: string;
  iconName: IconNames;
  date: string;
  stack?: StackIconNames[];
  mainImage: ImageProps;
  intro: (ProjectLink | string)[];
  projects?: {
    title: string;
    images?: ImageProps[];
    description: string[];
    links?: ProjectLink[];
  }[];
  more?: {
    title: string;
    description: string;
    projects: string[];
  };
};

export const workData: WorkData[] = [
  {
    name: 'Corellium',
    title: 'Senior Frontend Engineer',
    date: 'Nov 2021 - Present',
    iconName: 'corellium',
    description:
      'Member of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
    stack: [
      'typescript',
      'react',
      'redux',
      'nextjs',
      'tailwind',
      'vercel',
      'jenkins',
    ],
    mainImage: {
      src: '/images/corellium-main.png',
      width: 2850,
      height: 1388,
      alt: 'corellium platform',
    },
    intro: [
      'I joined Corellium to help the Product and Core engineering team take the platform and the codebase from a succesful start-up to an exciting scale-up.',
      'We were tasked with bringing a new look to our app, marketing website and presence online, as well as clearing years of tech debt and modernizing the codebase.',
      'Here are some of the projects I had the pleasure worked on.',
    ],
    projects: [
      {
        title: 'UI Library',
        images: [
          {
            src: '/images/corellium-magic-1.png',
            width: 2850,
            height: 1388,
            alt: 'ui library',
          },
          {
            src: '/images/corellium-magic-2.png',
            width: 2850,
            height: 1388,
            alt: 'design system',
          },
        ],
        description: [
          'We designed and built a modern, accessible and responsive design system and UI library in order to bring a fresh look to the platform.',
          ' We used the TypeScript, React, Sotrybook and modern design patterns to create the UI library so it could be used across all company products, while making sure that it is easy to use and update for the engineers.',
        ],
        links: [
          {
            text: 'View',
            href: 'https://magic.corellium.design/',
            hrefLabel: 'Corellium UI Library',
          },
        ],
      },
      {
        title: 'Webstie',
        images: [
          {
            src: '/images/corellium-website-1.png',
            width: 2850,
            height: 1388,
            alt: 'corellium website',
          },
          {
            src: '/images/corellium-website-2.png',
            width: 2850,
            height: 1388,
            alt: 'corellium website',
          },
        ],
        description: [
          'As part of this project we re-designed and re-built the company&apos;s website using our new UI library.',
          'I personally took charge and delivered this project before it&apos;s due date while being able to contribute to our UI library as I was using it.',
          'We used TypeScipt and NextJS as the main technologies and used Tailwind to manage styling and responsiveness. And we used headless CMS to manage the content.',
        ],
        links: [
          {
            text: 'View',
            href: 'https://www.corellium.com/',
            hrefLabel: 'Corellium Website',
          },
        ],
      },
    ],
    more: {
      title: 'More...',
      description:
        "In addition to the projects above, I've worked on many smaller initiatives, projects and features, some of which are listed below",
      projects: [
        'Completed two years of tech debt',
        'Converted the codebase from JavaScript to TypeScript',
        'Added modularization to the styling',
        'Refactored and cleaned up thousands of lines of code',
        'And fixed/completed countless bugs and tickets',
      ],
    },
  },
  {
    iconName: 'pay',
    name: 'Pay.com.au',
    title: 'Full Stack Developer',
    date: 'Nov 2020 - Nov 2021',
    description:
      'Member of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
    stack: ['typescript', 'react', 'nodejs', 'apollo', 'mongodb'],
    mainImage: {
      src: '/images/pay-main.png',
      width: 1382,
      height: 1320,
      alt: 'pay.com.ay platform',
    },
    intro: [
      'I joined the Pay team with the goal of moving the product from an MVP to a fully fledged payment platform.',
      'I worked closely with the CTO on all the different parts of the product. I was responsible for the frontend, backend, and the infrastructure alongside the CTO and I also worked on the design of the product.',
      "Our aim was to create a robust and secure codebase. We used block-chain technology to manage our ledgers and had a code audit process for every step of the user's actions.",
      'Here are some of the projects I had the pleasure worked on.',
    ],
    projects: [
      {
        title: 'UI Library',
        images: [
          {
            src: '/images/pay-ui-1.png',
            width: 2850,
            height: 1388,
            alt: 'ui library',
          },
          {
            src: '/images/pay-ui-2.png',
            width: 2850,
            height: 1388,
            alt: 'ui library',
          },
        ],
        description: [
          'Having built a design system and UI library before joining company, I took the responsibility of building a new one for Pay.com.au.',
          'I used TypeScript, React and modern design patterns to create a set that could be used across different products.',
        ],
      },
    ],
    more: {
      title: 'More...',
      description:
        'In addition to the project above, I worked on many smaller initiatives, projects and features, some of which are listed below.',
      projects: [
        'Directly managed two external teams',
        'Built the two factor authentication feature',
        'Implemented the integration with BPAY payment platform',
        'Worked on implementing robust UI and server side validations',
        'And was actively involved in the interviewing and the hiring process',
      ],
    },
  },
  {
    iconName: 'leadchat',
    name: 'Leadchat',
    title: 'Full Stack Developer',
    date: 'May 2021 - Present',
    description:
      'Member of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
    stack: [
      'react',
      'nodejs',
      'postgres',
      'circleci',
      'docker',
      'aws',
      'azure',
    ],
    mainImage: {
      src: '/images/leadchat-ui-1.png',
      width: 2850,
      height: 1388,
      alt: 'leadchat platform',
    },
    intro: [
      'Leadchat presented an amazing growth opportunity for me as developer as I was the sole developer on the platform tasked to build many new tools as well as take charge of the codebase moved to more modern technologies and languages.',
      'I was responsible for the frontend, backend, design and the infrastructure of all the tools, and helped turn many business ideas into tools that were used both by clients and staff.',
      'Here are some of the projects and tools I had the pleasure worked',
    ],
    projects: [
      {
        title: 'Performance Analysis App',
        description: [
          'One of the first tasks I was given was to create a tool that would help the business evaluate the performance of the support team and the quality of the support provided to clients.',
          'I worked closely with other departments to create a set of performance metrics that could promote healthy competition between the support team and help the business identify areas of improvement.',
          'Using these metrics I was able to create an app where each memeber could be rated by their peers and the results would be displayed in a leaderboard.',
          'I was responsible for the design, data modeling, frontend and backend, insfrastructure, CI/CD and hosting.',
        ],
      },
      {
        title: 'UI Library',
        images: [
          {
            src: '/images/leadchat-ui-2.png',
            width: 2850,
            height: 1388,
            alt: 'leadchat ui library',
          },
          {
            src: '/images/leadchat-ui-3.png',
            width: 2850,
            height: 1388,
            alt: 'leadchat ui library',
          },
        ],
        description: [
          'I had the pleasure to design and build my first component library at Leadchat with the aim of unifying the design language of the platform.',
          'I used Storybook to create a living documentation of the components and styled-components to create a theme that could be used across the platform.',
        ],
        links: [
          {
            text: 'View the',
            href: 'https://www.figma.com/file/xl28rT9nlkuB1YHjSQQv8a/Bam-Erfanian---Design-System-Template',
            hrefLabel: 'Design System',
          },
          {
            text: 'and the',
            href: 'https://design-system-zeta.vercel.app/',
            hrefLabel: 'UI Library',
          },
        ],
      },
    ],
    more: {
      title: 'More...',
      description:
        'In addition to the project above, I worked on many smaller initiatives, projects and features, some of which are listed below',
      projects: [
        'Created an email system compatible with all browsers and clients.',
        'Built a number of reporting and analysis tools.',
        'Took responsibility for a newly developed platform with a lot of rough edges.',
      ],
    },
  },
  {
    name: 'PoweredLocal',
    title: 'Full Stack Developer',
    date: 'May 2021 - Present',
    iconName: 'backifi',
    description:
      'Member of the Product and Core engineering team. Helped creating companys UI library, rebuilt the marketing website, helped clear 2 years of tech dept.',
    stack: ['react', 'nodejs', 'postgres', 'circleci', 'docker', 'aws'],
    mainImage: {
      src: '/images/backifi-main.png',
      width: 2850,
      height: 1388,
      alt: 'backifi platform',
    },
    intro: [
      'At PoweredLocal I was tasked with creating a tool that would be essential to the success of the business. The tool was used as a companion to the service offered by the business and was quickly became one of the fastest growing products in the company.',
      'I co-developed this tool with another developer and we worked closely on all aspects of the product. We were responsible for the design, development, and deployment of the app.',
      'I personally took charge of integrating with six different storage platforms including Google Drive, Dropbox, and Microsoft OneDrive.',
      {
        text: 'View the',
        href: 'https://www.backifi.com/',
        hrefLabel: 'Backifi App',
      },
    ],
  },
];
