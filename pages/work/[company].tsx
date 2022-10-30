import type { GetStaticPaths, GetStaticProps } from 'next';
import type { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { neutral } from 'tailwindcss/colors';
import { paths, workData } from 'data';
import { Icons } from 'components/atoms/Icons';
import { ProjectSection } from 'components/ProjectSection';
import { ExternalLink } from 'components/atoms/ExternalLink';
import type { ProjectLink, WorkData } from 'data/work';
import { Heading } from 'components/atoms/Heading';

type CorelliumPageProps = {
  data: WorkData;
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
      <div className="mb-16 flex flex-col gap-8 sm:gap-16">
        <Link href="/#work" passHref>
          <a>
            <Icons name="arrowLeftCircle" size={38} />
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

          <Image
            className="rounded-md"
            src={data.mainImage.src}
            width={data.mainImage.width}
            height={data.mainImage.height}
            alt={data.mainImage.alt}
          />
        </div>

        <div className="flex flex-col gap-5 text-neutral-200">
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

      <div className="flex flex-col gap-16 sm:gap-24">
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
            <h2 className="mb-4 text-3xl font-semibold">{data.more.title}</h2>

            <div className="flex flex-col gap-5 text-neutral-300">
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
