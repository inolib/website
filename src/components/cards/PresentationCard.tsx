import { component$ } from "@builder.io/qwik";

type PresentationCardProps = {
  name: string;
  position: string;
  imageSrc: string;
  linkLinkdin?: string;
  linkInsta?: string;
};

export const PresentationCard = component$((props: PresentationCardProps) => {
  return (
    <>
      <li class="mb-16 flex flex-col items-center text-black md:items-start md:pr-10">
        <img
          class="w-full object-cover md:w-auto md:object-none"
          alt={`portrait de ${props.name}`}
          src={props.imageSrc}
        />
        <h3 class="my-2 text-2xl">{props.name}</h3>
        <i>{props.position}</i>
        <div class="mt-4 flex justify-center">
          <a href={props.linkLinkdin}>
            <img class="mr-2" alt="logo de LinkedIn" src="\images\logo-linkedin-gris.svg" />
          </a>
          <a href={props.linkInsta}>
            <img class="ml-2" alt="logo d'instagram" src="\images\logo-instagram-gris.svg" />
          </a>
        </div>
      </li>
    </>
  );
});
