import Image from "next/image";
import { ThreeColumnsFlexLayout, ThreeColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import inolibYellowLogo from "#/images/logos/inolib/inolib-yellow.svg?url";
import FacebookLogo from "#/images/logos/social-networks/facebook.svg";
import LinkedInLogo from "#/images/logos/social-networks/linkedin.svg";
import XLogo from "#/images/logos/social-networks/x.svg";
import YouTubeLogo from "#/images/logos/social-networks/youtube.svg";
import { fetchFooterData } from "~/app/utils/fetchPolicy";

export const ContentInfoTest = async () => {
  const footerData = await fetchFooterData();

  // Transformation des données pour le menu et les réseaux sociaux
  const menu = footerData[0].sites.map((site) => ({
    label: site.sousLiens.trim(),
    href: site.Titre,
  }));

  const socialNetworks = [
    {
      label: "Facebook",
      href: footerData[0].reseau.find((reseau) => reseau.sousLiens.toLowerCase() === "facebook")?.Titre,
      icon: (
        <FacebookLogo
          aria-label="Facebook"
          className="size-8 fill-white transition-all duration-300 group-hover/link:fill-[#0766FF]"
        />
      ),
    },
    {
      label: "LinkedIn",
      href: footerData[0].reseau.find((reseau) => reseau.sousLiens.toLowerCase() === "linkdin")?.Titre,
      icon: (
        <LinkedInLogo
          aria-label="LinkedIn"
          className="size-8 fill-white transition-all duration-300 group-hover/link:fill-[#0B66C2]"
        />
      ),
    },
    {
      label: "X",
      href: footerData[0].reseau.find((reseau) => reseau.sousLiens.toLowerCase() === "x")?.Titre,
      icon: (
        <XLogo
          aria-label="X"
          className="size-8 fill-white transition-all duration-300 group-hover/link:fill-black"
        />
      ),
    },
    {
      label: "YouTube",
      href: footerData[0].reseau.find((reseau) => reseau.sousLiens.toLowerCase() === "youtube")?.Titre,
      icon: (
        <YouTubeLogo
          aria-label="YouTube"
          className="size-8 fill-white transition-all duration-300 group-hover/link:fill-[#FF0000]"
        />
      ),
    },
  ];

  return (
    <footer role="contentinfo">
      <Section className="flex flex-col gap-16 bg-blue-950 pb-4 font-normal text-blue-300 first-of-type:pt-24">
        <ThreeColumnsFlexLayout className="items-center">
          <ThreeColumnsFlexLayoutColumn className="flex flex-col">
            <nav aria-label="Menu de pied de page">
              <ul className="flex flex-col justify-between gap-4">
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link
                      _color="transparent"
                      _shape="link"
                      className="text-left text-blue-300 focus-visible:outline-blue-300"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ThreeColumnsFlexLayoutColumn>

          <ThreeColumnsFlexLayoutColumn className="flex flex-col items-center justify-between gap-16">
            <div className="flex flex-col items-center gap-4">
              <p>Suivez-nous !</p>

              <ul aria-label="Réseaux sociaux" className="flex gap-4">
                {socialNetworks.map((item, index) => (
                  <li key={index}>
                    <Link
                      _color="transparent"
                      _shape="button"
                      className="group/link p-2 transition-all duration-300 hover:bg-white focus-visible:outline-white"
                      href={item.href}
                      title={item.label}
                    >
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ThreeColumnsFlexLayoutColumn>

          <ThreeColumnsFlexLayoutColumn className="flex justify-end">
            <div className="flex flex-col gap-4">
              <Link
                _color="transparent"
                _shape="link"
                className="h-24 w-auto focus-visible:outline-white"
                href={footerData[0].lienQualiopi}
                title="Certificat Qualiopi"
              >
                <Image
                  alt="Certificat Qualiopi"
                  className="size-full"
                  height={footerData[0].imageQualiopi.height}
                  src={footerData[0].imageQualiopi.url}
                  width={footerData[0].imageQualiopi.width}
                />
              </Link>

              <p className="max-w-40 text-xs">{footerData[0].textQualiopi}</p>
            </div>
          </ThreeColumnsFlexLayoutColumn>
        </ThreeColumnsFlexLayout>

        <p className="self-center text-center md:hidden">Accessibilité : totalement accessible</p>

        <div className="flex items-end justify-between gap-8">
          <Image alt="" className="h-8 w-fit" src={inolibYellowLogo} />

          <p className="hidden md:block">Accessibilité : totalement accessible</p>

          <p>© 2024 INOLIB</p>
        </div>
      </Section>
    </footer>
  );
};
