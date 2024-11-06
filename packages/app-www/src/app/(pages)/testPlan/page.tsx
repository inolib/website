"use client";

import { useEffect, useState } from "react";

import { fetchPlan } from "~/app/utils/fetchPolicy";
import { Link } from "~/components/app";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { UnorderedList, UnorderedListItem } from "~/components/list";
import { Section } from "~/components/section";

const Page = () => {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    /**
     *
     */
    async function loadData() {
      try {
        const data = await fetchPlan();
        setPlan(data);
      } catch (error) {
        console.error("Error loading plan:", error);
      }
    }
    loadData();
  }, []);

  if (!plan) return <p>Loading...</p>;

  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>{plan.Titre || "Plan du site"}</HeadingContent>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <nav aria-label="Plan du site">
        <UnorderedList className="flex flex-col gap-2">
          {plan.lien.map((item) =>
            item.titre && item.lien ? (
              <UnorderedListItem key={item.id}>
                <Link href={item.lien}>{item.titre}</Link>
              </UnorderedListItem>
            ) : null,
          )}
        </UnorderedList>
      </nav>
    </Section>
  );
};

export default Page;
