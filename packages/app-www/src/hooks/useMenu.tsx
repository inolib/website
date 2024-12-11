import type { ReactNode } from "react";

import Building01Icon from "#/images/icons/building-01.svg";
import FileCheck02Icon from "#/images/icons/file-check-02.svg";
import RouteIcon from "#/images/icons/route.svg";
import Tool02Icon from "#/images/icons/tool-02.svg";
import UsersCheckIcon from "#/images/icons/users-check.svg";

export type Menu = Array<MenuLink | MenuSubmenu>;

export type MenuLink = {
  label: string;
  href: string;
  submenu?: never;
};

export type MenuSubmenu = {
  label: string;
  segment: string;
  submenu: Array<
    | {
        icon: ReactNode;
        label: string;
        href: string;
        description?: never;
      }
    | {
        label: string;
        description: string;
        href: string;
        icon?: never;
      }
  >;
  href?: never;
};

export const useMenu = (): Menu => [
  {
    label: "Audit",
    segment: "/audit",
    submenu: [
      // {
      //   label: "Accueil de l’audit",
      //   description: "Découvrez nos offres d’audit",
      //   href: "/audit",
      // },
      {
        icon: <FileCheck02Icon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Audits d’accessibilité",
        href: "/audit/audits-accessibilite",
      },
      {
        icon: <UsersCheckIcon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Tests utilisateurs",
        href: "/audit/tests-utilisateurs",
      },
    ],
  },
  {
    label: "Accompagnement",
    segment: "/accompagnement",
    submenu: [
      // {
      //   label: "Accueil de l’accompagnement",
      //   description: "Découvrez nos offres d’accompagnement",
      //   href: "/accompagnement",
      // },
      {
        icon: <RouteIcon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Pilotage de projet",
        href: "/accompagnement/pilotage-de-projet",
      },
      {
        icon: <Tool02Icon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Accompagnement technique",
        href: "/accompagnement/accompagnement-technique",
      },
    ],
  },
  {
    label: "Développement",
    segment: "/developpement",
    submenu: [
      {
        label: "Développement web et mobile",
        description: "Découvrez nos offres de développement",
        href: "/developpement",
      },
      {
        icon: <Building01Icon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Sites vitrines et institutionnels",
        href: "/developpement/sites-vitrines-et-institutionnels",
      },
    ],
  },
  {
    label: "Formations",
    href: "/formations",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
];
