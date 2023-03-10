import { component$ } from "@builder.io/qwik";

type ButtonProps = {
  color: "blue" | "white";
  href: string;
  label: string;
  styles?: string;
};

export const Button = component$((props: ButtonProps) => {
  const primaryColor = props.color === "white" ? "white" : "[#0B3168]";
  const secondaryColor = props.color === "white" ? "[#0B3168]" : "white";
  const styles = props.styles !== undefined ? props.styles : "";

  return (
    <a
      class={`bg-${primaryColor} px-8 py-4 text-${secondaryColor} text-xl rounded-md`}
      href={props.href}
      styles={props.styles}
    >
      {props.label}
    </a>
  );
});
