import type { Metadata } from "next";
import { Children } from "react";

import { fetchMention } from "~/app/utils/fetchPolicy";
import { Link } from "~/components/app";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Mentions légales | INOLIB",
};

/**
 * Fetch et affichage de la page  mentions-legales .
 */
export default async function Page() {
  const MentionLegale = await fetchMention();

  const { titre, introduction, list = [], contactInfo } = MentionLegale;

  return (
    <>
      <Section className="flex flex-col gap-24">
        <TwoColumnsFlexLayout>
          <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
            <Heading _alignment="left" _size="4xl">
              <HeadingContent _level={1}>{titre}</HeadingContent>
            </Heading>
          </TwoColumnsFlexLayoutColumn>

          <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
        </TwoColumnsFlexLayout>

        <div className="flex max-w-prose flex-col gap-8">
          {introduction.map((item, index) => (
            <p key={index}>{item.children[0].text}</p>
          ))}

          <div className="flex flex-col gap-4">
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={2}>Éditeur du site</HeadingContent>
            </Heading>

            <div>
              {contactInfo.map((contact, index) => (
                <div key={index}>
                  <p> {contact.Societe}</p>
                  <p> {contact.SIRET}</p>
                  <p> {contact.Responsable}</p>
                  <p> {contact.forme}</p>
                  <p> {contact.adressePostale}</p>
                  <p> {contact.Immatriculation}</p>
                  <p> {contact.Tva}</p>
                  <p> {contact.numero}</p>
                  <p> {contact.adresseEmail}</p>
                </div>
              ))}
            </div>
          </div>
          {list.map((listItem, index) => (
            <div className="flex flex-col gap-4" key={index}>
              {listItem.ListItem.map((item, idx) => (
                <div key={idx}>
                  {item.type === "heading" ? (
                    <Heading _alignment="left" _size="2xl">
                      <HeadingContent _level={item.level}>{item.children[0].text}</HeadingContent>
                    </Heading>
                  ) : item.type === "paragraph" ? (
                    <p>{item.children[0].text}</p>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
