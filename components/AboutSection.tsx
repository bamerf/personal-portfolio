import { ExternalLink } from 'components/atoms/ExternalLink';

export function AboutSection() {
  return (
    <div id="about" className="mb-24">
      <h2 className="mb-6 text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
        About
      </h2>

      <div className="mb-16 flex flex-col gap-5 text-neutral-700 dark:text-neutral-300">
        <p>
          I&apos;m currently at{' '}
          <ExternalLink
            className="font-semibold underline"
            href="https://www.cellebrite.com/"
          >
            Cellebrite
          </ExternalLink>
          , working on the application feature team — shipping new features,
          refining existing ones, and driving meaningful product improvements.
        </p>
        <p>
          Before Cellebrite, I spent four years at{' '}
          <ExternalLink
            className="font-semibold underline"
            href="https://www.corellium.com/"
          >
            Corellium
          </ExternalLink>
          , where I built UI libraries, rebuilt the marketing site, and helped
          modernize the platform following their Series A.
        </p>
        <p>
          Prior to that, I was part of the founding engineering team at{' '}
          <ExternalLink
            className="font-semibold underline"
            href="https://pay.com.au/"
          >
            Pay.com.au
          </ExternalLink>
          , where we built a business payment platform using blockchain
          technology.
        </p>
        <p>
          JavaScript and TypeScript have been my world for years, with a focus
          on frontend — I&apos;ve built multiple UI libraries and developed a
          strong sense of the balance between technical precision and design
          quality.
        </p>
        <p>
          I work under the idea of &apos;Methodical Artistry&apos; — that the
          best software is both rigorous and elegant.
        </p>
      </div>

      <div>
        <h3 className="mb-6 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
          After Hours
        </h3>
        <div className="flex flex-col gap-5 text-neutral-700 dark:text-neutral-300">
          <p>
            Outside of work, I focus on staying balanced — physically and
            mentally.
          </p>
          <p>
            I train with weights and practice Bikram Yoga. Both keep me
            grounded and sharp.
          </p>
          <p>
            Meditation is a daily habit. It helps me stay calm and focused when
            things get noisy.
          </p>
          <p>
            I spend a lot of time learning — whether that&apos;s a new
            technology, a coding challenge, or an article that caught my
            attention.
          </p>
          <p>
            I&apos;m also deep into Techno music — as a listener and an
            occasional performer. There&apos;s a surprising overlap between
            writing code and DJing: both are about structure, flow, and knowing
            when to let things breathe.
          </p>
        </div>
      </div>
    </div>
  );
}
