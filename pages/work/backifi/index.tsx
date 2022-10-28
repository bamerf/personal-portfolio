import type { GetStaticProps } from 'next';
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { workData } from 'data';
import type { WorkCardProps } from 'components/atoms/WorkCard';
import { Icons } from 'components/atoms/Icons';
import { ProjectSection } from 'components/ProjectSection';
import { ExternalLink } from 'components/atoms/ExternalLink';

type BackifiPageProps = {
  data: WorkCardProps;
};

const Backifi: FC<BackifiPageProps> = ({ data }) => {
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
            src={`/images/backifi-main.png`}
            width={2850}
            height={1388}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-5 text-neutral-300">
          <p>
            At PoweredLocal I was tasked with creating a tool that would be
            essential to the success of the business. The tool was used as a
            companion to the service offered by the business and was quickly
            became one of the fastest growing products in the company.
          </p>
          <p>
            I co-developed this tool with another developer and we worked
            closely on all aspects of the product. We were responsible for the
            design, development, and deployment of the app.
          </p>
          <p>
            I personally took charge of integrating with six different storage
            platforms including Google Drive, Dropbox, and Microsoft OneDrive
          </p>
          <p>
            Check out the{' '}
            <ExternalLink
              href="https://www.backifi.com/"
              className="font-bold underline"
            >
              app
            </ExternalLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const data = workData.find((work) => work.iconName === 'backifi');

  return {
    props: {
      data,
    },
  };
};

export default Backifi;
