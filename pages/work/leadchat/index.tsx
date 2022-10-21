import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import Image from 'next/image';
import { workData } from 'data';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Icons } from 'components/atoms/Icons';
import { ProjectSection } from 'components/ProjectSection';

type LeadchatPageProps = {
  data: WorkCardProps;
};

const Leadchat: FC<LeadchatPageProps> = ({ data }) => {
  return (
    <div className="mb-16">
      <div className="mb-16 flex flex-col gap-16">
        <div>
          <h1 className="text-4xl font-bold text-white">{data.name}</h1>
          <h1 className="text-4xl font-bold text-white">{data.title}</h1>
          <h1 className="text-4xl font-bold text-white">{data.date}</h1>
          <div className="mt-3 mb-16 flex gap-3">
            {data.stack?.map((stack, index) => (
              <Icons name={stack} key={index} fill="#262626" size={28} />
            ))}
          </div>
          <Image
            className="w-full rounded-md"
            src={`/images/pay-main.png`}
            width={1382}
            height={1320}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5 text-neutral-300">
          <p>
            I joined the Leadchat team with the goal of moving the product from
            an MVP to a fully fledged payment platform.
          </p>
          <p>
            I worked closely with the CTO on all the different parts of the
            product. I was responsible for the frontend, backend, and the
            infrastructure alongside the CTO and I also worked on the design of
            the product.
          </p>
          <p>
            Our aim was to create a robust and secure codebase. We used
            block-chain technology to manage our ledgers and had a code audit
            process for every step of the user&apos;s action
          </p>
          <p>Here are some of the projects I had the pleasure worked on.</p>
        </div>
      </div>

      <div className="flex flex-col gap-24">
        <ProjectSection
          title="Component Library"
          imageNames={['pay-ui-1.png', 'pay-ui-2.png']}
        >
          <p>
            Having built a design system and UI library before joining
            Leadchat.com.au, I took the responsibility of building a new one for
            Leadchat.com.au.
          </p>
          <p>
            I used TypeScript, React and modern design patterns to create a set
            that could be used across different products.
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
              <li>Directly managed two external teams</li>
              <li>Built the two factor authentication feature</li>
              <li>Implemented the integration with BPAY payment platform</li>
              <li>
                Worked on implementing robust UI and server side validations
              </li>
              <li>
                And was actively involved in the interviewing and the hiring
                process
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
