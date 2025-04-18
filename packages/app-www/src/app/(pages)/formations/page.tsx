'use client';

import { useEffect, useState } from 'react';
import { EducationalApproach, Header, Qualiopi, TrainingCourses, Why } from '~/components/app/(pages)/formations';
import { strapiApi } from '~/lib/strapi';

const Page = () => {
  const [formations, setFormations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await strapiApi.formation.getFormations({
          sort: 'id:desc',
          paginationPage: 1,
          paginationPageSize: 100,
          populate: '*',
        });
        setFormations(response.data.data ?? []);
      } catch (error) {
        console.error('Erreur lors de la récupération des formations :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

  return (
    <>
      <Header />
      <TrainingCourses _color="neutral-50" courses={formations} loading={loading} />
      <EducationalApproach _color="white" />
      <Why _color="neutral-50" />
      <Qualiopi _color="white" />
    </>
  );
};

export default Page;
