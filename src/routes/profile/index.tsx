import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { Tabs, TabsTabs, TabsPanels, TabsPanel, TabsTab } from "@inolib/ui";
import { ServicesCard } from "~/components/cards/ServicesCard";
import { Button } from "~/components/ui/buttons/Button";
import { ButtonBackLobby } from "~/components/ui/buttons/ButtonBackLobby";
import { ActualPassword } from "~/components/ui/composite/ActualPassword";
import { ChangePasswordForm } from "~/components/ui/composite/ChangePasswordForm";
import { DocumentsTable } from "~/components/ui/composite/DocumentsTable";
import { UserInformationForm } from "~/components/ui/composite/UserInformationForm";

const tabs = [
  { id: "1", name: "Mes informations", selected: true, controls: "1", label: "Mes informations" },
  { id: "2", name: "Mot de passe", selected: false, controls: "2", label: "Mot de passe" },
  { id: "3", name: "Mes documents", selected: false, controls: "3", label: "Mes documents" },
  { id: "4", name: "QCM", selected: false, controls: "4", label: "QCM" },
];

export default component$(() => {
  return (
    <>
      <Tabs>
        <header
          class={`flex w-auto flex-col bg-gradient-to-b from-[#5A0C69] items-center justify-center to-[#0F3069] text-white md:h-[27rem]`}
          role="banner"
          id="header"
        >
          <img class={`h-[20rem] w-[20rem]`} src="/images/userLogo.png" alt="" />
          <h1 class={`-mt-10 mb-10 text-center text-3xl text-white`}>MY FAKE COMPAGNY</h1>
          <ul class="justify-center py-8 text-center flex text-sm  md:text-base" role="tablist">
            <TabsTabs styles="md:flex">
              {tabs.map((tabs) => (
                <TabsTab
                  styles={`px-2 hover:bg-white hover:text-[#0B3168] hover:rounded md:px-5`}
                  controls={tabs.controls}
                  selected={tabs.selected}
                  aria-label={tabs.label}
                  key={tabs.id}
                >
                  {tabs.name}
                </TabsTab>
              ))}
            </TabsTabs>
          </ul>
        </header>
        <div class={`w-auto`}>
          <TabsPanels>
            <TabsPanel id="1">
              <ButtonBackLobby title="Mes informations" />
              <UserInformationForm />
            </TabsPanel>
            <TabsPanel id="2">
              <ButtonBackLobby title="Mot de passe" />
              <span class="my-12 flex flex-col md:flex-row md:justify-center">
                <ActualPassword />
                <ChangePasswordForm />
              </span>
            </TabsPanel>
            <TabsPanel id="3">
              <ButtonBackLobby title="Mes documents" />
              <DocumentsTable />
            </TabsPanel>
            <TabsPanel id="4">
              <ButtonBackLobby title="Mes QCM" />
              <span
                class={`mx-[2rem] flex flex-col justify-center md:mx-[8rem] md:mb-[5rem] md:grid md:grid-cols-3 md:grid-rows-2 md:gap-10`}
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
                  <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
                    <p class="border-r-2 px-5 ">Moyen</p>
                    <p class="px-5">10 minutes</p>
                  </span>
                  <span q:slot="button" class="mt-[6rem] ml-[5rem] md:mt-[10rem] md:ml-[6rem]">
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
                  <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
                    <p class="border-r-2 px-5 ">Moyen</p>
                    <p class="px-5">10 minutes</p>
                  </span>
                  <span q:slot="button" class="mt-[6rem] ml-[5rem] md:mt-[10rem] md:ml-[6rem]">
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
                  <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
                    <p class="border-r-2 px-5 ">Moyen</p>
                    <p class="px-5">10 minutes</p>
                  </span>
                  <span q:slot="button" class="mt-[6rem] ml-[5rem] md:mt-[10rem] md:ml-[6rem]">
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
                  <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
                    <p class="border-r-2 px-5 ">Moyen</p>
                    <p class="px-5">10 minutes</p>
                  </span>
                  <span q:slot="button" class="mt-[6rem] ml-[5rem] md:mt-[10rem] md:ml-[6rem]">
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
                  <span q:slot="services" class="flex justify-center text-[12px] font-medium text-[#0B3168]">
                    <p class="border-r-2 px-5 ">Moyen</p>
                    <p class="px-5">10 minutes</p>
                  </span>
                  <span q:slot="button" class="mt-[6rem] ml-[5rem] md:ml-[6rem] md:mt-[10rem]">
                    <Button styles="" color="blue" href="/services" label="Jouer !" />
                  </span>
                </ServicesCard>
              </span>
            </TabsPanel>
          </TabsPanels>
        </div>
      </Tabs>
    </>
  );
});

export const head: DocumentHead = {
  title: "Profile",
};
