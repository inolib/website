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
/**
 *fetch valeu
 */
export async function fetchValue() {
  const res = await fetch("http://strapi:1337/api/valeurs?populate=*", {
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
export async function fetchPlan() {
  const res = await fetch("http://strapi:1337/api/plan-du-site?populate=*", {
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
