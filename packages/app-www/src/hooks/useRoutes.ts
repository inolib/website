export type Routes = Record<
  string,
  {
    isActive: boolean;
    title: string;
  }
>;

export const useRoutes = (): Routes => ({
  "/testPlan": {
    isActive: true,
    title: "test",
  },
  "/Apropos": {
    isActive: true,
    title: "Apropos",
  },
  "/testMention": {
    isActive: true,
    title: "testMention",
  },
  "/test": {
    isActive: true,
    title: "test",
  },
  "/": {
    isActive: true,
    title: "Accueil",
  },
  "/a-propos": {
    isActive: true,
    title: "À propos",
  },
  "/accompagnement": {
    isActive: false,
    title: "Accompagnement",
  },
  "/accompagnement/accompagnement-de-projet": {
    isActive: true,
    title: "Accompagnement de projet",
  },
  "/accompagnement/accompagnement-technique": {
    isActive: true,
    title: "Accompagnement technique",
  },
  "/audit": {
    isActive: false,
    title: "Audit",
  },
  "/audit/audit-de-conformite": {
    isActive: true,
    title: "Audit de conformité",
  },
  "/audit/tests-utilisateurs": {
    isActive: true,
    title: "Tests utilisateurs",
  },
  "/blog": {
    isActive: true,
    title: "Blog",
  },
  "/contact": {
    isActive: true,
    title: "Contact",
  },
  "/contact/rendez-vous": {
    isActive: true,
    title: "Rendez-vous",
  },
  "/developpement": {
    isActive: true,
    title: "Développement web et mobile",
  },
  "/developpement/sites-vitrines-et-institutionnels": {
    isActive: true,
    title: "Sites vitrines et institutionnels",
  },
  "/inolib-academy": {
    isActive: true,
    title: "INOLIB Academy",
  },
  "/inolib-academy/certificat-qualiopi": {
    isActive: true,
    title: "Certificat Qualiopi",
  },
  "/mentions-legales": {
    isActive: true,
    title: "Mentions légales",
  },
  "/plan-du-site": {
    isActive: true,
    title: "Plan du site",
  },
  "/politique-de-confidentialite": {
    isActive: true,
    title: "Politique de confidentialité",
  },
});
