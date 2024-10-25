import { Link } from "~/components/app";
import { Heading, HeadingContent } from "~/components/heading";
import { Section } from "~/components/section";

const NotFound = () => {
  return (
    <Section className="flex flex-col items-center gap-24 first-of-type:py-48">
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={1}>Cette page n’existe pas</HeadingContent>
      </Heading>

      <p className="text-center">
        Vous pouvez consulter le <Link href="/plan-du-site">plan du site</Link> pour retrouver votre chemin.
      </p>
    </Section>
  );
};

export default NotFound;
