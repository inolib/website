import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <header
        class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white p-4 md:h-[60vh] md:flex md:px-28 md:items-center md:relative md:mb-28"
        role="banner"
      >
        <img class="md:mt-48 z-10" src="../images\home5.png" />
        <div class="md:pl-14">
          <h1 class="font-bold m-5 text-3xl md:text-4xl">Qui sommes-nous ?</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna. Aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </header>
      <main class="text-[#0B3168]">
        <article class="md:px-28 md:pt-4">
          <h2 class="text-2xl font-bold my-6">Ce qui nous animes</h2>
          <div class="md:flex">
            <div class="md:px-4 md:pr-10 md:pl-0 md:w-[46vw]">
              <p class="text-justify md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel, enim, dolore dolorem a
                mollitia adipisci ipsa pariatur ipsum officiis eligendi expedita. Eaque cumque suscipit quidem
                exercitationem. Ipsa, eveniet eaque. At modi porro, perspiciatis enim illum laborum nostrum nesciunt
                voluptatum doloremque vitae, consequuntur eaque aliquam deserunt pariatur sequi possimus, tempora quidem
                quas repellendus dolore. Illum accusantium sed dolores aperiam. Deserunt. Aliquam dolor facere officiis
                suscipit! Nobis repellat porro molestiae temporibus, totam sed cupiditate excepturi eligendi animi esse?
                Voluptas, at molestiae, quis magnam temporibus ut in minus voluptate soluta eaque enim. Odit, eligendi
                similique. Odit, saepe at! Nisi nemo exercitationem impedit obcaecati assumenda accusantium. A, omnis
                laboriosam unde laudantium quia corrupti. Animi, optio? Perspiciatis incidunt in fugiat laudantium
                expedita, repellendus cum. Eaque sint illo dignissimos quod cum ex, possimus, sed minus omnis voluptate
                alias aspernatur maxime quasi quibusdam hic officiis inventore ea placeat consectetur illum totam quia
                tenetur fugit libero? Voluptate? Optio ex id maiores perferendis molestias saepe debitis atque aut
                quaerat commodi hic, nam illo et labore ea quasi facilis maxime incidunt fugit necessitatibus
                laboriosam! Temporibus consequuntur sunt enim facilis. Tempore alias, earum officiis ut est labore
                distinctio fugit voluptatibus quis minus repudiandae saepe dolorem aperiam quibusdam odio, veniam rerum
                officia eius libero obcaecati dolor quisquam, omnis dolorum nostrum. Neque? Minima tempore laudantium
                neque accusamus cum, aspernatur, culpa ipsum inventore qui possimus ullam ratione sint aliquam iusto
                eveniet ducimus dicta necessitatibus nostrum corrupti itaque architecto hic dolor quas. Quibusdam, quam?
                Culpa a incidunt natus! Sint fugit dolores debitis. Aliquam totam neque ullam dolore. Doloremque
                sapiente maiores natus nulla quisquam ducimus aperiam porro rerum sunt? Facilis voluptatum eum modi
                neque dignissimos? Cupiditate iusto voluptates enim ipsa cum qui, omnis beatae fugiat aperiam dolore
                provident porro quasi, ab molestiae nulla similique illum blanditiis consectetur harum, non molestias
                laborum nihil voluptate nemo. Exercitationem.
              </p>
            </div>
            <div class="md:w-1/3">
              <img class="mb-6" src="..\images\presentation-article-1.png" />
              <blockquote class="px-4 text-center">
                <strong>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, culpa alias? Officia autem
                  doloribus nemo cul.
                </strong>
              </blockquote>
            </div>
          </div>
        </article>
        <article class=" md:px-28">
          <h2 class="text-2xl font-bold my-6">Ce que nous sommes au quotidien</h2>
          <div class="md:flex">
            <div class="max-w-lg px-4 md:pr-10">
              <img class="mb-6" src="..\images\presentation-article-2.png" />
              <blockquote class="px-4">
                <strong>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, culpa alias? Officia autem
                  doloribus nemo cul.
                </strong>
              </blockquote>
            </div>
            <div class="my-10 md:mb-10 md:mt-0  md:w-[46vw]">
              <p class="text-justify md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium vel, enim, dolore dolorem a
                mollitia adipisci ipsa pariatur ipsum officiis eligendi expedita. Eaque cumque suscipit quidem
                exercitationem. Ipsa, eveniet eaque. At modi porro, perspiciatis enim illum laborum nostrum nesciunt
                voluptatum doloremque vitae, consequuntur eaque aliquam deserunt pariatur sequi possimus, tempora quidem
                quas repellendus dolore. Illum accusantium sed dolores aperiam. Deserunt. Aliquam dolor facere officiis
                suscipit! Nobis repellat porro molestiae temporibus, totam sed cupiditate excepturi eligendi animi esse?
                Voluptas, at molestiae, quis magnam temporibus ut in minus voluptate soluta eaque enim. Odit, eligendi
                similique. Odit, saepe at! Nisi nemo exercitationem impedit obcaecati assumenda accusantium. A, omnis
                laboriosam unde laudantium quia corrupti. Animi, optio? Perspiciatis incidunt in fugiat laudantium
                expedita, repellendus cum. Eaque sint illo dignissimos quod cum ex, possimus, sed minus omnis voluptate
                alias aspernatur maxime quasi quibusdam hic officiis inventore ea placeat consectetur illum totam quia
                tenetur fugit libero? Voluptate? Optio ex id maiores perferendis molestias saepe debitis atque aut
                quaerat commodi hic, nam illo et labore ea quasi facilis maxime incidunt fugit necessitatibus
                laboriosam! Temporibus consequuntur sunt enim facilis. Tempore alias, earum officiis ut est labore
                distinctio fugit voluptatibus quis minus repudiandae saepe dolorem aperiam quibusdam odio, veniam rerum
                officia eius libero obcaecati dolor quisquam, omnis dolorum nostrum. Neque? Minima tempore laudantium
                neque accusamus cum, aspernatur, culpa ipsum inventore qui possimus ullam ratione sint aliquam iusto
                eveniet ducimus dicta necessitatibus nostrum corrupti itaque architecto hic dolor quas. Quibusdam, quam?
                Culpa a incidunt natus! Sint fugit dolores debitis. Aliquam totam neque ullam dolore. Doloremque
                sapiente maiores natus nulla quisquam ducimus aperiam porro rerum sunt? Facilis voluptatum eum modi
                neque dignissimos? Cupiditate iusto voluptates enim ipsa cum qui, omnis beatae fugiat aperiam dolore
                provident porro quasi, ab molestiae nulla similique illum blanditiis consectetur harum, non molestias
                laborum nihil voluptate nemo. Exercitationem.
              </p>
            </div>
          </div>
        </article>
        <section class="bg-gradient-to-b from-[#5A0C69] to-[#0F3069] text-white flex px-4 py-8 md:px-36">
          <div class="flex flex-col justify-center md:pr-16">
            <strong>
              <h2 class="text-3xl mb-2 md:mb-8">Notre équipe</h2>
            </strong>
            <strong>
              <p class="text-2xl my-6 md:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Aliquam totam neque ullam dolore.
              </p>
            </strong>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna.
            </p>
          </div>
          <img class="hidden md:block" src="..\images\background-team-bulles.svg" />
        </section>
        <section>
          <ul class="md:flex md:flex-wrap md:px-28 pt-20">
            <li class="flex flex-col items-center text-black mb-12 md:items-start md:pr-10">
              <img
                class="object-cover w-full md:object-none md:w-auto"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="flex justify-center mt-4">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="flex flex-col items-center text-black mb-12 md:items-start md:pr-10">
              <img
                class="object-cover w-full md:object-none md:w-auto"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="flex justify-center mt-4">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="flex flex-col items-center text-black mb-12 md:items-start md:pr-10">
              <img
                class="object-cover w-full md:object-none md:w-auto"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="flex justify-center mt-4">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="flex flex-col items-center text-black mb-12 md:items-start md:pr-10">
              <img
                class="object-cover w-full md:object-none md:w-auto"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="flex justify-center mt-4">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="flex flex-col items-center text-black mb-12 md:items-start md:pr-10">
              <img
                class="object-cover w-full md:object-none md:w-auto"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="flex justify-center mt-4">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
            <li class="flex flex-col items-center text-black mb-12 md:items-start md:pr-10">
              <img
                class="object-cover w-full md:object-none md:w-auto"
                alt="portrait de Djebrine Aloui"
                src="..\images\presentation-image-profil.png"
              />
              <h3 class="my-2 text-2xl">Djebrine Aloui</h3>
              <i>CEO et fondateur</i>
              <div class="flex justify-center mt-4">
                <a href="#">
                  <img class="mr-2" alt="logo de LinkedIn" src="..\images\logo-linkedin-gris.svg" />
                </a>
                <a href="#">
                  <img class="ml-2" alt="logo d'instagram" src="..\images\logo-instagram-gris.svg" />
                </a>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Presentation",
};
