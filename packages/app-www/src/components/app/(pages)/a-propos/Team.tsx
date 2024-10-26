import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import Image from "next/image";
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
  const { sectionClassName } = variants({ _color });

  const team = [
    {
      photo: "/images/photos/team/djebrine-aloui.jpg",
      name: "Djebrine ALOUI",
      role: "Dirigeant et fondateur",
      description: "",
    },
    {
      photo: "/images/photos/team/aurore-mauve-voeltzel.jpg",
      name: "Aurore-Mauve VOELTZEL",
      role: "Développeuse économique",
      description: "",
    },
    {
      photo: "/images/photos/team/matthieu-meignan.jpg",
      name: "Matthieu MEIGNAN",
      role: "Directeur technique",
      description: "",
    },
    {
      photo: "/images/photos/team/nadjemati-abdallah.jpg",
      name: "Nadjemati ABDALLAH",
      role: "",
      description: "",
    },
    {
      name: "Amina HURIC",
      role: "",
      description: "",
    },
    {
      name: "Brice MENDEZ",
      role: "Développeur web",
      description: "",
    },
    {
      photo: "/images/photos/team/maria-grairi.jpg",
      name: "Maria GRAIRI",
      role: "Développeuse web",
      description: "",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Notre équipe</HeadingContent>
      </Heading>

      <div className="grid grid-cols-1 gap-16 self-center text-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {team.map((item, index) => (
          <div className="flex aspect-n flex-col items-center gap-4 rounded-t-full bg-blue-50 p-4 pt-12" key={index}>
            {item.photo === undefined ? (
              <Image
                alt=""
                className="size-24 rounded-full"
                height={96}
                src={createAvatar(initials, {
                  backgroundColor: ["254147"],
                  fontFamily: ["sans-serif"],
                  seed: item.name,
                }).toDataUri()}
                width={96}
              />
            ) : (
              <Image alt="" className="size-24 rounded-full" height={96} src={item.photo} width={96} />
            )}

            <div className="flex flex-col gap-2">
              <p className="font-bold">{item.name}</p>
              <p className="font-semibold text-blue-700">{item.role}</p>
            </div>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
