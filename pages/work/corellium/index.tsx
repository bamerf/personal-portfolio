import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import Image from 'next/image';
import { workData } from 'data';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Icons } from 'components/atoms/Icons';
import { ProjectSection } from 'components/ProjectSection';

type CorelliumPageProps = {
  data: WorkCardProps;
};

const Corellium: FC<CorelliumPageProps> = ({ data }) => {
  return (
    <div className="mb-16">
      <div className="mb-16 flex flex-col gap-16">
        <div>
          <h1 className="text-4xl font-bold text-white">{data.name}</h1>
          <h1 className="text-4xl font-bold text-white">{data.title}</h1>
          <h1 className="text-4xl font-bold text-white">{data.date}</h1>
          <div className="mt-3 flex gap-3">
            {data.stack?.map((stack, index) => (
              <Icons name={stack} key={index} fill="#262626" size={28} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 text-neutral-300">
          <p>
            I joined Corellium to help the Product and Core engineering team
            take the platform and the code base from a succesful start-up to an
            exciting scale-up.
          </p>
          <p>
            We were tasked with bringing a new look to our app, marketing
            website and presence online, as well as clearing years of tech debt
            and modernizing the code base.
          </p>
          <p>Here are some of the projects I had the pleasure worked on.</p>
        </div>
      </div>

      <div className="flex flex-col gap-24">
        <ProjectSection
          title="Design System"
          imageNames={['corellium-magic-1.png', 'corellium-magic-2.png']}
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
          <p>
            Check it out{' '}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://magic.corellium.design/"
              className="font-bold underline"
            >
              here
            </a>
          </p>
        </ProjectSection>

        <ProjectSection
          title="Website"
          imageNames={['corellium-magic-1.png', 'corellium-magic-2.png']}
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
          <p>
            Check it out{' '}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://magic.corellium.design/"
              className="font-bold underline"
            >
              here
            </a>
          </p>
        </ProjectSection>
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
