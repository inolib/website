"use client";

import { useForm } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";
import { useCallback, useState, type ReactEventHandler } from "react";
import * as v from "valibot";

import { Button } from "~/components/button";
import { CheckboxField, TextAreaField, TextInputField, ToggleField } from "~/components/form";
// import { getCookie } from "~/helpers";
import { Link } from "~/components/link";

import { Dialog } from "./Dialog";

// const schema = v.object({
//   subject: v.array(v.pipe(v.string(), v.trim())),
// });

// type HubSpotField = {
//   objectTypeId: string;
//   name: keyof Schema;
//   value: Schema[keyof Schema];
// };

export const ContactForm = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const form = useForm({
    defaultValues: {
      subject: [] as string[],
      firstname: "",
      lastname: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
    validatorAdapter: valibotValidator(),
    onSubmit: (value) => {
      console.log(value);
    },
  });

  const handleCloseDialog: ReactEventHandler<HTMLDialogElement> = useCallback(() => {
    setIsError(false);
    setMessage("");
  }, []);

  // const handleSubmit: SubmitHandler<Schema> = useCallback(
  //   async (values) => {
  //     const fields: HubSpotField[] = [];

  //     for (const [name, value] of Object.entries(values) as Array<[keyof Schema, Schema[keyof Schema]]>) {
  //       if (Array.isArray(value)) {
  //         for (const item of value) {
  //           fields.push({ objectTypeId: "0-1", name, value: item });
  //         }
  //       } else {
  //         fields.push({ objectTypeId: "0-1", name, value });
  //       }
  //     }

  //     try {
  //       const response = await fetch(
  //         "https://api.hsforms.com/submissions/v3/integration/submit/26728987/8fbf4ed8-d4d5-4465-b6e2-6f5c112e9033",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             context: {
  //               hutk: getCookie("hubspotutk"),
  //               pageName: globalThis.document.title,
  //               pageUri: globalThis.location.href,
  //             },
  //             fields,
  //           }),
  //         },
  //       );

  //       if (response.ok) {
  //         reset(form);

  //         setIsError(false);
  //         setMessage(((await response.json()) as { inlineMessage: string }).inlineMessage);
  //       } else {
  //         setIsError(true);
  //         setMessage("Une erreur s’est produite durant l’envoi de votre message, veuillez réessayer.");
  //       }
  //     } catch {
  //       setIsError(true);
  //       setMessage("Une erreur s’est produite durant l’envoi de votre message, veuillez réessayer.");
  //     }
  //   },
  //   [form],
  // );

  return (
    <form
      className="flex max-w-prose flex-col gap-8"
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        void form.handleSubmit();
      }}
      noValidate
    >
      <div className="flex flex-col gap-16">
        <fieldset>
          <legend className="text-2xl font-bold">Sujet</legend>

          <form.Field mode="array" name="subject">
            {() => (
              <ul className="mt-2 flex flex-wrap gap-4">
                {["Audit", "Accompagnement", "Développement", "Formations", "Partenariat", "Autre"].map(
                  (item, index) => (
                    <form.Field key={index} name={`subject[${index}]`}>
                      {(field) => (
                        <li>
                          <ToggleField
                            _label={item}
                            checked={field.state.value === item}
                            name={field.name}
                            onBlur={field.handleBlur}
                            onChange={(event) => {
                              field.handleChange(event.target.value);
                            }}
                          />
                        </li>
                      )}
                    </form.Field>
                  ),
                )}
              </ul>
            )}
          </form.Field>
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <legend className="text-2xl font-bold">Coordonnées</legend>

          <p className="mt-4">Sauf mention contraire, tous les champs sont obligatoires.</p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 sm:[&_[data-field]]:basis-1/2">
            <form.Field
              name="firstname"
              validators={{ onBlur: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre prénom.")) }}
            >
              {(field) => (
                <TextInputField
                  _errors={field.state.meta.errors}
                  _label="Prénom"
                  autoComplete="given-name"
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(event) => {
                    field.handleChange(event.target.value);
                  }}
                  type="text"
                  value={field.state.value}
                  required
                />
              )}
            </form.Field>

            <form.Field
              name="lastname"
              validators={{
                onBlur: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre nom de famille.")),
              }}
            >
              {(field) => (
                <TextInputField
                  _errors={field.state.meta.errors}
                  _label="Nom de famille"
                  autoComplete="family-name"
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(event) => {
                    field.handleChange(event.target.value);
                  }}
                  type="text"
                  value={field.state.value}
                  required
                />
              )}
            </form.Field>
          </div>

          <form.Field name="company" validators={{ onBlur: v.pipe(v.string(), v.trim()) }}>
            {(field) => (
              <TextInputField
                _errors={field.state.meta.errors}
                _label="Entreprise (optionnel)"
                autoComplete="organization"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(event) => {
                  field.handleChange(event.target.value);
                }}
                type="text"
                value={field.state.value}
              />
            )}
          </form.Field>

          <form.Field
            name="email"
            validators={{
              onBlur: v.pipe(
                v.string(),
                v.trim(),
                v.nonEmpty("Vous devez saisir votre adresse e-mail."),
                v.email("Adresse e-mail invalide."),
              ),
            }}
          >
            {(field) => (
              <TextInputField
                _errors={field.state.meta.errors}
                _label="Adresse e-mail"
                autoComplete="email"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(event) => {
                  field.handleChange(event.target.value);
                }}
                type="email"
                value={field.state.value}
                required
              />
            )}
          </form.Field>

          <form.Field
            name="phone"
            validators={{
              onBlur: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre numéro de téléphone.")),
            }}
          >
            {(field) => (
              <TextInputField
                _errors={field.state.meta.errors}
                _label="Numéro de téléphone"
                autoComplete="tel"
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(event) => {
                  field.handleChange(event.target.value);
                }}
                type="tel"
                value={field.state.value}
                required
              />
            )}
          </form.Field>
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <legend className="text-2xl font-bold">Message</legend>

          <div className="mt-4">
            <form.Field
              name="message"
              validators={{ onBlur: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre message.")) }}
            >
              {(field) => (
                <TextAreaField
                  _errors={field.state.meta.errors}
                  _label="Dites-nous en plus"
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(event) => {
                    field.handleChange(event.target.value);
                  }}
                  rows={5}
                  value={field.state.value}
                  required
                />
              )}
            </form.Field>
          </div>

          <form.Field
            name="consent"
            validators={{ onBlur: v.literal(true, "Vous devez accepter notre politique de confidentialité.") }}
          >
            {(field) => (
              <CheckboxField
                _errors={field.state.meta.errors}
                _label={
                  <>
                    En envoyant votre message, vous acceptez notre{" "}
                    <span className="text-nowrap">
                      <Link
                        _color="transparent"
                        _shape="link"
                        className="underline focus-visible:outline-black"
                        href="/politique-de-confidentialite"
                      >
                        politique de confidentialité
                      </Link>
                      .
                    </span>
                  </>
                }
                checked={field.state.value}
                onBlur={field.handleBlur}
                onChange={(event) => {
                  field.handleChange(event.target.checked);
                }}
                value="Oui"
                required
              />
            )}
          </form.Field>
        </fieldset>
      </div>

      <Button _color="blue-900" className="self-center" type="submit">
        Envoyer votre message
      </Button>

      <pre>{JSON.stringify(form.state.values, null, 2)}</pre>

      <Dialog _message={message} onClose={handleCloseDialog} role={isError ? "alertdialog" : "dialog"} />
    </form>
  );
};
