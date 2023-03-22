import { component$ } from "@builder.io/qwik";

type LineProps = {
  nom: string;
  categorie: string;
  date: string;
  type: string;
  information: string;
};

export const DocumentTableLine = component$((props: LineProps) => {
  return (
    <>
      <tr class="h-14 border-b-[1px] border-[#E1E1E1]">
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
