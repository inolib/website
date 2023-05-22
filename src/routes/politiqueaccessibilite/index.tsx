import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section class="px-5 md:px-10 text-[#0B3168] text-l my-20">
        <h1 class="mb-10 text-3xl text-center font-bold">Déclaration d'accessibilité</h1>
        <p class="mb-4">
          Nous avons comme volonté de proposer un site conforme aux normes d'accessibilité numérique en vigueur et
          accessible à tous.
          <br />
          Si malgré nos efforts, vous rencontrez une difficulté, n'hésitez pas à nous faire part à l'adresse suivante :{" "}
          <a class="font-bold" href="mailto:contact@inolib.com">
            contact@inolib.com
          </a>
          <br />
          Où par téléphone au{" "}
          <a class="font-bold" href="tel:+33670865032">
            06 70 86 50 32
          </a>
          .
          <br />
          Cette déclaration d'accessibilité à la version 4.1 du référentiel général d'amélioration de l'accessibilité
          numérique (RGAA) s'applique au présent site et a été établie le 24 mai 2022 par INOLIB.
        </p>
        <section class="text-l">
          <section class="mb-8">
            <h2 class="font-bold text-xl mb-4">Etat de conformité</h2>
            <p>
              Le site est en totale conformité avec le Référentiel général d'amélioration de l'accessibilité, RGAA
              version 4.1.
              <br />
              <span class="mt-8 mb-2 font-bold">Résultats des tests</span>
              <br />
              L'audit de conformité réalisé en interne, par une personne non impliquée dans le développement du site,
              révèle que 100% des critères RGAA applicables sont respectés.
            </p>
          </section>
          <section>
            <h2 class="font-bold text-xl mb-4">Etablissement de cette déclaration d'accessibilité</h2>
            <p class="mb-8">Cette déclaration a été établie le 24/05/2022.</p>
            <section class="mb-8">
              <h2 class="font-bold text-xl mb-4">Technologies, utilisées pour la réalisation du site web</h2>

              <ul>
                <li class="mb-1">
                  <p>🔹HTML5, CSS, QwikJs, GraphQL.</p>
                </li>
                <li class="mb-1">
                  <p>🔹Vercel, SendinBlue.</p>
                </li>
              </ul>
            </section>
            <section class="mb-8">
              <h2 class="font-bold text-xl mb-4">
                Agents utilisateurs, technologies d'assistance et outils utilisés pour vérifier l'accessibilité
              </h2>
              <p>
                Les tests des pages web ont été effectués avec les combinaisons de navigateurs web et lecteurs d'écran
                suivants :
              </p>
              <ul>
                <li class="mb-1">
                  <p>🔹NVDA et Firefox version 96.0.3 ;</p>
                </li>
                <li class="mb-1">
                  <p>🔹JAWS et Firefox version 96.0.3 ;</p>
                </li>
                <li class="mb-1">
                  <p>🔹VoiceOver et Safari version 15.5 ;</p>
                </li>
                <li class="mb-1">
                  <p>🔹VoiceOver (iOS 15.5) et Safari ;</p>
                </li>
                <li class="mb-1">
                  <p>🔹Talkback (android 12) et Chrome ;</p>
                </li>
              </ul>
            </section>
            <section class="mb-8">
              <h2 class="font-bold text-xl mb-4">Les outils suivants ont été utilisés lors de l'évaluation</h2>
              <ul>
                <li class="mb-1">
                  <p>🔹Colour Contrast Analyser ;</p>
                </li>
                <li class="mb-1">
                  <p>🔹Inspecteur de code ;</p>
                </li>
              </ul>
            </section>
            <section class="mb-8">
              <h2 class="font-bold text-xl mb-4">Pages du site ayant fait l'objet de la vérification de conformité</h2>
              <p>L'audit a porté sur un échantillon de 11 pages du site à savoir :</p>
              <ul>
                <li class="mb-1">
                  <a href="/audit">🔹Audit</a>
                </li>
                <li class="mb-1">
                  <a href="/developpement">🔹Développement</a>
                </li>
                <li class="mb-1">
                  <a href="/formation">🔹Formation</a>
                </li>
                <li class="mb-1">
                  <a href="/testing">🔹Testing</a>
                </li>
                <li class="mb-1">
                  <a href="/marketing">🔹Marketing</a>
                </li>
                <li class="mb-1">
                  <a href="/accompagnement">🔹Accompagnement</a>
                </li>
                <li class="mb-1">
                  <a href="/politiqueaccessibilite">🔹Politique d'accessibilité</a>
                </li>
              </ul>
            </section>
            <section class="mb-8">
              <h2 class="font-bold text-xl mb-4">Nous contacter pour un retour d'information</h2>
              <p>
                N'hésitez pas à nous signaler les problèmes éventuels que vous rencontrez et qui peuvent vous empêcher
                d'accéder à un contenu du site. Pour cela, vous pouvez nous laisser un message à l'adresse suivante :
                <a href="mailto:contact@inolib.com">contact@inolib.com</a>. Nous essaierons de vous apporter une réponse
                dans les plus brefs délais.
              </p>
            </section>
            <section class="mb-8">
              <h2 class="font-bold text-xl mb-4">Rappel de la loi et recours</h2>
              <p>
                Depuis la loi du 11 février 2005, l'accessibilité des sites internet, intranet et extranet des
                organismes publics est devenue une obligation répondant au droit à l'accessibilité des personnes
                handicapées (plus de 12 millions de français et de françaises sont concernés). Les directives
                européennes, lois et décrets qui ont suivi ont renforcé cette obligation, notamment en l'étendant aux
                entreprises et organismes privés.
                <br />
                L'article 47 de la loi du 11 février 2005 précisait déjà que la sanction en cas de manquement à cette
                obligation est prononcée par le ministre chargé des personnes handicapées. De plus, les organismes
                concernés doivent impérativement publier en ligne une déclaration du niveau d'accessibilité de leurs
                services de communication au public.
                <br />
                Le recours pour excès de pouvoir est un "recours contentieux tendant à l'annulation d'une décision
                administrative et fondé sur la violation par cette décision d'une règle de droit". Il "est ouvert même
                sans texte et a pour effet d'assurer, conformément aux principes généraux du droit, le respect de la
                légalité".
                <br />
                Le recours est l'action de demander au juge administratif (Tribunal administratif, Cour administrative
                d'appel, Conseil d'État) de prononcer l'annulation d'un acte édicté par une personne morale de droit
                public ou une personne morale de droit privé qui s'est vu conférer des prérogatives de puissance
                publique.
                <br />
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "politiqueacessibilite",
};
