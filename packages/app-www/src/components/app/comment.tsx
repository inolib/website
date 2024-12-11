"use client";

import { reset, toTrimmed, useForm, valiForm, type SubmitHandler } from "@modular-forms/react";
import { useSignals } from "@preact/signals-react/runtime";
import { useCallback, useState, type ReactEventHandler } from "react";
import * as v from "valibot";

import { Button } from "~/components/button";
import { TextAreaField, TextInputField } from "~/components/form";

import { Dialog } from "~/components/app/(pages)/contact/Dialog"

// Schéma de validation
const schema = v.object({
  username: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre nom d'utilisateur.")),
  email: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty("Vous devez saisir votre adresse e-mail."),
    v.email("Adresse e-mail invalide."),
  ),
  content: v.pipe(v.string(), v.trim(), v.nonEmpty("Vous devez saisir votre commentaire.")),
});

type Schema = v.InferInput<typeof schema>;

export const CommentForm = ({ articleId }: { articleId: number }) => {
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
      try {
        const response = await fetch(`http://localhost:1337/api/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              username: values.username,
              email: values.email,
              content: values.content,
              article: articleId, 
            },
          }),
        });

        if (response.ok) {
          reset(form);
          setIsError(false);
          setMessage("Votre commentaire a été soumis avec succès !");
        } else {
          setIsError(true);
          setMessage("Une erreur est survenue lors de l'envoi du commentaire. Veuillez réessayer.");
        }
      } catch {
        setIsError(true);
        setMessage("Une erreur est survenue lors de l'envoi du commentaire. Veuillez réessayer.");
      }
    },
    [form, articleId],
  );

  return (
    <Form className="flex max-w-prose flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-8">
        <fieldset className="flex flex-col gap-4">
          <legend className="text-2xl font-bold">Laissez un commentaire</legend>
          <p className="mt-4">Tous les champs sont obligatoires.</p>

          <Field name="username" transform={toTrimmed({ on: "blur" })}>
            {(field, passthru) => (
              <TextInputField
                _error={field.error}
                _label="Nom d'utilisateur"
                autoComplete="username"
                type="text"
                value={field.value.value ?? ""}
                required
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

          <Field name="content" transform={toTrimmed({ on: "blur" })}>
            {(field, passthru) => (
              <TextAreaField
                _error={field.error}
                _label="Votre commentaire"
                rows={5}
                value={field.value.value ?? ""}
                required
                {...passthru}
              />
            )}
          </Field>
        </fieldset>
      </div>

      <Button _color="blue-900" className="self-center" type="submit">
        Envoyer le commentaire
      </Button>

      <Dialog _message={message} onClose={handleCloseDialog} role={isError ? "alertdialog" : "dialog"} />
    </Form>
  );
};
