import { NextPage } from 'next';
import { Container } from 'components/atoms/Container';
import { EducationSection } from 'components/EducationSection';
import { ExternalLink } from 'components/atoms/ExternalLink';

const About: NextPage = () => {
  return (
    <div>
      <h1 className="mb-16 text-4xl font-bold text-white">About</h1>

      <div className="mb-24 flex flex-col gap-5 text-neutral-300">
        <p>
          I&apos;m currently working at{' '}
          <ExternalLink
            className="font-semibold underline"
            href="https://www.corellium.com/"
          >
            Corellium
          </ExternalLink>{' '}
          helping refresh the platform after a succesful series A funding.
          I&apos;ve been enjoying working on many greenfileds projects and
          helping optimize and growing the current platform.
        </p>
        <p className="text-neutral-300">
          Previously I worked at{' '}
          <ExternalLink
            className="font-semibold underline"
            href="https://pay.com.au/"
          >
            Pay.com.au
          </ExternalLink>{' '}
          where we used modern technologies like block-chain to create a payment
          platform for businesses.
        </p>
        <p>
          My work has always been around the JavaScript and TypeScript ecosystem
          and recently I&apos;ve been focusing more on frontend technologies.
          After building a few of UI libraries, I&apos;ve come to appreciate the
          nuanced balance between the technical and the aesthetic.
        </p>
        <p>
          I enjoy looking at projects from a top down perspective, so I often
          involve myself with all aspect of the development process, from
          product vision and platform architecture, all the way down to code
          optimisation and design patterns.
        </p>
        <p className="mb-0">
          My moto is Methodical Artistry and my goal is to fine tune my work to
          be accessible and user-friendly, functional and fluid, and simple and
          elegant.
        </p>
      </div>

      <EducationSection className="!mb-24" />

      <div className="mb-16 sm:mb-24">
        <h2 className="mb-6 text-3xl font-semibold">After Hours</h2>
        <div className="flex flex-col gap-5 text-neutral-300">
          <p>Outside of work, all my time is spent focusing on health.</p>
          <p>
            For physical health, I do weight training and Bikram Yoga. For
            mental peace I meditate.
          </p>
          <p>
            I also spend a good portion of my time studying, learning and
            exercising my mental capacity. I try to do a coding challenge a day,
            learning new technologies or read articles.
          </p>
          <p>
            And I&apos;m a big fan of Techno and play at events when I get the
            chance. You can listen to some of my sets{' '}
            <ExternalLink
              href="https://www.zarbsound.com/"
              className="font-semibold underline"
            >
              here
            </ExternalLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
