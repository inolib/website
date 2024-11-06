import { fetchPolicyData } from "~/app/utils/fetchPolicy";
import { Team } from "~/components/(test)/team";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { UnorderedList, UnorderedListItem } from "~/components/list";
import { Section } from "~/components/section";
import { Values } from "~/components/(test)/Team/valeur";

/**
 *
 */
export default async function Page() {
  const policyData = await fetchPolicyData();
  const { titre, introduction, ListItem, contacInfo } = policyData;

  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>{titre}</HeadingContent>
          </Heading>
        </TwoColumnsFlexLayoutColumn>
        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
      <Team _color="white" />
      <Values _color="white" />
      <div className="flex max-w-prose flex-col gap-8">
        {introduction.map((item, index) => (
          <p key={index}>{item.children[0].text}</p>
        ))}

        {ListItem.map((item, index) => (
          <div className="flex flex-col gap-4" key={index}>
            {item.ListItem.map((content, idx) => {
              if (content.type === "heading") {
                return (
                  <Heading _alignment="left" _size="2xl" key={idx}>
                    <HeadingContent _level={2}>{content.children[0].text}</HeadingContent>
                  </Heading>
                );
              } else {
                // Vérifier la présence de puces dans le texte et ajuster l'affichage
                const textContent = content.children[0].text;
                return textContent.includes("•") ? (
                  <UnorderedList className="-mt-4 pl-8" key={idx}>
                    <UnorderedListItem>{textContent.replace("•", "").trim()}</UnorderedListItem>
                  </UnorderedList>
                ) : (
                  <p key={idx}>{textContent}</p>
                );
              }
            })}
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <p>
            Si vous avez des questions concernant notre politique de confidentialité, n’hésitez pas à nous contacter à
            l’adresse e-mail ou postale indiquée sur notre site web :
          </p>
          <UnorderedList className="-mt-4 pl-8">
            <UnorderedListItem>
              adresse e-mail : <a href={`mailto:${contacInfo[0].adresseEmail}`}>{contacInfo[0].adresseEmail}</a> ;
            </UnorderedListItem>
            <UnorderedListItem>
              adresse postale : <a href="https://maps.app.goo.gl/Qbw96fkcBgLsKqUr5">{contacInfo[0].adressePostale}</a>.
            </UnorderedListItem>
          </UnorderedList>
        </div>
      </div>
    </Section>
  );
}
