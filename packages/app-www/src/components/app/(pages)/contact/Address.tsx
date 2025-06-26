import { SquaredIcon } from "~/components/icon";
import { Link } from "~/components/link";

import Mail02Icon from "#/images/icons/mail-02.svg";
import MarkerPin01Icon from "#/images/icons/marker-pin-01.svg";
import PhoneIcon from "#/images/icons/phone.svg";

export const Address = () => {
  const address = [
    {
      icon: <Mail02Icon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "E-mail",
      content: (
        <Link
          _color="transparent"
          _shape="link"
          className="font-semibold text-blue-700 focus-visible:outline-blue-700"
          href="mailto:contact@inolib.com"
        >
          contact@inolib.com
        </Link>
      ),
    },
    {
      icon: <PhoneIcon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Téléphone",
      content: (
        <div className="flex flex-col gap-4">
          <p>
            <Link
              _color="transparent"
              _shape="link"
              className="font-semibold text-blue-700 focus-visible:outline-blue-700"
              href="tel:+33482530039"
            >
              04 82 53 00 39
            </Link>
          </p>

          <p>Horaires : du lundi au vendredi de 9 h à 18 h.</p>
        </div>
      ),
    },
    {
      icon: <MarkerPin01Icon className="size-6 stroke-yellow-500" aria-hidden />,
      title: "Adresse",
      content: (
        <Link
          _color="transparent"
          _shape="link"
          className="inline-block w-40 text-left font-semibold text-blue-700 focus-visible:outline-blue-700"
          href="https://maps.app.goo.gl/Qbw96fkcBgLsKqUr5"
        >
          254 rue Vendôme 69003 Lyon
        </Link>
      ),
    },
  ];

  return (
    <address className="flex flex-col gap-4 not-italic md:grid md:grid-cols-3 lg:flex lg:flex-col">
      {address.map((item, index) => (
        <div className="flex flex-col gap-4 rounded-3xl bg-blue-50 p-6" key={index}>
          <SquaredIcon className="size-12 bg-blue-900" aria-hidden>
            {item.icon}
          </SquaredIcon>

          <div>
            <p className="font-bold">{item.title}</p>
            {item.content}
          </div>
        </div>
      ))}
    </address>
  );
};
