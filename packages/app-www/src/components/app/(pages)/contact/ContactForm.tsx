"use client";

import { reset, toTrimmed, useForm, valiForm, type SubmitHandler } from "@modular-forms/react";
import { useSignals } from "@preact/signals-react/runtime";
import { useCallback, useState, type ReactEventHandler } from "react";
import * as v from "valibot";

import { Button } from "~/components/button";
import { CheckboxField, TextAreaField, TextInputField, ToggleField } from "~/components/form";
import { Link } from "~/components/link";
import { getCookie } from "~/helpers";

import { Dialog } from "./Dialog";

const schema = v.object({
  subject: v.array(v.pipe(v.string(), v.trim())),
  firstname: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre prénom.")),
  lastname: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre nom de famille.")),
  company: v.pipe(v.string(), v.trim()),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty("Vous devez saisir votre adresse e-mail."),
    v.email("Adresse e-mail invalide."),
  ),
  phone: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre numéro de téléphone.")),
  message: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre message.")),
  consent: v.literal(true, "Vous devez accepter notre politique de confidentialité."),
});

type Schema = v.InferInput<typeof schema>;

type HubSpotField = {
  objectTypeId: string;
  name: keyof Schema;
  value: Schema[keyof Schema];
};

export const ContactForm = () => {
  useSignals();

  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const [form, { Field, Form }] = useForm<Schema>({
    validate: valiForm(schema),
    validateOn: "submit",
    revalidateOn: "change",
  });

  const handleCloseDialog: ReactEventHandler<HTMLDialogElement> = useCallback(() => {
    setIsError(false);
    setMessage("");
  }, []);

  const handleSubmit: SubmitHandler<Schema> = useCallback(
    async (values) => {
      const fields: HubSpotField[] = [];

      for (const [name, value] of Object.entries(values) as Array<[keyof Schema, Schema[keyof Schema]]>) {
        if (Array.isArray(value)) {
          for (const item of value) {
            fields.push({ objectTypeId: "0-1", name, value: item });
          }
        } else {
          fields.push({ objectTypeId: "0-1", name, value });
        }
      }

      try {
        const response = await fetch(
          "https://api.hsforms.com/submissions/v3/integration/submit/26728987/8fbf4ed8-d4d5-4465-b6e2-6f5c112e9033",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              context: {
                hutk: getCookie("hubspotutk"),
                pageName: globalThis.document.title,
                pageUri: globalThis.location.href,
              },
              fields,
            }),
          },
        );

        if (response.ok) {
          reset(form);

          setIsError(false);
          setMessage(((await response.json()) as { inlineMessage: string }).inlineMessage);
        } else {
          setIsError(true);
          setMessage("Une erreur s’est produite durant l’envoi de votre message, veuillez réessayer.");
        }
      } catch {
        setIsError(true);
        setMessage("Une erreur s’est produite durant l’envoi de votre message, veuillez réessayer.");
      }
    },
    [form],
  );

  return (
    <Form className="flex max-w-prose flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-16">
        <fieldset>
          <legend className="text-2xl font-bold">Sujet</legend>

          <Field name="subject" type="string[]">
            {(field, passthru) => (
              <ul className="mt-4 flex flex-wrap gap-4">
                {["Audit", "Accompagnement", "Développement", "Formations", "Partenariat", "Autre"].map(
                  (item, index) => (
                    <li key={index}>
                      <ToggleField _label={item} checked={field.value.value?.includes(item) ?? false} {...passthru} />
                    </li>
                  ),
                )}
              </ul>
            )}
          </Field>
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <legend className="text-2xl font-bold">Coordonnées</legend>

          <p className="mt-4">Sauf mention contraire, tous les champs sont obligatoires.</p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 sm:[&_[data-field]]:basis-1/2">
            <Field name="firstname" transform={toTrimmed({ on: "blur" })}>
              {(field, passthru) => (
                <TextInputField
                  _error={field.error}
                  _label="Prénom"
                  autoComplete="given-name"
                  type="text"
                  value={field.value.value ?? ""}
                  required
                  {...passthru}
                />
              )}
            </Field>

            <Field name="lastname" transform={toTrimmed({ on: "blur" })}>
              {(field, passthru) => (
                <TextInputField
                  _error={field.error}
                  _label="Nom de famille"
                  autoComplete="family-name"
                  type="text"
                  value={field.value.value ?? ""}
                  required
                  {...passthru}
                />
              )}
            </Field>
          </div>

          <Field name="company" transform={toTrimmed({ on: "blur" })}>
            {(field, passthru) => (
              <TextInputField
                _error={field.error}
                _label="Entreprise (optionnel)"
                autoComplete="organization"
                type="text"
                value={field.value.value ?? ""}
                {...passthru}
              />
            )}
          </Field>

          <Field name="email" transform={toTrimmed({ on: "blur" })}>
            {(field, passthru) => (
              <TextInputField
                _error={field.error}
                _label="Adresse e-mail"
                autoComplete="email"
                type="email"
                value={field.value.value ?? ""}
                required
                {...passthru}
              />
            )}
          </Field>

          <Field name="phone" transform={toTrimmed({ on: "blur" })}>
            {(field, passthru) => (
              <TextInputField
                _error={field.error}
                _label="Numéro de téléphone"
                autoComplete="tel"
                type="tel"
                value={field.value.value ?? ""}
                required
                {...passthru}
              />
            )}
          </Field>
        </fieldset>

        <fieldset className="flex flex-col gap-4">
          <legend className="text-2xl font-bold">Message</legend>

          <div className="mt-4">
            <Field name="message" transform={toTrimmed({ on: "blur" })}>
              {(field, passthru) => (
                <TextAreaField
                  _error={field.error}
                  _label="Dites-nous en plus"
                  rows={5}
                  value={field.value.value ?? ""}
                  required
                  {...passthru}
                />
              )}
            </Field>
          </div>

          <Field name="consent" type="boolean">
            {(field, passthru) => (
              <CheckboxField
                _error={field.error}
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
                checked={field.value.value ?? false}
                value="Oui"
                required
                {...passthru}
              />
            )}
          </Field>
        </fieldset>
      </div>

      <Button _color="blue-900" className="self-center" type="submit">
        Envoyer votre message
      </Button>

      <Dialog _message={message} onClose={handleCloseDialog} role={isError ? "alertdialog" : "dialog"} />
    </Form>
  );
};
