import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { neutral } from 'tailwindcss/colors';
import { workData } from 'data';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Icons } from 'components/atoms/Icons';
import { ProjectSection } from 'components/ProjectSection';
import { ExternalLink } from 'components/atoms/ExternalLink';

type CorelliumPageProps = {
  data: WorkCardProps;
};

const ComponentLibraryLink = () => (
  <p>
    Check out the{' '}
    <ExternalLink
      className="font-bold underline"
      href="https://magic.corellium.design/"
    >
      Component Library here
    </ExternalLink>{' '}
    .
  </p>
);

const WebsiteLink = () => (
  <p>
    Check out the{' '}
    <ExternalLink
      className="font-bold underline"
      href="https://www.corellium.com/"
    >
      Website here
    </ExternalLink>{' '}
    .
  </p>
);

const Corellium: FC<CorelliumPageProps> = ({ data }) => {
  return (
    <div className="mb-16">
      <div className="mb-16 flex flex-col gap-8 sm:gap-16">
        <Link href="/#work" passHref>
          <a>
            <Icons name="arrowLeftCircle" size={38} />
          </a>
        </Link>
        <div>
          <h1 className="text-4xl font-bold text-white">{data.name}</h1>
          <h1 className="text-4xl font-bold text-white">{data.title}</h1>
          <h1 className="text-4xl font-bold text-white">{data.date}</h1>
          <div className="mt-3 mb-10 flex gap-3 sm:mb-16">
            {data.stack?.map((stack, index) => (
              <Icons name={stack} key={index} fill={neutral[800]} size={28} />
            ))}
          </div>
          <Image
            className="rounded-md"
            src={`/images/corellium-main.png`}
            width={2850}
            height={1388}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5 text-neutral-200">
          <p>
            I joined Corellium to help the Product and Core engineering team
            take the platform and the codebase from a succesful start-up to an
            exciting scale-up.
          </p>
          <p>
            We were tasked with bringing a new look to our app, marketing
            website and presence online, as well as clearing years of tech debt
            and modernizing the codebase.
          </p>
          <p>Here are some of the projects I had the pleasure worked on.</p>
        </div>
      </div>

      <div className="flex flex-col gap-16 sm:gap-24">
        <ProjectSection
          title="Component Library"
          imageNames={['corellium-magic-1.png', 'corellium-magic-2.png']}
          links={<ComponentLibraryLink />}
        >
          <p>
            We designed and built a modern, accessible and responsive design
            system and UI library in order to bring a fresh look to the
            platform.
          </p>
          <p>
            We used the TypeScript, React, Sotrybook and modern design patterns
            to create the UI library so it could be used across all company
            products, while making sure that it is easy to use and update for
            the engineers.
          </p>
        </ProjectSection>

        <ProjectSection
          title="Website"
          imageNames={['corellium-magic-1.png', 'corellium-magic-2.png']}
          links={<WebsiteLink />}
        >
          <p>
            As part of this project we re-designed and re-built the
            company&apos;s website using our new UI library.
          </p>
          <p>
            I personally took charge and delivered this project before it&apos;s
            due date while being able to contribute to our UI library as I was
            using it.
          </p>
          <p>
            We used TypeScipt and NextJS as the main technologies and used
            Tailwind to manage styling and responsiveness. And we used headless
            CMS to manage the content.
          </p>
        </ProjectSection>

        <div>
          <h2 className="mb-4 text-3xl font-semibold">More...</h2>

          <div className="flex flex-col gap-5 text-neutral-300">
            <p>
              In addition to the projects above, I&apos;ve worked on many
              smaller initiatives, projects and features, some of which are
              listed below
            </p>
            <ul className="ml-8 flex flex-col gap-2 [&>li]:list-disc">
              <li>Completed two years of tech debt</li>
              <li>Converted the codebase from JavaScript to TypeScript</li>
              <li>Added modularization to the styling</li>
              <li>Refactored and cleaned up thousands of lines of code</li>
              <li>And fixed/completed countless bugs and tickets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const data = workData.find((work) => work.iconName === 'corellium');

  return {
    props: {
      data,
    },
  };
};

export default Corellium;
