import type { Metadata } from "next";

import { Link } from "~/components/app";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { UnorderedList, UnorderedListItem } from "~/components/list";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Plan du site | INOLIB",
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Plan du site</HeadingContent>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <nav aria-label="Plan du site">
        <UnorderedList className="flex flex-col gap-2">
          <UnorderedListItem>
            <Link href="/">Accueil</Link>
          </UnorderedListItem>

          <UnorderedListItem className="flex flex-col gap-2">
            <Link href="/contact">Contact</Link>
            <UnorderedList className="flex flex-col gap-2">
              <UnorderedListItem>
                <Link href="/contact/rendez-vous">Rendez-vous</Link>
              </UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>

          <UnorderedListItem className="flex flex-col gap-2">
            <p>Audit</p>
            <UnorderedList className="flex flex-col gap-2">
              <UnorderedListItem>
                <Link href="/audit/audits-accessibilité">Audits d’accessibilité</Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="/audit/tests-utilisateurs">Tests utilisateurs</Link>
              </UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>

          <UnorderedListItem className="flex flex-col gap-2">
            <p>Accompagnement</p>
            <UnorderedList className="flex flex-col gap-2">
              <UnorderedListItem>
                <Link href="/accompagnement/pilotage-de-projet">Pilotage de projet</Link>
              </UnorderedListItem>
              <UnorderedListItem>
                <Link href="/accompagnement/accompagnement-technique">Accompagnement technique</Link>
              </UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>

          <UnorderedListItem className="flex flex-col gap-2">
            <Link href="/developpement">Développement web et mobile</Link>
            <UnorderedList className="flex flex-col gap-2">
              <UnorderedListItem>
                <Link href="/developpement/sites-vitrines-et-institutionnels">Sites vitrines et institutionnels</Link>
              </UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>

          <UnorderedListItem className="flex flex-col gap-2">
            <Link href="/formations">Formations</Link>
            <UnorderedList className="flex flex-col gap-2">
              <UnorderedListItem>
                <Link href="/formations/certificat-qualiopi">Certificat Qualiopi</Link>
              </UnorderedListItem>
            </UnorderedList>
          </UnorderedListItem>

          {/* <UnorderedListItem>
            <Link href="/blog">Blog</Link>
          </UnorderedListItem> */}

          <UnorderedListItem>
            <Link href="/a-propos">À propos</Link>
          </UnorderedListItem>

          <UnorderedListItem>
            <Link href="/mentions-legales">Mentions légales</Link>
          </UnorderedListItem>

          <UnorderedListItem>
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
          </UnorderedListItem>

          <UnorderedListItem>
            <Link aria-current="page" href="/plan-du-site">
              Plan du site
            </Link>
          </UnorderedListItem>
        </UnorderedList>
      </nav>
    </Section>
  );
};

export default Page;
