import { MenuBar, MenuBarList, MenuBarListItem } from "~/components/headless";
import { useMenu } from "~/hooks";

import { MainNavLink } from "./MainNavLink";
import { MainNavSubmenu } from "./MainNavSubmenu";

export const MainNav = () => {
  const menu = useMenu();

  return (
    <MenuBar aria-label="Menu principal">
      <MenuBarList className="flex items-center gap-4">
        {menu.map((item, index) => (
          <MenuBarListItem key={index}>
            {item.submenu === undefined ? <MainNavLink _link={item} /> : <MainNavSubmenu _submenu={item} />}
          </MenuBarListItem>
        ))}
      </MenuBarList>
    </MenuBar>
  );
};
