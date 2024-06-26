import { component$ } from "@builder.io/qwik";

type PresentationCardProps = {
  imageSrc: string;
  linkLinkdin?: string;
  linkInsta?: string;
  name: string;
  position: string;
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
            <img class="mr-2" alt="" src="\images\logo-linkedin-gris.svg" aria-label={`Linkedin de ${props.name}`} />
          </a>
          <a href={props.linkInsta}>
            <img class="ml-2" alt="" src="\images\logo-instagram-gris.svg" aria-label={`Instagram de ${props.name}`} />
          </a>
        </div>
      </li>
    </>
  );
});
