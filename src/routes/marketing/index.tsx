import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Banner } from "~/components/header/Banner";

export default component$(() => {
  return (
    <>
      <Banner
        title="Inolib - Marketing et communication digitale"
        content="Votre solution accessible et engagée"
        imageSrc="/images/marketing-banner.jpg"
        imageStyle="md:h-96 md:w-auto"
      />
      <h2 class="md:mt-[10rem] mt-8 ml-8 md:mx-[5rem] mb-10 text-3xl text-[#0B3168]">
        Du référencement à l'engagement, découvrez nos solutions sur-mesure pour booster votre présence en ligne
      </h2>
      <p class="text-lg md:mx-[8rem] mb-10 text-[#0B3168]">
        Inolib, votre partenaire privilégié en marketing et communication digitale, vous accompagne vers le succès en
        unifiant expérience utilisateur et accessibilité numérique. Ensemble, créons une présence en ligne puissante et
        éthique pour votre entreprise.
      </p>
      <p class="text-lg md:mx-[8rem] mb-10 text-[#0B3168]">
        En faisant appel à Inolib, vous bénéficiez d'une approche innovante et engagée qui vous permet de vous démarquer
        de la concurrence. Notre équipe d'experts vous accompagne dans la création de stratégies performantes pour
        renforcer votre visibilité en ligne, tout en mettant en avant vos valeurs et votre engagement envers un monde
        numérique inclusif et responsable.
      </p>
      <p class="text-lg md:mx-[8rem] mb-10 text-[#0B3168]">
        Contactez-nous dès aujourd'hui pour échanger avec l'un de nos experts sur vos besoins en marketing et
        communication digitale et découvrez comment nous pouvons vous aider à atteindre vos objectifs. Profitez de notre
        première consultation{" "}
        <a href="/contact" class="underline underline-offset-1 text-blue-600 visited:text-purple-700">
          offerte
        </a>
      </p>
      <p class="text-lg md:mx-[8rem] mb-10 text-[#0B3168]">
        Ne manquez pas l'occasion de découvrir nos autres services, comme le{" "}
        <a href="/developpement" class="underline underline-offset-1 text-blue-600 visited:text-purple-700">
          développement
        </a>{" "}
        web et mobile, la{" "}
        <a href="/formation" class="underline underline-offset-1 text-blue-600 visited:text-purple-700">
          formation{" "}
        </a>
        en accessibilité numérique , ou encore la{" "}
        <a href="/audit" class="underline underline-offset-1 text-blue-600 visited:text-purple-700">
          mise en conformité
        </a>{" "}
        RGAA. Chez Inolib, nous nous engageons à vous fournir une offre complète pour répondre à toutes vos attentes.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Agence de marketing digital engagée | Accessibilité & Performance",
};
