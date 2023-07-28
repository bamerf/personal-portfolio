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
      "Member of the Product and Core engineering teams. Helped creating the company's UI library, rebuilt the marketing website and many more.",
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
      src: 'corelliumMain',
      width: 2850,
      height: 1388,
      alt: 'corellium platform',
    },
    intro: [
      'I became a part of Corellium with the aim to assist the Product and Core engineering team in transitioning the platform and the codebase from a successful start-up to an exciting scale-up',
      'Our responsibility was to infuse a fresh aesthetic into our app, marketing website, and online presence, while also addressing years of accumulated technical debt and modernizing the codebase',
      'Here are some of the projects on which I had the pleasure of working.',
    ],
    projects: [
      {
        title: 'UI Library',
        images: [
          {
            src: 'corelliumMagicOne',
            width: 2850,
            height: 1388,
            alt: 'ui library',
          },
          {
            src: 'corelliumMagicTwo',
            width: 2850,
            height: 1388,
            alt: 'design system',
          },
        ],
        description: [
          'We conceptualized and developed a modern, accessible, and responsive design system along with a UI library to imbue our platform with a fresh aesthetic.',
          'Utilizing TypeScript, React, Storybook, and modern design patterns, we crafted a UI library that could be implemented across all company products. We ensured its ease of use and upgradability for the engineers.',
        ],
        links: [
          {
            text: 'View',
            href: 'https://magic.corellium.design/',
            hrefLabel: 'Metal UI Library',
          },
        ],
      },
      {
        title: 'Website',
        images: [
          {
            src: 'corelliumWebsiteOne',
            width: 2850,
            height: 1388,
            alt: 'corellium website',
          },
          {
            src: 'corelliumWebsiteTwo',
            width: 2850,
            height: 1388,
            alt: 'corellium website',
          },
        ],
        description: [
          "As a component of this project, we re-imagined and reconstructed the company's website employing our newly-developed UI library.",
          'I personally undertook and delivered this project while simultaneously contributing to our UI library as I utilized it.',
          'Our primary technologies were TypeScript and NextJS. We employed Tailwind for managing styling and responsiveness, and we used a headless CMS for content management.',
          'Please note: The repository for this project has since been transferred to an external agency, and unfortunately, it is currently in a non-functional state at the time of writing this.',
        ],
        links: [
          {
            text: 'View',
            href: 'https://www.corellium.com/',
            hrefLabel: 'Corellium Website',
          },
        ],
      },
      {
        title: 'Webplayer',
        description: [
          'I effectively deployed a feature that facilitated users to seamlessly integrate their Corellium devices into various preferred platforms, encompassing websites and applications.',
          'This feature has unlocked novel possibilities in sectors such as education and research, empowering users to harness the maximum potential of Corellium devices in their respective fields.',
        ],
        links: [
          {
            text: 'View',
            href: 'https://support.corellium.com/webplayer',
            hrefLabel: 'Corellium Webplayer',
          },
        ],
      },
    ],
    more: {
      title: 'More...',
      description:
        "Apart from the aforementioned projects, I've been involved in numerous smaller ventures, projects, and feature developments, a few of which are enumerated below.",
      projects: [
        "Accomplished the resolution of two years' worth of technical debt",
        'Transformed the codebase from JavaScript to TypeScript',
        "Incorporated modular styling to the app's components",
        'Undertook refactoring and cleanup of thousands of lines of code',
        "Built an AI chatbot based on the company's knowledge base",
        'Remedied and addressed innumerable bugs and tickets',
      ],
    },
  },
  {
    iconName: 'pay',
    name: 'Pay.com.au',
    title: 'Full Stack Developer',
    date: 'Nov 2020 - Nov 2021',
    description:
      'Founding member on the engineering team, I helped the first release of the product and was responsible for numerous features and teams.',
    stack: ['typescript', 'react', 'nodejs', 'apollo', 'mongodb'],
    mainImage: {
      src: 'payMain',
      width: 1382,
      height: 1320,
      alt: 'pay.com.ay platform',
    },
    intro: [
      'I became a member of the Pay team with an objective to transition the product from a minimum viable product (MVP) to a comprehensive payment platform.',
      'My collaboration with the CTO extended to all facets of the product, where I held responsibility for frontend, backend, and infrastructure management. Additionally, I also contributed to the product design process.',
      'Our mission was to construct a strong and secure codebase. We employed blockchain technology for our ledger management and implemented a rigorous code audit process for every user interaction. Our focus significantly leaned towards rigorous validation and testing of both the frontend and the backend components.',
      'Below are some of the projects I had the opportunity to work on.',
    ],
    projects: [
      {
        title: 'UI Library',
        images: [
          {
            src: 'payUiOne',
            width: 2850,
            height: 1388,
            alt: 'ui library',
          },
          {
            src: 'payUiTwo',
            width: 2850,
            height: 1388,
            alt: 'ui library',
          },
        ],
        description: [
          'Having previously constructed a design system and UI library prior to joining the company, I embraced the duty of developing a new one for Pay.com.au.',
          'I leveraged TypeScript, React, and contemporary design patterns to create a versatile set applicable across various products.',
        ],
      },
    ],
    more: {
      title: 'More...',
      description:
        'In addition to the aforementioned project, I contributed to numerous smaller initiatives, projects, and features, a selection of which are detailed below:',
      projects: [
        'I directly supervised two external teams',
        'Constructed the two-factor authentication feature',
        'Facilitated the integration with the BPAY payment platform',
        'Contributed to the implementation of robust UI and server-side validations',
        'And participated actively in the interviewing and hiring processes',
      ],
    },
  },
  {
    iconName: 'leadchat',
    name: 'Leadchat',
    title: 'Full Stack Developer',
    date: 'May 2021 - Present',
    description:
      'Head of the engineering team responsible for multiple products. I built a handful of internal platforms and helped grow and maintain the core product.',
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
      src: 'leadchatMain',
      width: 2850,
      height: 1388,
      alt: 'leadchat platform',
    },
    intro: [
      'Leadchat offered an exceptional growth opportunity for me as a developer, being the sole programmer on the platform, tasked with constructing various new tools and spearheading the transition of the codebase to more contemporary technologies and languages.',
      'I held responsibility for the frontend, backend, design, and infrastructure across all products, and successfully converted many business concepts into tools utilized by both clients and employees.',
      'Below are some of the projects and tools I had the opportunity to work on.',
    ],
    projects: [
      {
        title: 'Performance Analysis App',
        description: [
          'One of my initial assignments involved creating a tool to assist the business in assessing the performance of the support team and the quality of the support delivered to clients.',
          'I collaborated closely with other departments to establish a set of performance metrics aimed at fostering healthy competition within the support team and helping the business pinpoint areas for improvement.',
          'Leveraging these metrics, I was able to design an application where each team member could be evaluated by their manager, with the results being showcased in a leaderboard.',
          'I held responsibility for the design, data modeling, frontend and backend, infrastructure, continuous integration/continuous delivery (CI/CD), and hosting.',
        ],
      },
      {
        title: 'UI Library',
        images: [
          {
            src: 'leadchatOne',
            width: 2850,
            height: 1388,
            alt: 'leadchat ui library',
          },
          {
            src: 'leadchatTwo',
            width: 2850,
            height: 1388,
            alt: 'leadchat ui library',
          },
        ],
        description: [
          "I had the delightful opportunity to design and construct my inaugural component library at Leadchat, with the objective of standardizing the platform's design language.",
          'I utilized Storybook to create dynamic documentation of the components and styled-components to fashion a theme that could be updated with ease.',
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
        'In addition to the projects mentioned above, I was involved in numerous smaller initiatives, projects, and features, some of which are outlined below:',
      projects: [
        'Developed an email system that is compatible across all browsers and clients',
        'Constructed several automated reporting and analysis tools',
        'Assumed responsibility for refining a recently developed platform that had numerous rough edges',
      ],
    },
  },
  {
    name: 'PoweredLocal',
    title: 'Full Stack Developer',
    date: 'May 2021 - Present',
    iconName: 'backifi',
    description:
      'Co-developer on the initial engineering team, responsible for designing, architecting and building the fastest growing product in the company.',
    stack: ['react', 'nodejs', 'postgres', 'circleci', 'docker', 'aws'],
    mainImage: {
      src: 'backifiMain',
      width: 2850,
      height: 1388,
      alt: 'backifi platform',
    },
    intro: [
      "At PoweredLocal, I was assigned to develop a tool integral to the business's success. This tool served as a complement to the services offered by the business and swiftly became one of the fastest-growing products within the company.",
      'I strategized and co-developed this application from its inception, closely working on all facets of the product. We held responsibility for the design, development, and deployment of the application.',
      'I personally undertook the task of integrating the application with six different storage platforms, including Google Drive, Dropbox, and Microsoft OneDrive.',
      {
        text: 'View the',
        href: 'https://www.backifi.com/',
        hrefLabel: 'Backifi App',
      },
    ],
  },
];
