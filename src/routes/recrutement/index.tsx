import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Banner } from "~/components/header/Banner";
import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";
import { Button } from "~/components/ui/buttons/Button";

export default component$(() => {
  return (
    <>
      <Banner
        content="﻿Rejoignez Inolib - Ensemble pour un monde numérique plus inclusif."
        title="Recrutement"
        imageSrc="/images/recrutement-raw.jpg"
        imageStyle="md:w-3/5 md:max-w-xl md:mb-16"
      />
      <h2 class="md:mt-[10rem] mt-8 ml-8 md:ml-[5rem] mb-10 text-3xl text-[#0B3168] font-semibold">Pourquoi choisir Inolib ?</h2>
      <p class="mx-4 text-lg md:mx-[8rem] mb-10 text-[#0B3168]">
        Vous êtes passionné par le digital et l'accessibilité ? Vous souhaitez contribuer à un monde numérique plus
        inclusif et égalitaire ? Inolib pourrait être l'opportunité professionnelle que vous recherchez ! Rejoignez
        notre équipe engagée et talentueuse, et ensemble, impactons la vie de milliers de personnes grâce à nos
        solutions d'accessibilité numérique innovantes.
      </p>
      <section class="text-[#0B3168]" aria-label="recrutement">
        <div class=" bg-slate-100 shadow text-[#0B3168] rounded md:flex-row py-8">
          <ul class="md:grid grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-8 md:mt-20 md:mx-[8rem]">
            <li class="col-span-1 md:col-span-1 md:col-start-1 md:row-start-1">
              <p class="mx-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl">Contribuer</strong> à une cause importante : En travaillant chez Inolib, vous
                participez activement à l'amélioration de l'accessibilité numérique pour tous. Votre travail aura un
                impact direct et positif sur la société.
              </p>
            </li>
            <li class="col-span-1 md:col-span-1 md:col-start-2 md:row-start-1">
              <p class="mx-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl">Opportunités </strong> de développement professionnel : Chez Inolib, nous
                croyons au potentiel de chaque membre de notre équipe. Nous investissons dans la formation et le
                développement professionnel pour vous aider à atteindre vos objectifs de carrière. Vous serez
                constamment entouré d'innovations et d’opportunités de croissance, ce qui vous permettra de développer
                vos compétences et votre expertise.
              </p>
            </li>
            <li class="col-span-1 md:col-span-1 md:col-start-1 md:row-start-2">
              <p class="mx-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl">Culture d'entreprise</strong> inclusive et diversifiée : Nous valorisons et
                célébrons la diversité de nos employés. Nous nous efforçons de créer un environnement de travail
                inclusif et accueillant, où chacun peut s'épanouir et réussir.
              </p>
            </li>
            <li class="col-span-1 md:col-span-1 md:col-start-2 md:row-start-2">
              <p class="mx-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl">L'humain</strong> au cœur de nos valeurs : Chez Inolib, nous accordons une
                importance primordiale aux relations humaines et à la collaboration. Nous cultivons un esprit d'équipe
                solide et encourageons le partage des connaissances et des compétences entre nos collaborateurs.
              </p>
            </li>
          </ul>
        </div>

        <h2 class="mb-2 md:mb-10 ml-[5rem] mt-[2rem] text-3xl text-[#0B3168]">Postuler chez Inolib</h2>
        <p class="mx-4 text-lg md:mx-[8rem] mb-10">
          Nous sommes toujours à la recherche de talents pour rejoindre notre équipe. Si vous avez des compétences et
          une passion pour l'accessibilité numérique, n'hésitez pas à nous envoyer votre candidature spontanée. Comment
          postuler ?
        </p>
        <div class=" bg-slate-100 shadow text-[#0B3168] rounded md:flex-row pb-8 pt-3">
          <ul class="md:grid grid-cols-2 md:grid-cols-2 md:grid-rows-1 gap-6 md:gap-8 mt-20 md:mx-[4rem]">
            <li class="col-span-1 md:col-span-1 md:col-start-1 md:row-start-1">
              <p class="mx-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl"> Préparez votre CV </strong> et une lettre de motivation expliquant pourquoi
                vous êtes le candidat idéal pour Inolib et comment vous pourriez contribuer à notre mission
                d’accessibilité numérique.
              </p>
            </li>
            <li class="col-span-1 md:col-span-1 md:col-start-2 md:row-start-1">
              <p class="mx-4 text-lg mb-5 md:mb-0">
                <strong class="text-xl"> Envoyez votre candidature </strong> à l'adresse e-mail recrutement@inolib.fr
                avec l'objet "Candidature spontanée - [Votre nom - prénom]". Nous examinerons avec attention votre
                candidature et, si votre profil correspond à nos besoins, nous vous contacterons pour un entretien.
                Rejoignez Inolib et participez à la construction d'un monde numérique accessible à tous ! Ensemble,
                faisons de l'accessibilité numérique une réalité pour un monde plus inclusif
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="text-[#0B3168] mt-10 md:mt-0">
        <span class="flex justify-center mb-2 md:mb-0">
          <Button
            href="/contact"
            color="blue"
            label="Conctactez-nous !"
            styles="mt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 duration-300"
          />
        </span>
      </section>
      <div class="my-10 flex w-full justify-center">
        <ButtonTopPage />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Carrières en Accessibilité Numérique et Solutions Digitales",
};
