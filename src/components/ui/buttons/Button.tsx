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
      class={`bg-${primaryColor} rounded-md px-8 py-4 text-${secondaryColor} text-xl ${styles} hover:scale-105`}
      href={props.href}
    >
      {props.label}
    </a>
  );
});
