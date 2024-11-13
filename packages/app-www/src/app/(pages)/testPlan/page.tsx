import type { Metadata } from "next";
import { Link } from "~/components/app";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { UnorderedList, UnorderedListItem } from "~/components/list";
import { Section } from "~/components/section";
import { fetchPlan } from "~/app/utils/fetchPolicy";

export const metadata: Metadata = {
  title: "Plan du site | INOLIB",
};

/**
 * Fetch et affichage de la page plan du site.
 */
export default async function Page() {
  const plan = await fetchPlan();

  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>{plan.Titre}</HeadingContent>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn />
      </TwoColumnsFlexLayout>

      <nav aria-label="Plan du site">
        <UnorderedList className="flex flex-col gap-2">
          {plan.lien.map((item) => (
            <UnorderedListItem key={item.id} className="flex flex-col gap-2">
              {/* Affiche le lien principal */}
              {item.lien ? <Link href={item.lien}>{item.titre}</Link> : <p>{item.titre}</p>}

              {/* Affiche les sous-liens s'il y en a */}
              {item.sousLiens && item.sousLiens.length > 0 && (
                <UnorderedList className="flex flex-col gap-2 pl-4">
                  {item.sousLiens.map((subItem) => (
                    <UnorderedListItem key={subItem.id}>
                      <Link href={subItem.Titre}>{subItem.sousLiens}</Link>
                    </UnorderedListItem>
                  ))}
                </UnorderedList>
              )}
            </UnorderedListItem>
          ))}
        </UnorderedList>
      </nav>
    </Section>
  );
}
