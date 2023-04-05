import { component$ } from "@builder.io/qwik";

import { Tabs, TabsTabs, TabsPanels, TabsPanel, TabsTab } from "@inolib/ui";

const tabs = [
  { id: "1", name: "Mes informations", selected: true, controls: "1" },
  { id: "2", name: "Mot de passe", selected: false, controls: "2" },
  { id: "3", name: "Mes documents", selected: false, controls: "3" },
  { id: "4", name: "QCM", selected: false, controls: "4" },
];

export default component$(() => {
  return (
    <>
      <Tabs>
        <TabsTabs>
          {tabs.map((tabs) => (
            <TabsTab controls={tabs.controls} selected={tabs.selected} key={tabs.id}>
              {tabs.name}
            </TabsTab>
          ))}
        </TabsTabs>
        <TabsPanels>
          <TabsPanel id="1">GG1</TabsPanel>
          <TabsPanel id="2">GG2</TabsPanel>
          <TabsPanel id="3">GG3</TabsPanel>
          <TabsPanel id="4">GG4</TabsPanel>
        </TabsPanels>
      </Tabs>
    </>
  );
});
