import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { VariantProps } from "tailwind-variants";

import { fetchMembers } from "~/app/utils/fetchPolicy";
import { Heading, HeadingContent } from "~/components/heading";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col gap-24",
  },
  variants: {
    _color: {
      white: {
        sectionClassName: "bg-white",
      },
      "neutral-50": {
        sectionClassName: "bg-neutral-50",
      },
    },
  },
});

type Variants = VariantProps<typeof variants>;

type TeamProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Team = async ({ _color }: TeamProps) => {
  const { sectionClassName } = variants({ _color });

  const members = await fetchMembers();
  console.log("afficher les membres", members);

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Notre équipe</HeadingContent>
      </Heading>

      <div className="grid grid-cols-1 gap-16 self-center text-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {members.map((member) => (
          <div
            className="flex aspect-n flex-col items-center gap-4 rounded-t-full bg-blue-50 p-4 pt-12"
            key={member.id}
          >
            {member.photoUrl ? (
              <img alt="" className="size-24 rounded-full object-cover" src={member.photoUrl} />
            ) : (
              <div className="from-blue-500 flex size-24 items-center justify-center rounded-full bg-gradient-to-br to-blue-600 text-white">
                <span className="text-2xl font-bold">
                  {member.Nom.split(" ")
                    .map((name) => name[0])
                    .join("")}
                </span>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <h3 className="text-gray-900 text-xl font-bold">{member.Nom}</h3>
              {member.Role && <p className="font-medium text-blue-600">{member.Role}</p>}
            </div>

            {member.Description && <p className="text-gray-600">{member.Description}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
};
