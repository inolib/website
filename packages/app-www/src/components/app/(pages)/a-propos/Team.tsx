import { initials } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent } from "~/components/heading";
import LinkedInIcon from "~/components/icon/LinkedinIcon";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

// import LinkedInIcon from "#/images/logos/social-networks/linkedin.svg";

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

type TeamProps = {
  _color: NonNullable<Variants["_color"]>;
};

type Variants = VariantProps<typeof variants>;

export const Team = ({ _color }: TeamProps) => {
  const { sectionClassName } = variants({ _color });

  const team = [
    {
      photo: "/images/photos/team/djebrine-aloui.jpg",
      name: "Djebrine ALOUI",
      role: "Dirigeant et fondateur",
      socialNetworks: [
        {
          label: "Djebrine ALOUI sur LinkedIn",
          href: "https://www.linkedin.com/in/djebrinealoui",
          icon: (
            <LinkedInIcon
              aria-label="Djebrine ALOUI sur LinkedIn"
              className="size-8 fill-black transition-all duration-300 group-hover/link:fill-[#0B66C2]"
              key={0}
              clipPathId="Djebrine"
            />
          ),
        },
      ],
    },
    {
      photo: "/images/photos/team/aurore-mauve-voeltzel.jpg",
      name: "Aurore-Mauve VOELTZEL",
      role: "Responsable admin. et financière",
      socialNetworks: [
        {
          label: "Aurore-Mauve VOELTZEL sur LinkedIn",
          href: "https://www.linkedin.com/in/aurore-mauve-voeltzel-a23a1314",
          icon: (
            <LinkedInIcon
              aria-label="Aurore-Mauve VOELTZEL sur LinkedIn"
              className="size-8 fill-black transition-all duration-300 group-hover/link:fill-[#0B66C2]"
              key={0}
              clipPathId="Aurore"
            />
          ),
        },
      ],
    },
    // {
    //   photo: "/images/photos/team/matthieu-meignan.jpg",
    //   name: "Matthieu MEIGNAN",
    //   role: "Directeur technique",
    //   socialNetworks: [
    //     {
    //       label: "Matthieu MEIGNAN sur LinkedIn",
    //       href: "https://www.linkedin.com/in/matthieu-meignan-5b3756330",
    //       icon: (
    //         <LinkedInIcon
    //           aria-label="Matthieu MEIGNAN sur LinkedIn"
    //           className="size-8 fill-black transition-all duration-300 group-hover/link:fill-[#0B66C2]"
    //           key={0}
    //         />
    //       ),
    //     },
    //   ],
    // },
    // {
    //   photo: "/images/photos/team/nadjemati-abdallah.jpg",
    //   name: "Nadjemati ABDALLAH",
    //   role: "Chargée de communication",
    //   socialNetworks: [
    //     {
    //       label: "Nadjemati ABDALLAH sur LinkedIn",
    //       href: "https://www.linkedin.com/in/nadjemati-abdallah-2a57921a0",
    //       icon: (
    //         <LinkedInIcon
    //           aria-label="Nadjemati ABDALLAH sur LinkedIn"
    //           className="size-8 fill-black transition-all duration-300 group-hover/link:fill-[#0B66C2]"
    //           key={0}
    //         />
    //       ),
    //     },
    //   ],
    // },
    // {
    //   name: "Amina HURIC",
    //   role: "Assistante commerciale",
    //   socialNetworks: [
    //     {
    //       label: "Amina HURIC sur LinkedIn",
    //       href: "https://www.linkedin.com/in/amina-huric-331799252",
    //       icon: (
    //         <LinkedInIcon
    //           aria-label="Amina HURIC sur LinkedIn"
    //           className="size-8 fill-black transition-all duration-300 group-hover/link:fill-[#0B66C2]"
    //           key={0}
    //         />
    //       ),
    //     },
    //   ],
    // },
    {
      name: "Brice MENDEZ",
      role: "Développeur web",
      socialNetworks: [
        {
          label: "Brice MENDEZ sur LinkedIn",
          href: "https://www.linkedin.com/in/brice-m-6b844a2a1",
          icon: (
            <LinkedInIcon
              aria-label="Brice MENDEZ sur LinkedIn"
              className="size-8 fill-black transition-all duration-300 group-hover/link:fill-[#0B66C2]"
              key={0}
              clipPathId="Brice"
            />
          ),
        },
      ],
    },
    // {
    //   photo: "/images/photos/team/maria-grairi.jpg",
    //   name: "Maria GRAIRI",
    //   role: "Développeuse web",
    //   socialNetworks: [
    //     {
    //       label: "Maria GRAIRI sur LinkedIn",
    //       href: "https://www.linkedin.com/in/maria-grairi-787a8b136",
    //       icon: (
    //         <LinkedInIcon
    //           aria-label="Maria GRAIRI sur LinkedIn"
    //           className="size-8 fill-black transition-all duration-300 group-hover/link:fill-[#0B66C2]"
    //           key={0}
    //         />
    //       ),
    //     },
    //   ],
    // },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Notre équipe</HeadingContent>
      </Heading>

      <div className="grid grid-cols-1 gap-16 self-center text-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {team.map((item, index) => (
          <div className="flex aspect-n flex-col items-center gap-8 rounded-t-full px-8 py-16" key={index}>
            <div className="flex flex-col items-center gap-4">
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
                <p className="text-base font-semibold text-blue-700">{item.role}</p>
              </div>
            </div>

            <ul className="flex gap-4">
              {item.socialNetworks.map((item, index) => (
                <li key={index}>
                  <Link
                    _color="transparent"
                    _shape="button"
                    className="group/link p-2 transition-all duration-300 hover:bg-white focus-visible:outline-black"
                    href={item.href}
                    title={item.label}
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
