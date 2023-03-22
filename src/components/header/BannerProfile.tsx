import { $, component$, useStore } from "@builder.io/qwik";

import { ActualPassword } from "../ui/composite/ActualPassword";
import { DocumentsTable } from "../ui/composite/DocumentsTable";
import { ChangePasswordForm } from "../ui/composite/ChangePasswordForm";
import { UserInformationForm } from "../ui/composite/UserInformationForm";

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
      };
      tab2: {
        hidden: boolean;
      };
      tab3: {
        hidden: boolean;
      };
      tab4: {
        hidden: boolean;
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
          },
          tab2: {
            hidden: true,
          },
          tab3: {
            hidden: true,
          },
          tab4: {
            hidden: true,
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
    store.tabs.attributes.tab2.hidden = true;
    store.tabs.attributes.tab3.hidden = true;
    store.tabs.attributes.tab4.hidden = true;
  });
  const handleTabs2$ = $<Handletabs2Fonction>(() => {
    store.tabs.attributes.tab2.hidden = false;
    store.tabs.attributes.tab1.hidden = true;
    store.tabs.attributes.tab3.hidden = true;
    store.tabs.attributes.tab4.hidden = true;
  });
  const handleTabs3$ = $<Handletabs3Fonction>(() => {
    store.tabs.attributes.tab3.hidden = false;
    store.tabs.attributes.tab2.hidden = true;
    store.tabs.attributes.tab1.hidden = true;
    store.tabs.attributes.tab4.hidden = true;
  });
  const handleTabs4$ = $<Handletabs4Fonction>(() => {
    store.tabs.attributes.tab4.hidden = false;
    store.tabs.attributes.tab2.hidden = true;
    store.tabs.attributes.tab3.hidden = true;
    store.tabs.attributes.tab1.hidden = true;
  });
  return (
    <>
      <header
        class={`bg-gradient-to-b from-[#5A0C69] flex flex-col w-screen ${styles} justify-center items-center to-[#0F3069] text-white md:h-[27rem]`}
        role="banner"
        id="header"
      >
        <img class={`w-[20rem] h-[20rem]`} src={props.imageSrc} alt="" />
        <h1 class={`text-white text-3xl text-center -mt-10 mb-10`}>{props.title}</h1>
        <ul class="flex justify-center z-40 py-8 text-sm md:text-base" role="tablist">
          <li aria-label="Mes informations" role="presentation">
            <button
              onClick$={handleTabs1$}
              class="px-2 hover:bg-white hover:text-[#0B3168] hover:rounded md:px-5"
              id="informations-tab"
              type="button"
              role="tab"
              aria-controls="informations"
              aria-selected="false"
              aria-expanded="false"
            >
              {props.tabs1}
            </button>
          </li>
          <li aria-label="Mot de passe" role="presentation">
            <button
              onClick$={handleTabs2$}
              class="px-2 hover:bg-white hover:text-[#0B3168] hover:rounded border-l-2 md:px-5"
              id="password-tab"
              type="button"
              role="tab"
              aria-controls="password"
              aria-selected="false"
              aria-expanded="false"
            >
              {props.tabs2}
            </button>
          </li>
          <li aria-label="Mes documents" role="presentation">
            <button
              onClick$={handleTabs3$}
              class="px-2 hover:bg-white hover:text-[#0B3168] hover:rounded border-l-2 md:px-5"
              id="documents-tab"
              type="button"
              role="tab"
              aria-controls="documents"
              aria-selected="false"
              aria-expanded="false"
            >
              {props.tabs3}
            </button>
          </li>
          <li aria-label="Mes QCM" role="presentation">
            <button
              onClick$={handleTabs4$}
              class="px-2 hover:bg-white hover:text-[#0B3168] hover:rounded border-l-2 md:px-5"
              id="QCM-tab"
              type="button"
              role="tab"
              aria-controls="QCM"
              aria-selected="false"
              aria-expanded="false"
            >
              {props.tabs4}
            </button>
          </li>
        </ul>
      </header>
      <div>
        <div {...store.tabs.attributes.tab1} id="informations" role="tabpanel" aria-labelledby="informations-tab">
          <UserInformationForm />
        </div>
        <div {...store.tabs.attributes.tab2} id="password" role="tabpanel" aria-labelledby="password-tab">
          <ChangePasswordForm />
          <ActualPassword />
        </div>
        <div {...store.tabs.attributes.tab3} id="documents" role="tabpanel" aria-labelledby="documents-tab">
          <DocumentsTable />
        </div>
        <div {...store.tabs.attributes.tab4} id="QCM" role="tabpanel" aria-labelledby="QCM-tab">
          TAB4
        </div>
      </div>
    </>
  );
});
