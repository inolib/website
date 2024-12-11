"use client";

import { useState } from "react";
import DOMPurify from "dompurify";
import { CommentForm } from "~/components/app/comment";

const ArticleContent = ({ post }: { post: any }) => {

  console.log("Données reçues par ArticleContent :", post)
  const [comments, setComments] = useState(post.commentaires || []); 

  const handleCommentAdded = (newComment: any) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <>
      {/* Affichage de l'article */}
      <div className="ml-10 grid gap-8 md:grid-cols-2">
        <div className="px-10 py-14">
          <span
            className="text-gray-800 mb-2 inline-block rounded-full bg-[#CBE0E4] px-2 py-1 text-xs font-semibold uppercase tracking-wide"
          >
            {post.Categorie || "Non catégorisé"}
          </span>
          <h1 className="mt-2 text-3xl font-semibold">{post.titre || "Titre non disponible"}</h1>
          <p className="mb-6 font-manrope">
            {post.Auteur || "Auteur inconnu"}{" "}
            {post.date
              ? new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "Date non disponible"}
          </p>
          <article className="text-gray-700">
            {Array.isArray(post.contenu) ? ( 
              post.contenu.map((block: any, index: number) =>
                block.type === "paragraph" ? (
                  <p key={index}>
                    {block.children.map((child: any, childIndex: number) => (
                      <span key={childIndex}>{child.text}</span>
                    ))}
                  </p>
                ) : null
              )
            ) : (
              <p>Contenu non disponible</p>
            )}
          </article>
        </div>
        <div>
          {post.image?.url ? (
            <img
              alt=""
              className="m-auto"
              height={500}
              src={post.image.url}
              width={500}
            />
          ) : (
            <p>Aucune image disponible</p>
          )}
        </div>
      </div>

      {/* Formulaire de commentaire */}
      <div className="flex flex-row justify-between">
        <img alt="" className="m-auto" height={200} src="/" width={200} />
        <CommentForm articleId={post.id} onCommentAdded={handleCommentAdded} />
      </div>

      {/* Liste des commentaires */}
      <div>
        <h2 className="mt-8 text-xl font-semibold">Commentaires</h2>
        {comments.length > 0 ? (
          comments.map((comment: any) => (
            <div
              aria-label="Lire le commentaire"
              className="comment justify-end py-4"
              key={comment.id}
            >
              <p>
                <strong>{comment.username || "Anonyme"}</strong>
              </p>
              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.content) }} />
            </div>
          ))
        ) : (
          <p>Aucun commentaire pour le moment.</p>
        )}
      </div>
    </>
  );
};

export default ArticleContent;
