import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <header
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
        role="banner"
      >
        <img class="md:mt-48" src="../images\banner-accessibilite.png" />
        <div class="ml-[5vw]">
          <h1 class="font-bold mb-5 text-3xl md:text-4xl max-w-sm">Qu'est ce que l'accessibilité ?</h1>
          <p class=" max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua.
          </p>
        </div>
      </header>
      <main>
        <span class="flex mt-10 ml-[8vw]">
          <h2 class="text-[#0B3168] font-normal text-4xl mt-8">Découvrir</h2>
        </span>
        <span class="flex justify-between mt-10 ml-[8vw]">
          <p class="text-[#0B3168] w-[50%]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
            ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem itaque iure nulla ipsam
            consequuntur sit, consequatur harum tempore voluptates modi odio at odit enim vero amet perspiciatis esse
            numquam minima.
            <br />
            <br />
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain
            and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
            weakness of will, which is the same as saying through shrinking from toil and pain. These cases are
            perfectly simple and easy to distinguish
          </p>
          <span class="flex flex-col">
            <img class="mr-[10vw] h-[70%] w-[80%]" src="/images/homme-fauteuil.png" alt="" />
            <blockquote class="text-[#0B3168] text-center font-normal text-3xl max-w-[30vw] mt-8">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            </blockquote>
          </span>
        </span>
        <span class="flex justify-between mt-10 ">
          <p class="text-[#0B3168] mr-[8vw] ml-[8vw]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae.
            <br />
            <br />
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            <br />
            <br />
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
          </p>
        </span>
        <span class="flex mt-10 ml-[8vw]">
          <h2 class="text-[#0B3168] font-normal text-4xl mt-8">Explications</h2>
        </span>
        <span class="flex justify-between mt-10 ml-[8vw]">
          <p class="text-[#0B3168] w-[50%]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem itaque iure nulla ipsam
            consequuntur sit, consequatur harum tempore voluptates modi odio at odit enim vero amet perspiciatis esse
            numquam minima.
            <br />
            <br />
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain
            and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through
            weakness of will, which is the same as saying through shrinking from toil and pain. These cases are
            perfectly simple and easy to distinguish
          </p>
          <img class=" ml-[5vw] mr-[10vw] h-[60%] w-[60%]" src="/images/prothese.png" alt="" />
        </span>
        <span class="flex justify-between mt-10 ">
          <p class="text-[#0B3168] mr-[8vw] ml-[8vw]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae.
            <br />
            <br />
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            <br />
            <br />
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
            soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
          </p>
        </span>
        <span class="flex justify-center mt-[25vh] ml-[6.5vw] mb-10">
          <a
            aria-label="lien vers le haut de la page"
            class="col-end-1 flex justify-end mr-[6.4vw]"
            href="/accessibilite"
          >
            <img src="/images/icon-arrow-up.svg" alt="" />
          </a>
        </span>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "accessibilite",
};
