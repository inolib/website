import { component$ } from "@builder.io/qwik";

import { Tabs, TabsListItem, TabsPanels, TabsPanel, TabsItem } from "@inolib/ui";

const tabs = [
  { id: 1, name: "Mes informations", selected: true, panelId: 1 },
  { id: 2, name: "Mot de passe", selected: false, panelId: 2 },
  { id: 3, name: "Mes documents", selected: false, panelId: 3 },
  { id: 4, name: "QCM", selected: false, panelId: 4 },
];

console.log("tab name :", tabs.name);
console.log("tab id :", tabs.id);

export default component$(() => {
  return (
    <>
      <Tabs>
        <TabsListItem>
          {tabs.map((tabs) => (
            <TabsItem panelId={tabs.panelId} selected={tabs.selected} key={tabs.id}>
              {tabs.name}
            </TabsItem>
          ))}
        </TabsListItem>
        <TabsPanels>
          <TabsPanel id={1}>GG1</TabsPanel>
          <TabsPanel id={2}>GG2</TabsPanel>
          <TabsPanel id={3}>GG3</TabsPanel>
          <TabsPanel id={4}>GG4</TabsPanel>
        </TabsPanels>
      </Tabs>
    </>
  );
});
