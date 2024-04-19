import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import { ButtonTopPage } from "~/components/ui/buttons/ButtonTopPage";

export default component$(() => {
  return (
    <>
      <header role="banner" id="header">
        <h1 class="flex justify-center items-center text-white md:text-5xl md:h-[10rem] bg-gradient-to-b from-[#5A0C69] to-[#0F3069] bg-[length:100vw_50vh]">
          <strong>Foire aux questions</strong>
        </h1>
      </header>
      <section class="text-[#0B3168] px-5 md:px-28 text-l">
        <h2 class="text-4xl my-6">Sommaire</h2>
        <ul class="text-2xl">
          <li class="my-2">I. Comprendre l'accessibilité numérique et son importance</li>
          <li class="my-2">II. Les obligations légales concernant l'accessibilité numérique</li>
          <li class="my-2">
            III. La définition d’une stratégie et la mise en œuvre d’un projet d'accessibilité numérique
          </li>
          <li class="my-2">IV. Utilisation de logiciels tiers et d'outils pour l'accessibilité numérique</li>
          <li class="my-2">V. Les références techniques en matière d'accessibilité numérique : RGAA vs WCAG vs RAAM</li>
          <li>VI. Les solutions digitales proposées par INOLIB</li>
        </ul>
        <h3 class="mt-8 mb-4 text-2xl">I. Comprendre l'accessibilité numérique et son importance</h3>
        <details>
          <summary class="my-2">Q: Qu'est-ce que l'accessibilité numérique et pourquoi est-ce important ?</summary>
          <p>
            L'accessibilité numérique garantit que tous les utilisateurs, y compris ceux en situation de handicap,
            peuvent accéder et utiliser des plateformes numériques telles que les sites Web, les applications mobiles et
            les logiciels professionnels. Cela inclut l'adaptation aux besoins des personnes ayant des handicaps
            cognitifs, moteurs, auditifs et visuels. En facilitant l'accès au monde numérique, nous favorisons une
            société plus inclusive et éthique.
          </p>
        </details>
        <details>
          <summary class="my-2">Q: Qu'est-ce que l'accessibilité numérique et pourquoi est-ce important ?</summary>
          <p>
            R: L'accessibilité numérique garantit que tous les utilisateurs, y compris ceux en situation de handicap,
            peuvent accéder et utiliser des plateformes numériques telles que les sites Web, les applications mobiles et
            les logiciels professionnels. Cela inclut l'adaptation aux besoins des personnes ayant des handicaps
            cognitifs, moteurs, auditifs et visuels. En facilitant l'accès au monde numérique, nous favorisons une
            société plus inclusive et éthique.
          </p>
        </details>
        <details>
          <summary class="my-2">Q: Comment l'accessibilité numérique contribue-t-elle à l'inclusion sociale ?</summary>
          <p>
            R: L'accessibilité numérique contribue à l'inclusion sociale en permettant aux personnes en situation de
            handicap d'accéder aux mêmes services et informations en ligne que les autres utilisateurs. Cela signifie
            qu'ils peuvent bénéficier de l'ensemble des avantages liés au numérique et participer pleinement à la vie
            économique, sociale et culturelle. En outre, l'accessibilité numérique favorise également l'autonomie des
            personnes en situation de handicap en leur permettant de réaliser des démarches en ligne sans avoir à
            solliciter l'aide d'autrui.
          </p>
        </details>
        <details>
          <summary class="my-2">
            Q: Quels sont les défis couramment rencontrés par les utilisateurs handicapés ?
          </summary>
          <p>
            R: Les utilisateurs en situation de handicap peuvent rencontrer divers problèmes lorsqu'ils naviguent sur
            des plateformes numériques, notamment des difficultés liées à la navigation, à la compréhension du contenu
            et à l'utilisation de technologies d'assistance. En mettant en œuvre des pratiques d'accessibilité
            numérique, nous pouvons minimiser ces obstacles et rendre les plateformes plus conviviales pour tous les
            utilisateurs.
          </p>
        </details>
        <details>
          <summary class="my-2">Q: Qui est concerné par l'accessibilité numérique ?</summary>
          <p>
            R: L'accessibilité numérique concerne tout le monde, des développeurs aux propriétaires d'entreprises et aux
            utilisateurs finaux. Les organisations publiques et privées ont la responsabilité de veiller à ce que leurs
            plateformes numériques soient accessibles, et les utilisateurs doivent être en mesure de profiter de ces
            plateformes sans rencontrer de difficultés majeures.
          </p>
        </details>
        <details>
          <summary class="my-2">Q: Existe-t-il une certification pour l'accessibilité numérique ?</summary>
          <p>
            R: Il n'y a actuellement pas de certification reconnue pour l'accessibilité numérique en France. Cependant,
            un audit d'accessibilité est souvent utilisé pour évaluer le niveau de conformité d'un site ou d'une
            application mobile.
          </p>
        </details>
        <h3 class="my-4 text-2xl">II. Les obligations légales concernant l'accessibilité numérique</h3>
        <details>
          <summary class="my-2">
            Q: Quelles sont les obligations légales pour mon organisation en matière d'accessibilité numérique ?
          </summary>
          <p>
            R: La loi française impose des obligations d'accessibilité numérique aux organismes publics et privés ayant
            une mission de service public ou d'intérêt général, ainsi qu'aux entreprises de plus de 250 millions d'euros
            de chiffre d'affaires en France. Les organisations concernées doivent publier une déclaration
            d'accessibilité, indiquer leur niveau de conformité au RGAA et permettre aux utilisateurs de signaler des
            problèmes d'accessibilité.
          </p>
        </details>
        <details>
          <summary class="my-2">Q: Qu'est-ce qu'une déclaration de conformité et comment la rédiger ?</summary>
          <p>
            R: La déclaration de conformité est un document qui évalue la conformité d'un site Web ou d'une application
            mobile en matière d'accessibilité numérique. Elle doit inclure des informations sur le niveau de conformité,
            les contenus non accessibles, les moyens de contact pour signaler des problèmes d'accessibilité et les
            mesures prises pour améliorer l'accessibilité. Pour rédiger une déclaration de conformité, vous pouvez vous
            référer aux modèles fournis par le RGAA ou consulter des exemples de déclarations existantes pour vous
            guider.
          </p>
        </details>
        <h3 class="my-4 text-2xl">
          III. La définition d’une stratégie et la mise en œuvre d’un projet d'accessibilité numérique
        </h3>
        <details>
          <summary class="my-2">
            Q: Par où commencer pour rendre mon site Web ou mon application mobile accessible ?
          </summary>
          <p>
            R: Commencez par effectuer un audit d'accessibilité pour identifier les problèmes potentiels et les domaines
            à améliorer. Vous pouvez ensuite élaborer un plan d'action pour corriger ces problèmes, en tenant compte des
            directives du RGAA, des WCAG ou du RAAM. Impliquez tous les membres de votre équipe, y compris les
            concepteurs, les développeurs et les rédacteurs de contenu, pour garantir que l'accessibilité soit prise en
            compte à chaque étape du processus.
          </p>
        </details>
        <details>
          <summary class="my-2">
            Q: Comment puis-je savoir si mon site Web ou mon application mobile est conforme aux exigences
            d'accessibilité ?
          </summary>
          <p>
            R: Pour savoir si votre site Web ou votre application mobile est conforme aux exigences d'accessibilité,
            vous pouvez effectuer les étapes suivantes :
          </p>
          <ul>
            <li>
              * Référentiel d'accessibilité : Informez-vous sur les normes d'accessibilité en vigueur dans votre pays ou
              région, telles que les WCAG (Web Content Accessibility Guidelines) pour les sites Web et les applications
              mobiles.
              <li>
                * Suivi et mise en conformité : Mettez en œuvre les recommandations d'accessibilité et travaillez en
                étroite collaboration avec les experts pour assurer la conformité de votre site ou application.
              </li>
            </li>
            <li>
              * Auto-évaluation : Utilisez des outils automatisés en ligne, tels que les validateurs d'accessibilité,
              pour identifier rapidement les problèmes d'accessibilité potentiels sur votre site ou application. Gardez
              à l'esprit que ces outils ne détectent pas tous les problèmes et qu'une évaluation humaine est également
              nécessaire.
            </li>
            <li>
              * Audit d'accessibilité : Faites appel à des experts en accessibilité, comme INOLIB, pour réaliser un
              audit complet de votre site Web ou de votre application mobile. Un audit professionnel vous fournira un
              rapport détaillé des problèmes d'accessibilité, ainsi que des recommandations pour les corriger.
            </li>
          </ul>
          <p>
            En faisant appel aux services d'INOLIB, vous bénéficierez d'un accompagnement et de conseils personnalisés
            pour vous aider à atteindre et maintenir la conformité d'accessibilité de votre site Web ou application
            mobile.
          </p>
        </details>
        <details>
          <summary class="my-2">
            Q: Comment vos services de conseil et d'accompagnement peuvent-ils aider mon entreprise à définir une
            stratégie et réaliser un schéma pluriannuel d'accessibilité numérique ?
          </summary>
          <p>
            R: Nos services de conseil et d'accompagnement vous guideront dans la définition d'une stratégie
            d'accessibilité numérique adaptée à votre entreprise et vous aideront à élaborer un schéma pluriannuel pour
            sa mise en œuvre. Nous vous proposons un accompagnement personnalisé pour déterminer les priorités et les
            objectifs en matière d'accessibilité, ainsi que les étapes clés pour les atteindre. De plus, nous vous
            aiderons à identifier les ressources nécessaires et à mettre en place des indicateurs de suivi pour évaluer
            l'efficacité de votre stratégie.
          </p>
        </details>
        <details>
          <summary class="my-2">Q: Comment puis-je former mon équipe à l'accessibilité numérique ?</summary>
          <p>
            R: INOLIB propose des sessions de formations et de sensibilisations sur mesure adaptées à votre secteur et
            vos besoins, afin d’aider votre équipe à développer ses compétences en matière d'accessibilité numérique.
            <a
              class="underline underline-offset-1 text-blue-600 visited:text-purple-700"
              href="/contact"
              aria-label="page contact"
            >
              Contactez-nous et nous pour en savoir plus.
            </a>
            <br />
            Par ailleurs, il existe de nombreuses ressources en ligne libre d’accès pour s’informer sur le sujet. Vous
            pouvez consulter les guides et les tutoriels disponibles sur les sites du RGAA, du W3C ou d'autres
            organisations spécialisées.
            <br />
            En outre, envisagez de participer à des conférences ou à des ateliers sur l'accessibilité numérique
            organisés par INOLIB pour échanger des connaissances et des expériences avec d'autres professionnels du
            secteur. Inscrivez-vous à notre newsletter pour ne rien manquer !
          </p>
        </details>
        <details>
          <summary class="my-2">Q: Quels sont les tarifs d’un audit en accessibilité numérique ?</summary>
          <p>
            R: Les tarifs de nos audits varient en fonction du type d'audit choisi : audit express, audit approfondi ou
            audit de contrôle. Pour connaître les tarifs précis et obtenir un devis personnalisé, il est nécessaire de
            nous contacter directement.
          </p>
        </details>

        <details>
          <summary class="my-2">Q: Quels sont les délais d'un audit d'accessibilité numérique ?</summary>
          <p>
            R: Les délais d'un audit d'accessibilité numérique peuvent varier en fonction du type d'audit choisi et de
            la complexité du site ou de l'application concernée. Voici une estimation des délais pour chacun des trois
            types d'audits que nous proposons :
          </p>
          <ul>
            <li>
              1. Audit express : Cet audit rapide et ciblé est généralement réalisé en quelques jours à une semaine. Il
              offre un aperçu des problèmes d'accessibilité les plus courants et permet d'identifier rapidement les
              zones à améliorer.
            </li>
            <li>
              2. Audit approfondi : Cet audit complet et détaillé peut prendre plusieurs semaines, voire un mois ou
              plus, en fonction de la taille et de la complexité du site ou de l'application. Il inclut une analyse
              approfondie de l'ensemble des éléments, des tests avec des utilisateurs en situation de handicap et la
              fourniture d'un rapport détaillé avec des recommandations spécifiques pour améliorer l'accessibilité.
            </li>
            <li>
              3. Audit de contrôle : Cet audit est réalisé après la mise en œuvre des recommandations issues de l'audit
              approfondi. Le délai varie en fonction des modifications apportées et de la taille du site ou de
              l'application, mais il est généralement moins long que l'audit approfondi.
            </li>
          </ul>
          <p>
            Veuillez noter que ces délais sont indicatifs et peuvent varier en fonction des spécificités de votre projet
            et de la disponibilité de nos équipes d'audit. Pour obtenir un devis personnalisé et un délai précis,
            n'hésitez pas à{" "}
            <a
              class="underline underline-offset-1 text-blue-500 visited:text-purple-600"
              href="/contact"
              aria-label="page contact"
            >
              nous contacter.
            </a>
          </p>
        </details>
        <details>
          <summary class="my-2">
            Q: Quels sont les délais pour la mise en accessibilité de mon site ou application ?
          </summary>
          <p>
            R: Les délais pour la mise en accessibilité de votre site ou application dépendent de plusieurs facteurs,
            tels que la complexité du site ou de l'application, l'ampleur des modifications nécessaires, les compétences
            techniques de vos équipes et les ressources disponibles. Voici quelques éléments à prendre en compte pour
            estimer les délais de mise en accessibilité :
          </p>
          <ul>
            <li>
              * Analyse et planification : Avant de commencer les travaux de mise en accessibilité, il est important
              d'effectuer un audit pour identifier les problèmes d'accessibilité et définir un plan d'action. Cette
              phase peut prendre de quelques jours à plusieurs semaines, en fonction de la taille et de la complexité de
              votre site ou application.
            </li>
            <li>
              * Formation et sensibilisation : Si vos équipes ne sont pas familières avec l'accessibilité numérique, il
              peut être nécessaire de les former aux bonnes pratiques et aux exigences techniques. Cette étape peut
              durer de quelques jours à quelques semaines.
            </li>
            <li>
              * Implémentation des modifications : La durée de cette phase dépend de l'ampleur des modifications à
              apporter et des compétences techniques de vos équipes. Pour un petit site avec des problèmes
              d'accessibilité mineurs, cela peut prendre quelques jours à quelques semaines. Pour un site plus complexe
              ou une application avec des problèmes d'accessibilité majeurs, cela peut prendre plusieurs mois.
            </li>
            <li>
              * Contrôle et validation : Une fois les modifications apportées, il est important de réaliser un audit de
              contrôle pour s'assurer que les problèmes d'accessibilité ont été correctement résolus. Cette étape peut
              prendre de quelques jours à quelques semaines, en fonction de la taille et de la complexité du site ou de
              l'application.
            </li>
          </ul>
          <p>
            Il est important de noter que ces délais sont indicatifs et peuvent varier en fonction des spécificités de
            votre projet et des contraintes de votre organisation. Pour obtenir un devis personnalisé et une estimation
            précise des délais.
          </p>
        </details>
        <details>
          <summary class="my-2"> Q: Qu'est-ce qu'un schéma pluriannuel et une déclaration de conformité ?</summary>
          <p>
            R: Un schéma pluriannuel est un plan stratégique qui établit les objectifs, les actions et les ressources
            nécessaires pour atteindre et maintenir la conformité d'accessibilité sur une période de plusieurs années.
            Ce plan est souvent mis en place par les organisations pour s'assurer qu'elles répondent aux exigences
            légales et réglementaires en matière d'accessibilité numérique. Le schéma pluriannuel inclut généralement
            des étapes clés, des échéanciers, des responsabilités et des indicateurs de performance pour mesurer les
            progrès réalisés. Une déclaration de conformité est un document officiel qui atteste qu'un site Web, une
            application mobile ou un autre produit numérique respecte les normes d'accessibilité en vigueur, telles que
            les WCAG (Web Content Accessibility Guidelines). Cette déclaration est généralement préparée après un audit
            d'accessibilité et la mise en œuvre des recommandations pour corriger les problèmes d'accessibilité
            identifiés. La déclaration de conformité peut être requise pour répondre aux exigences légales ou
            réglementaires, et elle peut également servir à rassurer les utilisateurs et les partenaires sur
            l'engagement de l'organisation en faveur de l'accessibilité numérique.
          </p>
        </details>
        <h3 class="my-4 text-2xl">IV. Utilisation de logiciels et d'outils pour l'accessibilité numérique</h3>
        <details>
          <summary class="my-2">
            Q: Quels sont les outils et les logiciels disponibles pour tester l'accessibilité de mon site Web ou de mon
            application mobile ?
          </summary>
          <p>
            R: Plusieurs outils et logiciels peuvent vous aider à évaluer et à améliorer l'accessibilité de votre site
            Web ou de votre application mobile. Parmi les plus courants figurent les extensions de navigateur, les
            outils d'audit automatisés et les plateformes d'analyse. Il est important de noter que les outils
            automatisés ne détectent pas tous les problèmes d'accessibilité et qu'un test manuel par des utilisateurs
            réels, notamment des personnes en situation de handicap, est également nécessaire.
          </p>
        </details>
        <h3 class="my-4 text-2xl">
          V. Les références techniques en matière d'accessibilité numérique : RGAA vs WCAG vs RAAM
        </h3>
        <details>
          <summary class="my-2">Q: Quelle est la différence entre le RGAA, les WCAG et le RAAM ?</summary>
          <p>
            R: Le RGAA (Référentiel Général d'Accessibilité pour les Administrations) est le référentiel français en
            matière d'accessibilité numérique. Il est basé sur les WCAG (Web Content Accessibility Guidelines), un
            ensemble de directives internationales élaborées par le W3C (World Wide Web Consortium). Le RAAM
            (Référentiel d'Accessibilité pour les Applications Mobiles) est une initiative française visant à adapter
            les WCAG aux spécificités des applications mobiles. Bien que les trois référentiels visent à améliorer
            l'accessibilité numérique, ils peuvent différer en termes de portée, de détails et d'application.
          </p>
        </details>
        <details>
          <summary class="my-2">
            Q: Dois-je suivre le RGAA, les WCAG ou le RAAM pour mon site Web ou mon application mobile ?
          </summary>
          <p>
            En France, les organisations concernées par les obligations légales d'accessibilité numérique doivent se
            conformer au RGAA pour leurs sites Web. Les WCAG peuvent également être utilisées comme référence, car le
            RGAA est basé sur elles. Pour les applications mobiles, le RAAM est un référentiel spécifique qui peut être
            suivi, bien qu'il n'y ait pas d'obligation légale stricte en ce qui concerne les applications mobiles en
            France.
            <br />
            Cependant, il est recommandé de se conformer aux meilleures pratiques d'accessibilité internationales et de
            prendre en compte les spécificités des applications mobiles. Dans tous les cas, l'objectif principal est de
            garantir une expérience utilisateur accessible et inclusive pour tous les utilisateurs, indépendamment du
            référentiel suivi.
          </p>
        </details>
        <h3 class="my-4 text-2xl">VI. Les solutions digitales proposées par INOLIB</h3>
        <details>
          <summary class="my-2">
            Q: Quelles sont les différentes solutions digitales que vous proposez en plus des audits d'accessibilité
            numérique ?
          </summary>
          <p>
            R: En plus des audits d'accessibilité numérique, nous proposons également des services de conseil, de
            formation, de création et de refonte de sites web et applications mobiles accessibles. Notre objectif est
            d'accompagner nos clients tout au long de leur démarche d'accessibilité numérique, en leur fournissant les
            outils et les compétences nécessaires pour créer et maintenir des interfaces numériques accessibles à tous.
          </p>
        </details>
        <details>
          <summary class="my-2">
            Q: Quels avantages offre votre service de création et de refonte de sites web et applications mobiles
            accessibles ?
          </summary>
          <p>
            R: Notre service de création et de refonte de sites web et applications mobiles accessibles vous permet de
            bénéficier d'une interface numérique conforme aux exigences légales et aux bonnes pratiques d'accessibilité
            dès le départ. De plus, nous mettons l'accent sur l'expérience utilisateur, en veillant à ce que votre site
            web ou application mobile soit ergonomique et attrayant pour tous les utilisateurs, y compris ceux en
            situation de handicap.
          </p>
        </details>
        <details>
          <summary class="my-2">
            Q: Proposez-vous des formations pour sensibiliser et former les équipes aux enjeux de l'accessibilité
            numérique ?
          </summary>
          <p>
            R: Oui, nous proposons des formations sur mesure pour les équipes de développement, de design, de rédaction
            de contenu et de gestion de projet. Notre objectif est de fournir les compétences et les connaissances
            nécessaires pour mettre en place et maintenir des services numériques accessibles. Les formations peuvent
            être adaptées en fonction de vos besoins spécifiques et du niveau de compétence de votre équipe.
          </p>
        </details>
        <p class="mb-4">
          N'hésitez pas à nous contacter pour discuter de vos besoins en matière d'accessibilité numérique et découvrir
          comment nous pouvons vous aider à améliorer l'accessibilité de vos services numériques, la première
          consultation est offerte ! Ensemble, nous rendrons le web et les applications mobiles plus accessibles pour
          tous.
        </p>
        <p class="mb-4">
          Vous avez d'autres questions ?{" "}
          <a
            class="underline underline-offset-1 text-blue-500 visited:text-purple-600"
            href="/contact"
            aria-label="page contact"
          >
            Contactez
          </a>{" "}
          INOLIB dès maintenant
          <br />
          Si vous avez d'autres questions concernant l'accessibilité numérique ou nos services, n'hésitez pas à prendre
          contact avec notre équipe d'experts. Chez INOLIB, nous sommes toujours prêts à vous aider et à répondre à vos
          interrogations pour vous guider vers un web plus accessible et inclusif.{" "}
        </p>
        <p class="mb-4">Prenez rendez-vous pour une consultation gratuite.</p>
        <p class="mb-4">
          Découvrez comment INOLIB peut vous accompagner dans votre projet d'accessibilité numérique en planifiant une
          consultation avec nos experts. Ensemble, nous pourrons déterminer les meilleures solutions pour répondre à vos
          besoins et garantir une expérience utilisateur optimale pour tous.
        </p>
        <p class="mb-4">
          INOLIB, votre allié en accessibilité numérique et en solutions digitales, pour un monde inclusif.
        </p>
      </section>
      <div class="my-10 flex w-full justify-center">
        <ButtonTopPage />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Foire aux questions | INOLIB",
};
