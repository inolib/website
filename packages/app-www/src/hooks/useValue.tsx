"use client";

import { useEffect, useState } from "react";

import { fetchValue } from "~/app/utils/fetchPolicy";

/**
 *
 */
export function useValues() {
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getValues = async () => {
      try {
        setIsLoading(true);
        const data = await fetchValue();
        console.log("fetched value", data);
        setValues(data);
      } catch {
        setError("Failed to load values");
      } finally {
        setIsLoading(false);
      }
    };

    getValues();
  }, []);

  return { values, isLoading, error };
}
