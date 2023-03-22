import { $, component$, useStore } from "@builder.io/qwik";

import { ActualPassword } from "../ui/composite/ActualPassword";
import { DocumentsTable } from "../ui/composite/DocumentsTable";
import { ChangePasswordForm } from "../ui/composite/ChangePasswordForm";
import { UserInformationForm } from "../ui/composite/UserInformationForm";
import { ButtonBackLobby } from "../ui/buttons/ButtonBackLobby";
import { ServicesCard } from "../cards/ServicesCard";
import { Button } from "../ui/buttons/Button";

type BannerProps = {
  imageSrc?: string;
  title: string;
  styles?: string;
  tabs1?: string;
  tabs2?: string;
  tabs3?: string;
  tabs4?: string;
};
type Handletabs1Fonction = () => void;
type Handletabs2Fonction = () => void;
type Handletabs3Fonction = () => void;
type Handletabs4Fonction = () => void;

type UserBannerStore = {
  tabs: {
    attributes: {
      tab1: {
        hidden: boolean;

        "aria-expanded": boolean;
      };
      tab2: {
        hidden: boolean;

        "aria-expanded": boolean;
      };
      tab3: {
        hidden: boolean;

        "aria-expanded": boolean;
      };
      tab4: {
        hidden: boolean;

        "aria-expanded": boolean;
      };
    };
  };
};

export const BannerProfile = component$((props: BannerProps) => {
  const styles = props.styles !== undefined ? props.styles : "";
  const store = useStore<UserBannerStore>(
    {
      tabs: {
        attributes: {
          tab1: {
            hidden: false,

            "aria-expanded": true,
          },
          tab2: {
            hidden: true,

            "aria-expanded": false,
          },
          tab3: {
            hidden: true,

            "aria-expanded": false,
          },
          tab4: {
            hidden: true,

            "aria-expanded": false,
          },
        },
      },
    },
    {
      deep: true,
    }
  );

  const handleTabs1$ = $<Handletabs1Fonction>(() => {
    store.tabs.attributes.tab1.hidden = false;

    store.tabs.attributes.tab1["aria-expanded"] = true;
    store.tabs.attributes.tab2.hidden = true;

    store.tabs.attributes.tab2["aria-expanded"] = false;
    store.tabs.attributes.tab3.hidden = true;

    store.tabs.attributes.tab3["aria-expanded"] = false;
    store.tabs.attributes.tab4.hidden = true;

    store.tabs.attributes.tab4["aria-expanded"] = false;
  });
  const handleTabs2$ = $<Handletabs2Fonction>(() => {
    store.tabs.attributes.tab2.hidden = false;

    store.tabs.attributes.tab2["aria-expanded"] = true;
    store.tabs.attributes.tab1.hidden = true;

    store.tabs.attributes.tab1["aria-expanded"] = false;
    store.tabs.attributes.tab3.hidden = true;

    store.tabs.attributes.tab3["aria-expanded"] = false;
    store.tabs.attributes.tab4.hidden = true;

    store.tabs.attributes.tab4["aria-expanded"] = false;
  });
  const handleTabs3$ = $<Handletabs3Fonction>(() => {
    store.tabs.attributes.tab3.hidden = false;
    store.tabs.attributes.tab3["aria-expanded"] = true;
    store.tabs.attributes.tab2.hidden = true;
    store.tabs.attributes.tab2["aria-expanded"] = false;
    store.tabs.attributes.tab1.hidden = true;
    store.tabs.attributes.tab1["aria-expanded"] = false;
    store.tabs.attributes.tab4.hidden = true;
    store.tabs.attributes.tab4["aria-expanded"] = false;
  });
  const handleTabs4$ = $<Handletabs4Fonction>(() => {
    store.tabs.attributes.tab4.hidden = false;
    store.tabs.attributes.tab4["aria-expanded"] = true;
    store.tabs.attributes.tab2.hidden = true;
    store.tabs.attributes.tab2["aria-expanded"] = false;
    store.tabs.attributes.tab3.hidden = true;
    store.tabs.attributes.tab3["aria-expanded"] = false;
    store.tabs.attributes.tab1.hidden = true;
    store.tabs.attributes.tab1["aria-expanded"] = false;
  });
  return (
    <>
      <header
        class={`bg-gradient-to-b from-[#5A0C69] w-auto flex flex-col ${styles} justify-center items-center to-[#0F3069] text-white md:h-[27rem]`}
        role="banner"
        id="header"
      >
        <img class={`w-[20rem] h-[20rem]`} src={props.imageSrc} alt="" />
        <h1 class={`text-white text-3xl text-center -mt-10 mb-10`}>{props.title}</h1>
        <ul class="md:flex justify-center text-center py-8 text-sm md:text-base" role="tablist">
          <li aria-label="Mes informations" role="presentation">
            <button
              onClick$={handleTabs1$}
              class="px-2 hover:bg-white hover:text-[#0B3168] hover:rounded md:px-5"
              id="informations-tab"
              type="button"
              role="tab"
              aria-controls="informations"
            >
              {props.tabs1}
            </button>
          </li>
          <li aria-label="Mot de passe" role="presentation">
            <button
              onClick$={handleTabs2$}
              class="px-2 hover:bg-white hover:text-[#0B3168] hover:rounded md:border-l-2 md:px-5"
              id="password-tab"
              type="button"
              role="tab"
              aria-controls="password"
            >
              {props.tabs2}
            </button>
          </li>
          <li aria-label="Mes documents" role="presentation">
            <button
              onClick$={handleTabs3$}
              class="px-2 hover:bg-white hover:text-[#0B3168] hover:rounded md:border-l-2 md:px-5"
              id="documents-tab"
              type="button"
              role="tab"
              aria-controls="documents"
            >
              {props.tabs3}
            </button>
          </li>
          <li aria-label="Mes QCM" role="presentation">
            <button
              onClick$={handleTabs4$}
              class="px-2 hover:bg-white hover:text-[#0B3168] hover:rounded md:border-l-2 md:px-5"
              id="QCM-tab"
              type="button"
              role="tab"
              aria-controls="QCM"
            >
              {props.tabs4}
            </button>
          </li>
        </ul>
      </header>
      <div class={`w-auto`}>
        <div {...store.tabs.attributes.tab1} id="informations" role="tabpanel" aria-labelledby="informations-tab">
          <ButtonBackLobby title="Mes informations" />
          <UserInformationForm />
        </div>
        <div {...store.tabs.attributes.tab2} id="password" role="tabpanel" aria-labelledby="password-tab">
          <ButtonBackLobby title="Mot de passe" />
          <span class="flex flex-col my-12 md:flex-row md:justify-center">
            <ActualPassword />
            <ChangePasswordForm />
          </span>
        </div>
        <div {...store.tabs.attributes.tab3} id="documents" role="tabpanel" aria-labelledby="documents-tab">
          <ButtonBackLobby title="Mes documents" />
          <DocumentsTable />
        </div>
        <div {...store.tabs.attributes.tab4} id="QCM" role="tabpanel" aria-labelledby="QCM-tab">
          <ButtonBackLobby title="Mes QCM" />
          <span
            class={`flex flex-col justify-center md:grid md:grid-cols-3 md:grid-rows-2 md:gap-10 mx-[2rem] md:mx-[8rem] md:mb-[5rem]`}
          >
            <ServicesCard
              image="/images/logo-formation.png"
              label="Description"
              title="QCM sur l'accessibilité numérique"
              styles="md:mx-[3rem]"
            >
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] text-[#0B3168] font-medium">
                <p class="border-r-2 px-5 ">Moyen</p>
                <p class="px-5">10 minutes</p>
              </span>
              <span q:slot="button" class="md:mt-[10rem] mt-[6rem] ml-[5rem] md:ml-[6rem]">
                <Button styles="" color="blue" href="/services" label="Jouer !" />
              </span>
            </ServicesCard>
            <ServicesCard
              image="/images/logo-formation.png"
              label="Description"
              title="QCM sur l'accessibilité numérique"
              styles="md:mx-[3rem]"
            >
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] text-[#0B3168] font-medium">
                <p class="border-r-2 px-5 ">Moyen</p>
                <p class="px-5">10 minutes</p>
              </span>
              <span q:slot="button" class="md:mt-[10rem] mt-[6rem] ml-[5rem] md:ml-[6rem]">
                <Button styles="" color="blue" href="/services" label="Jouer !" />
              </span>
            </ServicesCard>
            <ServicesCard
              image="/images/logo-formation.png"
              label="Description"
              title="QCM sur l'accessibilité numérique"
              styles="md:mx-[3rem]"
            >
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] text-[#0B3168] font-medium">
                <p class="border-r-2 px-5 ">Moyen</p>
                <p class="px-5">10 minutes</p>
              </span>
              <span q:slot="button" class="md:mt-[10rem] mt-[6rem] ml-[5rem] md:ml-[6rem]">
                <Button styles="" color="blue" href="/services" label="Jouer !" />
              </span>
            </ServicesCard>
            <ServicesCard
              image="/images/logo-formation.png"
              label="Description"
              title="QCM sur l'accessibilité numérique"
              styles="md:mx-[3rem]"
            >
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] text-[#0B3168] font-medium">
                <p class="border-r-2 px-5 ">Moyen</p>
                <p class="px-5">10 minutes</p>
              </span>
              <span q:slot="button" class="md:mt-[10rem] mt-[6rem] ml-[5rem] md:ml-[6rem]">
                <Button styles="" color="blue" href="/services" label="Jouer !" />
              </span>
            </ServicesCard>
            <ServicesCard
              image="/images/logo-formation.png"
              label="Description"
              title="QCM sur l'accessibilité numérique"
              styles="md:mx-[3rem]"
            >
              <p q:slot="content" class="text-[#0B3168]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aperiam amet fuga, obcaecati ratione
                optio, modi nostrum magnam tenetur assumenda labore aliquam accusamus nemo hic corporis consequatur
                autem! Molestias, facilis?
              </p>
              <span q:slot="services" class="flex justify-center text-[12px] text-[#0B3168] font-medium">
                <p class="border-r-2 px-5 ">Moyen</p>
                <p class="px-5">10 minutes</p>
              </span>
              <span q:slot="button" class="md:mt-[10rem] mt-[6rem] ml-[5rem] md:ml-[6rem]">
                <Button styles="" color="blue" href="/services" label="Jouer !" />
              </span>
            </ServicesCard>
          </span>
        </div>
      </div>
    </>
  );
});
