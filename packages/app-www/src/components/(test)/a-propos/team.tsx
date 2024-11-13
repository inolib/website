"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { fetchMembers } from "~/app/utils/fetchPolicy";
import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

import type { VariantProps } from "tailwind-variants";

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

export const Team = ({ _color }: TeamProps) => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { sectionClassName } = variants({ _color });

  useEffect(() => {
    async function loadMembers() {
      try {
        setIsLoading(true);
        const data = await fetchMembers();
        setMembers(data);
      } catch (error_) {
        setError("Failed to load members");
      } finally {
        setIsLoading(false);
      }
    }

    loadMembers();
  }, []);

  if (isLoading) {
    return (
      <Section className={`py-16 ${sectionClassName}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin size-8 text-blue-600" />
          </div>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section className={`py-16 ${sectionClassName}`}>
        <div className="container mx-auto px-4">
          <p className="text-center text-red-600">{error}</p>
        </div>
      </Section>
    );
  }

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
              <img src={member.photoUrl} alt="" className="h-24 w-24 rounded-full object-cover" />
            ) : (
              <div className="from-blue-500 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br to-blue-600 text-white">
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
