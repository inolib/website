import type { Metadata } from "next";

import { Link } from "~/components/app";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { UnorderedList, UnorderedListItem } from "~/components/list";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Politique de confidentialité</HeadingContent>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <div className="flex max-w-prose flex-col gap-8">
        <p>
          La présente politique de confidentialité décrit la manière dont INOLIB collecte, utilise et protège les
          informations personnelles que vous fournissez lorsque vous utilisez notre site web. INOLIB s’engage à protéger
          votre vie privée. Si nous vous demandons de fournir certaines informations permettant de vous identifier lors
          de l’utilisation de ce site, soyez assuré qu’elles ne seront utilisées que conformément à cette politique de
          confidentialité.
        </p>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Article 1 : Collecte des informations</HeadingContent>
          </Heading>

          <p>Nous pouvons collecter les informations suivantes :</p>

          <UnorderedList className="-mt-4">
            <UnorderedListItem>nom et prénom ;</UnorderedListItem>
            <UnorderedListItem>coordonnées, y compris adresse e-mail et numéro de téléphone ;</UnorderedListItem>
            <UnorderedListItem>
              informations démographiques, telles que le code postal, les préférences, et les intérêts ;
            </UnorderedListItem>
            <UnorderedListItem>autres informations pertinentes pour les enquêtes et les offres.</UnorderedListItem>
          </UnorderedList>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Article 2 : Utilisation des informations</HeadingContent>
          </Heading>

          <p>
            Nous avons besoin de ces informations pour comprendre vos besoins et vous fournir un meilleur service,
            notamment pour les raisons suivantes :
          </p>

          <UnorderedList className="-mt-4">
            <UnorderedListItem>tenue de dossiers internes ;</UnorderedListItem>
            <UnorderedListItem>amélioration de nos produits et services ;</UnorderedListItem>
            <UnorderedListItem>
              envoi occasionnel de courriels promotionnels sur les nouveaux produits, les offres spéciales ou d’autres
              informations susceptibles de vous intéresser, en utilisant l’adresse e-mail que vous avez fournie ;
            </UnorderedListItem>
            <UnorderedListItem>
              utilisation des informations à des fins d’étude de marché pour adapter le site web selon vos intérêts.
            </UnorderedListItem>
          </UnorderedList>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Article 3 : Sécurité</HeadingContent>
          </Heading>

          <p>
            Nous nous engageons à assurer la sécurité de vos informations. Afin de prévenir l’accès non autorisé ou la
            divulgation, nous avons mis en place des procédures physiques, électroniques et managériales appropriées
            pour protéger et sécuriser les informations que nous recueillons en ligne.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Article 4 : Utilisation des cookies</HeadingContent>
          </Heading>

          <p>
            Un cookie est un petit fichier qui demande la permission d’être placé sur le disque dur de votre ordinateur.
            Une fois accepté, le fichier est ajouté et le cookie permet d’analyser le trafic web ou vous informe lorsque
            vous visitez un site particulier. Les cookies permettent aux applications web de vous répondre en tant
            qu’individu. L’application web peut adapter son fonctionnement à vos besoins, goûts et dégoûts en
            recueillant et mémorisant des informations sur vos préférences.
          </p>

          <p>
            INOLIB utilise des cookies pour identifier les pages utilisées et analyser le trafic. Cela nous aide à
            améliorer notre site web afin qu’il réponde mieux aux besoins des utilisateurs. Les données recueillies sont
            utilisées uniquement à des fins d’analyse statistique et sont ensuite supprimées de notre système.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Article 5 : Liens vers d’autres sites</HeadingContent>
          </Heading>

          <p>
            Notre site web peut contenir des liens vers d’autres sites d’intérêt. Cependant, une fois que vous avez
            utilisé ces liens pour quitter notre site, veuillez noter que nous n’avons aucun contrôle sur cet autre
            site. Par conséquent, nous ne pouvons pas être tenus responsables de la protection et de la confidentialité
            des informations que vous fournissez en visitant ces sites, et ces sites ne sont pas régis par la présente
            politique de confidentialité.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Article 6 : Contrôle de vos informations personnelles</HeadingContent>
          </Heading>

          <p>
            Vous pouvez choisir de restreindre la collecte ou l’utilisation de vos informations personnelles de la
            manière suivante : si vous avez précédemment accepté que nous utilisions vos informations personnelles à des
            fins de marketing direct, vous pouvez changer d’avis à tout moment en nous contactant par e-mail ou par
            courrier à l’adresse indiquée sur notre site web.
          </p>

          <p>
            Nous ne vendrons, ne distribuerons ni ne louerons vos informations personnelles à des tiers, sauf si nous
            avons votre permission ou si la loi l’exige. Nous pouvons utiliser vos informations personnelles pour vous
            envoyer des informations promotionnelles sur des tiers qui, selon nous, pourraient vous intéresser, si vous
            nous indiquez que vous souhaitez que cela se produise.
          </p>

          <p>
            Vous pouvez demander des détails sur les informations personnelles que nous détenons à votre sujet en vertu
            du Règlement général sur la protection des données (RGPD). Si vous souhaitez obtenir une copie des
            informations détenues à votre sujet, veuillez nous contacter à l’adresse e-mail ou postale indiquée sur
            notre site web.
          </p>

          <p>
            Si vous pensez que les informations que nous détenons à votre sujet sont incorrectes ou incomplètes,
            veuillez nous contacter dès que possible à l’adresse e-mail ou postale indiquée sur notre site web. Nous
            corrigerons rapidement toute information jugée incorrecte.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Article 7 : Mise à jour de la politique de confidentialité</HeadingContent>
          </Heading>

          <p>
            INOLIB se réserve le droit de modifier cette politique de confidentialité à tout moment. Les changements
            seront affichés sur cette page, et votre utilisation du site après toute modification indiquera votre
            acceptation de ces modifications. Nous vous encourageons à consulter régulièrement cette politique de
            confidentialité pour vous assurer que vous êtes informé de la manière dont nous protégeons vos informations.
          </p>

          <p>
            Si vous avez des questions concernant notre politique de confidentialité, n’hésitez pas à nous contacter à
            l’adresse e-mail ou postale indiquée sur notre site web :
          </p>

          <UnorderedList className="-mt-4">
            <UnorderedListItem>
              adresse e-mail : <Link href="mailto:contact@inolib.com">contact@inolib.com</Link> ;
            </UnorderedListItem>
            <UnorderedListItem>
              adresse postale : <Link href="https://maps.app.goo.gl/Qbw96fkcBgLsKqUr5">254 rue Vendôme 69003 Lyon</Link>
              .
            </UnorderedListItem>
          </UnorderedList>
        </div>
      </div>
    </Section>
  );
};

export default Page;
