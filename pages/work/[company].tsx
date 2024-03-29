import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { neutral } from 'tailwindcss/colors';
import clsx from 'clsx';
import { paths, workData } from 'data';
import { Icons } from 'components/atoms/Icons';
import { ProjectSection } from 'components/ProjectSection';
import { ExternalLink } from 'components/atoms/ExternalLink';
import type { ProjectLink, WorkData } from 'data/work';
import { Heading } from 'components/atoms/Heading';
import corelliumMain from 'public/images/corellium-main.png';
import payMain from 'public/images/pay-main.png';
import leadchatMain from 'public/images/leadchat-ui-1.png';
import backifiMain from 'public/images/backifi-main.png';
import { location } from 'data/constants';

type CorelliumPageProps = {
  data: WorkData;
};

const imagesMap: { [key: string]: StaticImageData } = {
  corelliumMain: corelliumMain,
  payMain: payMain,
  leadchatMain: leadchatMain,
  backifiMain: backifiMain,
};

const ProjectLink = ({ text, href, hrefLabel }: ProjectLink) => (
  <p className="mt-4">
    {text}{' '}
    <ExternalLink className="font-bold underline" href={href}>
      {hrefLabel}
    </ExternalLink>
  </p>
);

const Corellium: FC<CorelliumPageProps> = ({ data }) => {
  return (
    <div className="mb-16">
      <NextSeo
        title={`Bamdad Erfanian | Work | ${data.name}`}
        description={`Work experience of Bamdad Erfanian, a software engineer based in ${location}`}
      />
      <div className="mb-16 flex flex-col gap-8 sm:gap-16">
        <Link href="/#work" passHref>
          <a className="w-fit">
            <Icons
              name="arrowLeftCircle"
              size={38}
              className="stroke-neutral-300 dark:stroke-neutral-300"
            />
          </a>
        </Link>

        <div>
          <Heading>{data.name}</Heading>
          <Heading>{data.title}</Heading>
          <Heading>{data.date}</Heading>

          <div className="mt-3 mb-10 flex gap-3 sm:mb-16">
            {data.stack?.map((stack, index) => (
              <Icons name={stack} key={index} fill={neutral[800]} size={28} />
            ))}
          </div>
          <div
            className={clsx(
              'rounded-lg border-2 border-neutral-200 leading-[0px] dark:border-transparent',
              {
                'border-0': data.name === 'Pay.com.au',
              }
            )}
          >
            <Image
              className="rounded-md"
              src={imagesMap[data.mainImage.src as string]}
              width={data.mainImage.width}
              height={data.mainImage.height}
              alt={data.mainImage.alt}
              placeholder="blur"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 text-neutral-700 dark:text-neutral-300">
          {data.intro.map((intro, index) => {
            if (typeof intro === 'string') {
              return <p key={index}>{intro}</p>;
            }

            return (
              <ProjectLink
                key={index}
                text={intro?.text}
                href={intro?.href}
                hrefLabel={intro?.hrefLabel}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-16 sm:gap-16">
        {data?.projects?.map((project, index) => (
          <ProjectSection
            key={index}
            title={project.title}
            images={project.images}
            link={
              project.links
                ? project.links.map((link, index) => (
                    <ProjectLink
                      key={index}
                      text={link?.text}
                      href={link?.href}
                      hrefLabel={link?.hrefLabel}
                    />
                  ))
                : undefined
            }
          >
            {project.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </ProjectSection>
        ))}

        {data.more && (
          <div>
            <h2 className="mb-4 text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
              {data.more.title}
            </h2>

            <div className="flex flex-col gap-5 text-neutral-700 dark:text-neutral-300">
              <p>{data.more.description}</p>
              <ul className="ml-8 flex flex-col gap-2 [&>li]:list-disc">
                {data.more.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const data = workData.find((work) => work.iconName === params?.company);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: paths,
    fallback: false,
  };
};

export default Corellium;
