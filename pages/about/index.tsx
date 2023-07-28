import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { EducationSection } from 'components/EducationSection';
import { ExternalLink } from 'components/atoms/ExternalLink';
import { location } from '../../data/constants';

const About: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Bamdad Erfanian | About"
        description={`About Bamdad Erfanian, software engineer based in ${location}.`}
      />
      <h1 className="mb-16 text-4xl font-bold text-black dark:text-white">
        About
      </h1>

      <div className="flex flex-col gap-5 mb-24 text-neutral-700 dark:text-neutral-300">
        <p>
          I am currently lending my expertise to{' '}
          <ExternalLink
            className="font-semibold underline"
            href="https://www.corellium.com/"
          >
            Corellium,
          </ExternalLink>{' '}
          embarking on a mission to rejuvenate the platform&apos;s aesthetics
          following a successful Series A funding round. I find immense pleasure
          in working on numerous fresh, &apos;greenfield&apos; projects and
          contributing to the optimization and expansion of our existing
          platform.
        </p>
        <p>
          Prior to Corellium, I was part of the{' '}
          <ExternalLink
            className="font-semibold underline"
            href="https://pay.com.au/"
          >
            Pay.com.au
          </ExternalLink>{' '}
          team, where we harnessed cutting-edge technologies like blockchain to
          build a business-oriented payment platform.
        </p>
        <p>
          The universe of JavaScript and TypeScript has been my professional
          playground for years, with a recent pivot towards a deeper focus on
          frontend technologies. Having crafted several UI libraries, I&apos;ve
          developed a deep understanding of the delicate equilibrium between
          technical proficiency and aesthetic appeal.
        </p>
        <p>
          My approach towards projects is holistic; I take pleasure in immersing
          myself in every aspect of the development journey, from envisioning
          the product and architecting the platform, down to refining code and
          crafting elegant design patterns.
        </p>
        <p className="mb-0">
          Operating under the motto of &apos;Methodical Artistry&apos;, my goal
          is to meticulously fine-tune my creations to be accessible and
          user-friendly, functional yet fluid, embodying a simplicity that
          exudes elegance.
        </p>
      </div>

      <EducationSection className="!mb-24" />

      <div className="mb-16 sm:mb-24">
        <h2 className="mb-6 text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          After Hours
        </h2>
        <div className="flex flex-col gap-5 text-neutral-700 dark:text-neutral-300">
          <p>
            When I step away from the digital realm of work, my attention shifts
            entirely towards nourishing my holistic well-being.
          </p>
          <p>
            For physical health, I do weight training to achieve strength and
            endurance. I also practice Bikram Yoga, an intense, heated style of
            yoga that aids in flexibility, balance, and the deep cleansing of
            body and mind.
          </p>
          <p>
            For mental tranquility, I delve into meditation. This discipline
            helps me cultivate mindfulness and equanimity, enabling me to
            approach life&apos;s fluctuations with a calm and steady mind.
          </p>
          <p>
            I devote a substantial portion of my time to studying, learning, and
            exercising my cognitive faculties. I love the thrill of conquering a
            coding challenge, acquiring knowledge on emerging technologies, or
            diving into insightful articles that pique my curiosity.
          </p>
          <p>
            Beyond the intricacies of coding and the pursuit of wellness, I
            immerse myself in the throbbing sphere of Techno music. Not just an
            ardent enthusiast, I am also an occasional performer, always ready
            to seize the chance to command the decks at events when the
            opportunity presents itself.
          </p>
          <p>
            In the vast expanse between coding and Techno, I&apos;ve discovered
            an intriguing symmetry. In this sense, my Techno endeavours feel
            less like a departure from my coding practice and more like its
            natural continuation, in an auditory form. This parallel allows me
            to transition seamlessly between the two, creating a harmonious
            blend of my professional and personal passions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
