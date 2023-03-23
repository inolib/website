import { component$ } from "@builder.io/qwik";

type LineProps = {
  categorie: string;
  date: string;
  information: string;
  nom: string;
  type: string;
};

export const DocumentTableLine = component$((props: LineProps) => {
  return (
    <>
      <tr class="border-b-[1px] border-[#E1E1E1] h-14">
        <td class="px-5 py-3 md:py-0" scope="row">
          {props.nom}
        </td>
        <td class="hidden sm:table-cell px-5 py-3 md:py-0">{props.categorie}</td>
        <td class="hidden sm:table-cell px-5 py-3 md:py-0">{props.date}</td>
        <td class="hidden sm:table-cell px-5 py-3 md:py-0">{props.type}</td>
        <td
          class="md:hidden px-5 py-3 underline underline-offset-1 md:py-0"
          aria-label="cliquez pour obtenir plus d'information sur le document"
        >
          {props.information}
        </td>
      </tr>
    </>
  );
});
