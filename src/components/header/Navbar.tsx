import { component$ } from "@builder.io/qwik";

type NavbarProps = {
  page: string;
};

export const Navbar = component$((props: NavbarProps) => {
  return (
    <>
      <nav>
        <a href="#contenu">Aller au contenu principal</a>
      </nav>

      <nav>
        <ul>
          <li>
            <a href="" aria-current={props.page === "home" ? "page" : ""} aria-label="Accueil">
              <img alt="" src="../../../public/images/logo-blue.svg" /> inolib
            </a>
          </li>
          <li>
            <a href="/actualites" aria-current={props.page === "actualites" ? "page" : ""}>
              Actualité
            </a>
          </li>
          <li>
            <a href="/accessibilite" aria-current={props.page === "accessibilite" ? "page" : ""}>
              Accessibilité
            </a>
          </li>
          <li>
            <a href="/presentation" aria-current={props.page === "presentation" ? "page" : ""}>
              Présentation
            </a>
          </li>
          <li>
            <a href="/services" aria-current={props.page === "services" ? "page" : ""}>
              Services
            </a>
          </li>
          <li>
            <a href="/temoignages" aria-current={props.page === "temoignes" ? "page" : ""}>
              Témoignes
            </a>
          </li>
          <li>
            <a href="/contact" aria-current={props.page === "contact" ? "page" : ""}>
              Contact
            </a>
          </li>
          <li>
            <a href="/connexion" aria-current={props.page === "connexion" ? "page" : ""}>
              Connexion
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
});
