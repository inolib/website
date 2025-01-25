export type Routes = Record<
  string,
  {
    isActive: boolean;
    title: string;
  }
>;

export const useRoutes = (): Routes => ({
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
  "/accompagnement/pilotage-de-projet": {
    isActive: true,
    title: "Pilotage de projet",
  },
  "/accompagnement/accompagnement-technique": {
    isActive: true,
    title: "Accompagnement technique",
  },
  "/audit": {
    isActive: false,
    title: "Audit",
  },
  "/audit/audits-accessibilite": {
    isActive: true,
    title: "Audits d’accessibilité",
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
  "/formations": {
    isActive: true,
    title: "Formations",
  },
  "/formations/certificat-qualiopi": {
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

// import { StrapiService } from "~/lib/api/strapi";
// import type { BlogPost } from "~/types/blog";

// export type Routes = Record<
//   string,
//   {
//     isActive: boolean;
//     title: string;
//   }
// >;

// export const useRoutes = async (): Promise<Record<string, { isActive: boolean; title: string }>> => {
//   const baseRoutes = {
//     "/": {
//       isActive: true,
//       title: "Accueil",
//     },
//     "/a-propos": {
//       isActive: true,
//       title: "À propos",
//     },
//     "/accompagnement": {
//       isActive: false,
//       title: "Accompagnement",
//     },
//     "/accompagnement/pilotage-de-projet": {
//       isActive: true,
//       title: "Pilotage de projet",
//     },
//     "/accompagnement/accompagnement-technique": {
//       isActive: true,
//       title: "Accompagnement technique",
//     },
//     "/audit": {
//       isActive: false,
//       title: "Audit",
//     },
//     "/audit/audits-accessibilite": {
//       isActive: true,
//       title: "Audits d’accessibilité",
//     },
//     "/audit/tests-utilisateurs": {
//       isActive: true,
//       title: "Tests utilisateurs",
//     },
//     "/blog": {
//       isActive: true,
//       title: "Blog",
//     },
//     "/contact": {
//       isActive: true,
//       title: "Contact",
//     },
//     "/contact/rendez-vous": {
//       isActive: true,
//       title: "Rendez-vous",
//     },
//     "/developpement": {
//       isActive: true,
//       title: "Développement web et mobile",
//     },
//     "/developpement/sites-vitrines-et-institutionnels": {
//       isActive: true,
//       title: "Sites vitrines et institutionnels",
//     },
//     "/formations": {
//       isActive: true,
//       title: "Formations",
//     },
//     "/formations/certificat-qualiopi": {
//       isActive: true,
//       title: "Certificat Qualiopi",
//     },
//     "/mentions-legales": {
//       isActive: true,
//       title: "Mentions légales",
//     },
//     "/plan-du-site": {
//       isActive: true,
//       title: "Plan du site",
//     },
//     "/politique-de-confidentialite": {
//       isActive: true,
//       title: "Politique de confidentialité",
//     },
//   };

//   const dynamicRoutes: Record<string, { isActive: boolean; title: string }> = {};

//   try {
//     // Récupération des articles depuis l'API
//     const posts = (await StrapiService.getBlogPosts("*")) as BlogPost[];
//     for (const post of posts) {
//       dynamicRoutes[`/blog/${post.slug}`] = {
//         isActive: true,
//         title: post.title,
//       };
//     }
//   } catch (error) {
//     console.error("Erreur lors de la génération des routes dynamiques :", error);
//   }

//   return { ...baseRoutes, ...dynamicRoutes };
// };
