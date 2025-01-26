import { Link } from "~/components/link";
import { useRoutesContext } from "~/context/RoutesContext";

import HomeLineIcon from "#/images/icons/home-line.svg";

export type BreadcrumbNavHomeProps = {
  _href: string;
};

export const BreadcrumbNavHome = ({ _href }: BreadcrumbNavHomeProps) => {
  const routes = useRoutesContext();

  return (
    <li className="flex items-center px-2 py-1">
      <Link
        _color="transparent"
        _shape="link"
        className="focus-visible:outline-black"
        href={_href}
        title={routes[_href].title}
      >
        <HomeLineIcon aria-label={routes[_href].title} className="size-[1.3125rem] stroke-black" />
      </Link>
    </li>
  );
};
