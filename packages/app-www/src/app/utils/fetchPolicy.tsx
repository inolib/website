import { interpolators } from "sharp";

/**
 *
 */
export async function fetchPolicyData() {
  const res = await fetch("http://strapi:1337/api/politique-de-confidentialite?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  console.log("fetched data", data);
  return data.data;
}

export const fetchValue = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";
  const res = await fetch("http://strapi:1337/api/valeurs?populate[list][populate][0]=image", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  const values = data.data[0];
  return {
    ...values,
    list:
      values.list.map((item) => ({
        ...item,
        imageUrl: item.image?.url ? `${apiUrl}${item.image.url}` : null,
      })) || [],
  };
};

/**
 *
 */
export async function fetchPlan() {
  const res = await fetch("http://strapi:1337/api/plan-du-site?populate[lien][populate][0]=sousLiens", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  console.log("fetched data", data);
  return data.data;
}
/**
 *
 */
export async function fetchMention() {
  const res = await fetch("http://strapi:1337/api/mention-legale?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  console.log("Données récupérées :", data);
  return data.data;
}
/**
 * Fetches the members of Inolib.
 * @returns The data of the members.
 * @throws Will throw an error if the fetch fails.
 */

/**
 *
 */
export async function fetchMembers() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";
  const res = await fetch("http://strapi:1337/api/membres?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }
  const data = await res.json();
  return data.data.map((member) => {
    console.log("voir membres", member);
    return {
      ...member,
      photoUrl: member.photo?.url ? `${apiUrl}${member.photo.url}` : null,
    };
  });
}

export const fetchCommit = async () => {
  const res = await fetch("http://strapi:1337/api/engagements?populate[list][populate][0]=image", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  return { ...data.data[0], list: data.data[0].list || [] };
};

export const fetchMission = async () => {
  const res = await fetch("http://strapi:1337/api/missions?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  return { ...data.data[0], list: data.data[0].list || [] };
};
export const fetchHeader = async () => {
  const res = await fetch("http://strapi:1337/api/intro-as?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  return { ...data.data[0], list: data.data[0].list || [] };
};

export const fetchQualiopi = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(`${apiUrl}/api/qualiopis?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  const qualiopi = data.data[0];

  return {
    ...qualiopi,
    list: qualiopi.list || [],
    imageUrl: qualiopi.image?.url ? `${apiUrl}${qualiopi.image.url}` : null,
  };
};
export const fetchTraining = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";
  const res = await fetch(
    `${apiUrl}/api/formations?populate[ListItems][populate][cles]=*&populate[ListItems][populate][image]=*`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch training data");
  }

  const data = await res.json();
  const courses = data.data[0];

  return {
    title: courses?.titre,
    introduction: courses?.introduction,
    listItems:
      courses?.ListItems?.map((item) => ({
        title: item?.titre,
        text: item?.text,
        imageUrl: item?.image?.url ? `${apiUrl}${item.image.url}` : null,
        highlights:
          item?.cles?.map((highlight) => ({
            title: highlight?.titre,
            description: highlight?.ListItem?.[0]?.children?.[0]?.text,
          })) || [],
      })) || [],
  };
};
export const fetchWhy = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";
  const res = await fetch(`${apiUrl}/api/inolib-academies?populate[list][populate][0]=image`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch training data");
  }

  const data = await res.json();
  const why = data.data[0];

  // Transformation des données pour le composant
  const transformedList = why.list.map((item) => ({
    title: item.ListItem.find((listItem) => listItem.type === "heading")?.children[0]?.text || "",
    description: item.ListItem.find((listItem) => listItem.type === "paragraph")?.children[0]?.text || "",
    imageUrl: item.image?.url ? `${apiUrl}${item.image.url}` : null,
  }));

  return transformedList;
};

export const fetchIntroFormation = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";
  const res = await fetch(`${apiUrl}/api/intro-formations?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch intro formation data");
  }

  const data = await res.json();
  const intro = data.data[0];

  return {
    title: intro.titre,
    text: intro.text,
    imageUrl: intro.image[0]?.url ? `${apiUrl}${intro.image[0].url}` : null,
  };
};
export const fetchEducationalApproach = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";
  const res = await fetch(`${apiUrl}/api/approche-pedagogiques?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch educational approach data");
  }

  const data = await res.json();
  const approach = data.data[0];

  return {
    title: approach.Titre,
    sections: [
      {
        title: approach.titre1,
        paragraph: approach.paragraph1,
      },
      {
        title: approach.titre2,
        paragraph: approach.paragraph2,
      },
    ],
  };
};

export const fetchApprochDev = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  // Appel pour l'image principale
  const resMain = await fetch(`${apiUrl}/api/approche-developments?populate=*`, {
    cache: "no-store",
  });

  if (!resMain.ok) {
    throw new Error("Failed to fetch main approach data");
  }

  const mainData = await resMain.json();
  const approach = mainData.data[0];

  // Appel pour les images des ListItems
  const resListItems = await fetch(`${apiUrl}/api/approche-developments?populate[ListItems][populate][0]=image`, {
    cache: "no-store",
  });

  if (!resListItems.ok) {
    throw new Error("Failed to fetch ListItems with images");
  }

  const listItemsData = await resListItems.json();
  const listItems = listItemsData.data[0]?.ListItems || [];

  // Combinaison des données
  return {
    title: approach.titre,
    description: approach.text,
    subTitle: approach.subTitre,
    image: approach.image?.url ? `${apiUrl}${approach.image.url}` : null,
    highlights: listItems.map((item: any) => ({
      title: item.titre,
      description: item.ListItem[0]?.children[0]?.text || "",
      image: item.image?.url ? `${apiUrl}${item.image.url}` : null,
    })),
  };
};
export const introDev = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(`${apiUrl}/api/intro-developments?populate=*`, { cache: "no-store" });

  const data = await res.json();
  if (!data || !data.data || data.data.length === 0) {
    throw new Error("No data available");
  }
  const intro = data.data[0];
  return {
    ...intro,
    image: intro.image?.url ? `${apiUrl}${intro.image.url}` : null,
  };
};

export const fetchServices = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(
    `${apiUrl}/api/service-developments?populate[ListItems][populate][cles][populate]=*&populate[ListItems][populate][image]=*`,
    { cache: "no-store" },
  );

  const data = await res.json();

  const services = data.data[0];

  return {
    title: services.titre,
    listItems: services.ListItems.map((item: any) => ({
      title: item.titre,
      highlights: item.cles.map((key: any) => ({
        title: key.titre,
        description: key.ListItem?.[0]?.children?.[0]?.text || "",
        icon: key.image?.url ? `${apiUrl}${key.image.url}` : null,
      })),
      illustration: item.image?.url ? `${apiUrl}${item.image.url}` : null,
    })),
  };
};

export const fetchWhyDev = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(`${apiUrl}/api/pourquoi-development?populate[ListItems][populate][0]=image`, {
    cache: "no-store",
  });

  const data = await res.json();

  const WhyDev = data.data;

  return {
    title: WhyDev.titre,
    text: WhyDev.text,
    listItems: WhyDev.ListItems.map((item: any) => ({
      title: item.titre,
      description: item.ListItem?.[0]?.children?.[0]?.text || "",
      icon: item.image?.url ? `${apiUrl}${item.image.url}` : null,
    })),
  };
};
export const fetchSite = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/intro-site-vitrines?populate=*", { cache: "no-store" });

  const data = await res.json();

  if (!data || !data.data || data.data.length === 0) {
    throw new Error("No data available");
  }
  const intro = data.data[0];
  return {
    ...intro,
    image: intro.image?.url ? `${apiUrl}${intro.image.url}` : null,
  };
};
export const fetchSiteVitrine = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/site-vitrine?populate=*", { cache: "no-store" });

  const data = await res.json();

  if (!data || !data.data || data.data.length === 0) {
    throw new Error("No data available");
  }
  const siteVitrine = data.data;

  return {
    ...siteVitrine,
    image: siteVitrine.image?.url ? `${apiUrl}${siteVitrine.image.url}` : null,
  };
};

export const fetchSiteInstit = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/Site-institutionnel?populate=*", { cache: "no-store" });
  const data = await res.json();

  console.log("API Response:", JSON.stringify(data, null, 2));

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const siteInstit = data.data;

  return {
    titre: siteInstit.titre,
    contenu: siteInstit.contenu,
    image: siteInstit.image?.url ? `${apiUrl}${siteInstit.image.url}` : null,
  };
};

export const fetchSteps = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/creation-site-institutionnel?populate=*", { cache: "no-store" });
  const data = await res.json();
  console.log("montre data", data);
  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const steps = data.data;
  console.log("montre les etapes", steps);
  return {
    titre: steps.titre,
    text: steps.text,
    contenu: steps.contenu || [],
  };
};
export const fetchGoFurther = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/plus-loin?populate=*", { cache: "no-store" });
  const data = await res.json();

  console.log("API Response:", JSON.stringify(data, null, 2));

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const goFurtherData = data.data;

  return {
    titre: goFurtherData.titre || "Titre non défini",
    contenu: goFurtherData.contenu || [],
  };
};
export const fetchIntroAccompagnement = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/intro-accompagnement?populate=*", { cache: "no-store" });
  const data = await res.json();

  console.log("API Response:", JSON.stringify(data, null, 2));

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const intro = data.data;

  return {
    titre: intro.titre,
    text: intro.text,
    image: intro.image?.url ? `${apiUrl}${intro.image.url}` : null,
  };
};
export const fetchStrategicSupport = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/accompagnement-strategique?populate=*", { cache: "no-store" });
  const data = await res.json();

  console.log("API Response:", JSON.stringify(data, null, 2));

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const strategicSupportData = data.data;

  return {
    titre: strategicSupportData.titre,
    image: strategicSupportData.image?.url ? `${apiUrl}${strategicSupportData.image.url}` : null,
    contenu: strategicSupportData.contenu,
  };
};
export const fetchOperational = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/accompagnement-operationnel?populate=*", { cache: "no-store" });
  const data = await res.json();

  console.log("API Response:", JSON.stringify(data, null, 2));

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const OperationalData = data.data;

  return {
    titre: OperationalData.titre,
    image: OperationalData.image?.url ? `${apiUrl}${OperationalData.image.url}` : null,
    contenu: OperationalData.contenu,
  };
};
export const fetchApproachAccompagnement = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/approche-accompagnement?populate=*", { cache: "no-store" });
  const data = await res.json();

  console.log("API Response:", JSON.stringify(data, null, 2));

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const ApproachData = data.data;
  console.log("montre data", ApproachData);

  return {
    titre1: ApproachData.titre1,
    titre2: ApproachData.titre2,
    text1: ApproachData.paraghraphe1,
    text2: ApproachData.paraghraphe2,
  };
};
export const fetchFurther = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/plus-loin-accompagnement?populate[contenu][populate][0]=icon", {
    cache: "no-store",
  });
  const data = await res.json();

  console.log("API Response:", JSON.stringify(data, null, 2));

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const goFurtherData = data.data;

  return {
    titre: goFurtherData.titre || "Titre non défini",
    contenu: goFurtherData.contenu || [],
  };
};
export const fetchIntroTechnique = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/intro-accompagnement-technique?populate=*", {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const introData = data.data;

  return {
    titre: introData.titre,
    text: introData.text,
    image: introData.image?.url ? `${apiUrl}${introData.image.url}` : null,
  };
};

export const fetchAuditA = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/audit-d-accessibilite?populate=*", {
    cache: "no-store",
  });
  const data = await res.json();

  console.log("intro technique:", data);

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const auditData = data.data;

  return {
    titre: auditData.titre,
    contenu: auditData.contenu,
    image: auditData.image?.url ? `${apiUrl}${auditData.image.url}` : null,
  };
};
export const fetchTechnicalSupport = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/assistance-technique-et-correction?populate=*", {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const supportData = data.data;

  return {
    titre: supportData.titre,
    contenu: supportData.contenu,
    image: supportData.image?.url ? `${apiUrl}${supportData.image.url}` : null,
  };
};
export const fetchMonotoring = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/suivi-et-maintien-de-l-accessibilite?populate=*", {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const monitoringData = data.data;

  return {
    titre: monitoringData.titre,
    contenu: monitoringData.contenu,
    image: monitoringData.image?.url ? `${apiUrl}${monitoringData.image.url}` : null,
  };
};

export const fetchReferent = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(`http://strapi:1337/api/referent-en-accessibilite?populate=*`, { cache: "no-store" });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const referentData = data.data;

  return {
    titre: referentData.titre,
    contenu: referentData.contenu,
    image: referentData.image?.url ? `${apiUrl}${referentData.image.url}` : null,
  };
};
export const fetchRecommendations = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(`http://strapi:1337/api/recommandation-accompagnement?populate=*`, { cache: "no-store" });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const recommendationsData = data.data;

  return {
    titre: recommendationsData.titre,
    contenu: recommendationsData.contenu,
    image: recommendationsData.image?.url ? `${apiUrl}${recommendationsData.image.url}` : null,
  };
};

export const fetchintroAudit = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(`http://strapi:1337/api/audits-de-conformite?populate=*`, { cache: "no-store" });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const introData = data.data;

  return {
    titre: introData.titre,
    text: introData.text,
    paragraph: introData.paraghraphe,
    image: introData.image?.url ? `${apiUrl}${introData.image.url}` : null,
  };
};
export const fetchMethodology = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(
    `http://strapi:1337/api/methodologie-audit?populate[contenu][populate][image]=*&populate[image]=*`,
    { cache: "no-store" },
  );
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const methodologyData = data.data;

  console.log("affiche moi les methodes", methodologyData);
  const highlights = methodologyData.contenu.map((item) => ({
    title: item.titre,
    description: item.ListItem.map((listItem) => listItem.children.map((child) => child.text).join("")).join(""),
    icon: item.image ? `${apiUrl}${item.image.url}` : null,
  }));

  return {
    title: methodologyData.titre,
    illustration: methodologyData.image ? `${apiUrl}${methodologyData.image.url}` : null,
    highlights,
  };
};
export const fetchServiceAudit = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch(
    "http://strapi:1337/api/offres-d-audit?populate[contenu][populate][cles][populate][image]=*&populate[contenu][populate][image]=*",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const serviceData = data.data;

  {
    const services = data.data.contenu.map((item) => ({
      title: item.titre,
      subtitle: item.text,
      illustration: item.image ? `${apiUrl}${item.image.url}` : null,
      highlights: item.cles.map((cle) => ({
        title: cle.titre,
        description: cle.ListItem.map((listItem) => listItem.children.map((child) => child.text).join("")).join(""),
        icon: cle.image ? `${apiUrl}${cle.image.url}` : null,
      })),
    }));

    return {
      titre: serviceData.Titre,
      services,
    };
  }
};

export const fetchFaqAudit = async () => {
  const res = await fetch(`http://strapi:1337/api/foire-aux-questions-audit?populate=*`, { cache: "no-store" });
  const data = await res.json();

  const faqData = data.data;
  console.log("affiche la foire au question", faqData);
  const faqs = faqData.foire.map((item) => ({
    question: item.question,
    answer: item.reponse.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>),
  }));

  return {
    title: faqData.titre,
    subheading: faqData.text,
    faqs,
  };
};
export const fetchFaqTest = async () => {
  const res = await fetch(`http://strapi:1337/api/foire-aux-questions-utilisateur?populate=*`, { cache: "no-store" });
  const data = await res.json();

  const faqData = data.data;

  const faqs = faqData.foire.map((item) => ({
    question: item.question,
    answer: item.reponse.split("\n\n").map((paragraph, index) => <p key={index}>{paragraph}</p>),
  }));

  return {
    title: faqData.titre,
    subheading: faqData.text,
    faqs,
  };
};
export const fetchIntroTest = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/intro-test-utilisateur?populate=*", {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available");
  }

  const introData = data.data;

  return {
    titre: introData.titre,
    text: introData.text,
    image: introData.image?.url ? `${apiUrl}${introData.image.url}` : null,
  };
};
export const fetchTailoredApproachData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/approche-test-utilisateur?populate=*", { cache: "no-store" });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available from the API.");
  }

  const approachData = data.data;

  return {
    title: approachData.titre,
    subheading: approachData.text,
    paragraphs: approachData.contenu.map((item) => ({
      title: item.titre,
      text: item.text.split("\n\n"),
    })),
    illustration: approachData.image ? `${apiUrl}${approachData.image.url}` : null,
  };
};

export const fetchInclusiveApproachData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/approche-inclusif-utilisateur?populate=*", { cache: "no-store" });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available from the API.");
  }

  const approachData = data.data;
  console.log(approachData);
  return {
    title: approachData.titre,
    subheading: approachData.text,
    illustration: approachData.image ? `${apiUrl}${approachData.image.url}` : null,
    paragraphs: approachData.contenu.map((item) => ({
      title: item.titre,
      text: item.text.split("\n\n"),
    })),
  };
};
export const fetchResultsData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://strapi:1337";

  const res = await fetch("http://strapi:1337/api/resultats-utilisateur?populate[contenu][populate]=*", {
    cache: "no-store",
  });
  const data = await res.json();

  if (!data || !data.data) {
    throw new Error("No data available from the API.");
  }

  const resultsData = data.data;

  return {
    title: resultsData.titre,
    subheading: resultsData.text,
    values: resultsData.contenu.map((item) => ({
      title: item.titre,
      description: item.text,
      icon: item.icon ? `${apiUrl}${item.icon.url}` : null,
    })),
  };
};

export const fetchPosts = async (slug: string) => {
 
  const res = await fetch("http://strapi:1337/api/articles?populate=*");

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
console.log("affiche tous les posts" ,data)
  if (data?.data?.length === 0) {
    throw new Error("Article not found");
  }

  return data.data;
};
export const fetchPost = async (slug: string) => {
  console.log("affiche un article et son slug",slug)
  const res = await fetch(`http://strapi:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
console.log("affiche tous les posts" ,data)
  if (data?.data?.length === 0) {
    throw new Error("Article not found");
  }

  return data.data;
};


/*  fetch footer**/


export const fetchFooterData = async () => {
 
    const res= await fetch("http://strapi:1337/api/footers?populate=*"); 
 
   
    const data = await res.json();
    
   

    return data.data;
    console.log("affiche les liens" , data.data )
};
