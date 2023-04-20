import { component$ } from "@builder.io/qwik";

type LineProps = {
  category: string;
  date: string;
  information: string;
  name: string;
  type: string;
};

export const DocumentTableLine = component$((props: LineProps) => {
  return (
    <>
      <tr class="h-14 border-b-[1px] border-[#E1E1E1]">
        <td class="px-5 py-3 md:py-0" scope="row">
          {props.name}
        </td>
        <td class="hidden px-5 py-3 sm:table-cell md:py-0">{props.category}</td>
        <td class="hidden px-5 py-3 sm:table-cell md:py-0">{props.date}</td>
        <td class="hidden px-5 py-3 sm:table-cell md:py-0">{props.type}</td>
        <td
          class="px-5 py-3 underline underline-offset-1 md:hidden md:py-0"
          aria-label="cliquez pour obtenir plus d'information sur le document"
        >
          {props.information}
        </td>
      </tr>
    </>
  );
});
