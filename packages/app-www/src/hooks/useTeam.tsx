"use client";

import { useEffect, useState } from "react";

import type { ApiResponse, Member } from "~/app/type";

const API_URL = "http://strapi:1337";

/**
 *
 */
export function useTeam() {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMembers = async () => {
      try {
        const response = await fetch(`${API_URL}/api/membres?populate=*`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();

        console.log("Fetched data:", data);

        if (!isMounted) return;

        const formattedMembers: Member[] = data.data.map((member) => ({
          id: member.id,
          name: member.Nom || "Nom non renseigné",
          role: member.Role || "Role non renseigné",
          description: member.Description || "Description non renseignée",
          photo: member.photo?.url ? `${API_URL}${member.photo.url}` : null,
        }));

        setMembers(formattedMembers);
      } catch (error_) {
        if (!isMounted) return;
        setError(error_ instanceof Error ? error_.message : "Failed to fetch team members");
        console.error("Error fetching team members:", error_);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchMembers().catch((error) => {
      console.error("Error in fetchMembers:", error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { members, isLoading, error };

  console.log("Fetched data:", members);
}
