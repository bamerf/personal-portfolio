import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { workData } from 'data';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Icons } from 'components/atoms/Icons';
import { ProjectSection } from 'components/ProjectSection';
import { ExternalLink } from 'components/atoms/ExternalLink';

type LeadchatPageProps = {
  data: WorkCardProps;
};

const Leadchat: FC<LeadchatPageProps> = ({ data }) => {
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
              <Icons name={stack} key={index} fill="#262626" size={28} />
            ))}
          </div>
          <Image
            className="w-full rounded-md"
            src={`/images/leadchat-ui-1.png`}
            width={2850}
            height={1388}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5 text-neutral-300">
          <p>
            Leadchat presented an amazing growth opportunity for me as developer
            as I was the sole developer on the platform tasked to build many new
            tools as well as take charge of the codebase moved to more modern
            technologies and languages.
          </p>
          <p>
            I was responsible for the frontend, backend, design and the
            infrastructure of all the tools, and helped turn many business ideas
            into tools that were used both by clients and staff.
          </p>
          <p>
            Here are some of the projects and tools I had the pleasure worked
            on.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-16 sm:gap-24">
        <ProjectSection title="Rating Tool">
          <p>
            One of the first tasks I was given was to create a tool that would
            help the business evaluate the performance of the support team and
            the quality of the support provided to clients.
          </p>
          <p>
            I worked closely with other departments to create a set of
            performance metrics that could promote healthy competition between
            the support team and help the business identify areas of
            improvement.
          </p>
          <p>
            Using these metrics I was able to create an app where each memeber
            could be rated by their peers and the results would be displayed in
            a leaderboard.
          </p>
          <p>
            I was responsible for the design, data modeling, frontend and
            backend, insfrastructure, CI/CD and hosting.
          </p>
        </ProjectSection>

        <ProjectSection
          title="Component Library"
          imageNames={['leadchat-ui-2.png', 'leadchat-ui-3.png']}
        >
          <p>
            I had the pleasure to design and build my first component library at
            Leadchat with the aim of unifying the design language of the
            platform.
          </p>
          <p>
            I used Storybook to create a living documentation of the components
            and styled-components to create a theme that could be used across
            the platform.
          </p>
          <p>
            Check out the{' '}
            <ExternalLink
              className="font-bold underline"
              href="https://www.figma.com/file/xl28rT9nlkuB1YHjSQQv8a/Bam-Erfanian---Design-System-Template"
            >
              Design System
            </ExternalLink>{' '}
            and the{' '}
            <ExternalLink
              className="font-bold underline"
              href="https://design-system-zeta.vercel.app/"
            >
              Component Library
            </ExternalLink>
            .
          </p>
        </ProjectSection>

        <div>
          <h2 className="mb-4 text-3xl font-semibold">More...</h2>

          <div className="flex flex-col gap-5 text-neutral-300">
            <p>
              In addition to the project above, I worked on many smaller
              initiatives, projects and features, some of which are listed below
            </p>
            <ul className="ml-8 flex flex-col gap-2 [&>li]:list-disc">
              <li>
                Created an email system compatible with all browsers and clients
              </li>
              <li>Built a number of reporting and analysis tools</li>
              <li>
                Took responsibility for a newly developed platform with a lot of
                rough edges.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const data = workData.find((work) => work.iconName === 'leadchat');

  return {
    props: {
      data,
    },
  };
};

export default Leadchat;
