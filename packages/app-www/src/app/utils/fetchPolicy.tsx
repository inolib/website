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
  const res = await fetch("http://strapi:1337/api/valeurs?populate[list][populate][0]=image", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch policy data");
  }

  const data = await res.json();
  return { ...data.data[0], list: data.data[0].list || [] }; // Définir `list` par défaut comme tableau vide
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
  const res = await fetch("http://localhost:1337/api/membres?populate=*", {
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
