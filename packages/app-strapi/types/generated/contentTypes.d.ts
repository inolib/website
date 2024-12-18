import type { Schema, Struct } from "@strapi/strapi";

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: "strapi_api_tokens";
  info: {
    description: "";
    displayName: "Api Token";
    name: "Api Token";
    pluralName: "api-tokens";
    singularName: "api-token";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<"">;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::api-token"> & Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<"oneToMany", "admin::api-token-permission">;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<["read-only", "full-access", "custom"]> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"read-only">;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: "strapi_api_token_permissions";
  info: {
    description: "";
    displayName: "API Token Permission";
    name: "API Token Permission";
    pluralName: "api-token-permissions";
    singularName: "api-token-permission";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::api-token-permission"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<"manyToOne", "admin::api-token">;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: "admin_permissions";
  info: {
    description: "";
    displayName: "Permission";
    name: "Permission";
    pluralName: "permissions";
    singularName: "permission";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::permission"> & Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<"manyToOne", "admin::role">;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: "admin_roles";
  info: {
    description: "";
    displayName: "Role";
    name: "Role";
    pluralName: "roles";
    singularName: "role";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::role"> & Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<"oneToMany", "admin::permission">;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    users: Schema.Attribute.Relation<"manyToMany", "admin::user">;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: "strapi_transfer_tokens";
  info: {
    description: "";
    displayName: "Transfer Token";
    name: "Transfer Token";
    pluralName: "transfer-tokens";
    singularName: "transfer-token";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<"">;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::transfer-token"> & Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<"oneToMany", "admin::transfer-token-permission">;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: "strapi_transfer_token_permissions";
  info: {
    description: "";
    displayName: "Transfer Token Permission";
    name: "Transfer Token Permission";
    pluralName: "transfer-token-permissions";
    singularName: "transfer-token-permission";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::transfer-token-permission"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<"manyToOne", "admin::transfer-token">;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: "admin_users";
  info: {
    description: "";
    displayName: "User";
    name: "User";
    pluralName: "users";
    singularName: "user";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.Private & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.Private & Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "admin::user"> & Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<"manyToMany", "admin::role"> & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAccompagnementOperationnelAccompagnementOperationnel extends Struct.SingleTypeSchema {
  collectionName: "accompagnement_operationnels";
  info: {
    displayName: "Accompagnement op\u00E9rationnel";
    pluralName: "accompagnement-operationnels";
    singularName: "accompagnement-operationnel";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::accompagnement-operationnel.accompagnement-operationnel"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiAccompagnementStrategiqueAccompagnementStrategique extends Struct.SingleTypeSchema {
  collectionName: "accompagnement_strategiques";
  info: {
    displayName: "accompagnement strat\u00E9gique ";
    pluralName: "accompagnement-strategiques";
    singularName: "accompagnement-strategique";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::accompagnement-strategique.accompagnement-strategique"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiApprocheAccompagnementApprocheAccompagnement extends Struct.SingleTypeSchema {
  collectionName: "approche_accompagnements";
  info: {
    displayName: "Approche Accompagnement";
    pluralName: "approche-accompagnements";
    singularName: "approche-accompagnement";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::approche-accompagnement.approche-accompagnement"> &
      Schema.Attribute.Private;
    paraghraphe1: Schema.Attribute.Text;
    paragraphe2: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    titre1: Schema.Attribute.String;
    titre2: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiApprocheDevelopmentApprocheDevelopment extends Struct.CollectionTypeSchema {
  collectionName: "approche_developments";
  info: {
    description: "";
    displayName: "Approche-d\u00E9veloppement";
    pluralName: "approche-developments";
    singularName: "approche-development";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    ListItems: Schema.Attribute.Component<"component.list-item", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::approche-development.approche-development"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subTitre: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiApprocheInclusifUtilisateurApprocheInclusifUtilisateur extends Struct.SingleTypeSchema {
  collectionName: "approche_inclusif_utilisateurs";
  info: {
    description: "";
    displayName: "Approche inclusive utilisateur";
    pluralName: "approche-inclusif-utilisateurs";
    singularName: "approche-inclusif-utilisateur";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::approche-inclusif-utilisateur.approche-inclusif-utilisateur"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiApprochePedagogiqueApprochePedagogique extends Struct.CollectionTypeSchema {
  collectionName: "approche_pedagogiques";
  info: {
    description: "";
    displayName: "Approche p\u00E9dagogique";
    pluralName: "approche-pedagogiques";
    singularName: "approche-pedagogique";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::approche-pedagogique.approche-pedagogique"> &
      Schema.Attribute.Private;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    Titre: Schema.Attribute.String;
    titre1: Schema.Attribute.String;
    titre2: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiApprocheTestUtilisateurApprocheTestUtilisateur extends Struct.SingleTypeSchema {
  collectionName: "approche_test_utilisateurs";
  info: {
    description: "";
    displayName: "Approche test utilisateur";
    pluralName: "approche-test-utilisateurs";
    singularName: "approche-test-utilisateur";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::approche-test-utilisateur.approche-test-utilisateur"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiArticleArticle extends Struct.CollectionTypeSchema {
  collectionName: "articles";
  info: {
    description: "";
    displayName: "article";
    pluralName: "articles";
    singularName: "article";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Auteur: Schema.Attribute.Enumeration<["Djebrine Aloui", "Maria Grairi"]>;
    Categorie: Schema.Attribute.Enumeration<["Audit", "Accessibilit\u00E9", "RGAA"]>;
    commentaires: Schema.Attribute.Relation<"manyToMany", "api::commentaire.commentaire">;
    contenu: Schema.Attribute.Blocks;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    Date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<"images">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::article.article"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<"titre">;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiAssistanceTechniqueEtCorrectionAssistanceTechniqueEtCorrection extends Struct.SingleTypeSchema {
  collectionName: "assistance_technique_et_corrections";
  info: {
    displayName: "Assistance technique et correction";
    pluralName: "assistance-technique-et-corrections";
    singularName: "assistance-technique-et-correction";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.list-item", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::assistance-technique-et-correction.assistance-technique-et-correction"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiAuditDAccessibiliteAuditDAccessibilite extends Struct.SingleTypeSchema {
  collectionName: "audit_d_accessibilites";
  info: {
    displayName: "Audit d\u2019accessibilit\u00E9";
    pluralName: "audit-d-accessibilites";
    singularName: "audit-d-accessibilite";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::audit-d-accessibilite.audit-d-accessibilite"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiAuditsDeConformiteAuditsDeConformite extends Struct.SingleTypeSchema {
  collectionName: "audits_de_conformites";
  info: {
    description: "";
    displayName: "Intro Audits d'accessibilit\u00E9 ";
    pluralName: "audits-de-conformites";
    singularName: "audits-de-conformite";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::audits-de-conformite.audits-de-conformite"> &
      Schema.Attribute.Private;
    paragraphe: Schema.Attribute.Blocks;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiCategorieCategorie extends Struct.CollectionTypeSchema {
  collectionName: "categories";
  info: {
    displayName: "categorie";
    pluralName: "categories";
    singularName: "categorie";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categorie: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::categorie.categorie"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiCommentaireCommentaire extends Struct.CollectionTypeSchema {
  collectionName: "commentaires";
  info: {
    displayName: "commentaire";
    pluralName: "commentaires";
    singularName: "commentaire";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    articles: Schema.Attribute.Relation<"manyToMany", "api::article.article">;
    Auteur: Schema.Attribute.String;
    contenu: Schema.Attribute.Blocks;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    Date: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::commentaire.commentaire"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiCreationSiteInstitutionnelCreationSiteInstitutionnel extends Struct.SingleTypeSchema {
  collectionName: "creation_site_institutionnels";
  info: {
    displayName: "creation site institutionnel";
    pluralName: "creation-site-institutionnels";
    singularName: "creation-site-institutionnel";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::creation-site-institutionnel.creation-site-institutionnel"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiEngagementEngagement extends Struct.CollectionTypeSchema {
  collectionName: "engagements";
  info: {
    displayName: "Engagement";
    pluralName: "engagements";
    singularName: "engagement";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    list: Schema.Attribute.Component<"component.list-item", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::engagement.engagement"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiFoireAuxQuestionsAuditFoireAuxQuestionsAudit extends Struct.SingleTypeSchema {
  collectionName: "foire_aux_questions_audits";
  info: {
    description: "";
    displayName: "Foire aux questions audit";
    pluralName: "foire-aux-questions-audits";
    singularName: "foire-aux-questions-audit";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    foire: Schema.Attribute.Component<"component.foire", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::foire-aux-questions-audit.foire-aux-questions-audit"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiFoireAuxQuestionsUtilisateurFoireAuxQuestionsUtilisateur extends Struct.SingleTypeSchema {
  collectionName: "foire_aux_questions_utilisateurs";
  info: {
    description: "";
    displayName: "Foire aux questions utilisateur";
    pluralName: "foire-aux-questions-utilisateurs";
    singularName: "foire-aux-questions-utilisateur";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    foire: Schema.Attribute.Component<"component.foire", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::foire-aux-questions-utilisateur.foire-aux-questions-utilisateur"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiFooterFooter extends Struct.CollectionTypeSchema {
  collectionName: "footers";
  info: {
    description: "";
    displayName: "Footer";
    pluralName: "footers";
    singularName: "footer";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    imageQualiopi: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    lienQualiopi: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::footer.footer"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    reseau: Schema.Attribute.Component<"component.sous-lien", true>;
    sites: Schema.Attribute.Component<"component.sous-lien", true>;
    textQualiopi: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiFormationFormation extends Struct.CollectionTypeSchema {
  collectionName: "formations";
  info: {
    description: "";
    displayName: "Formation";
    pluralName: "formations";
    singularName: "formation";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    introduction: Schema.Attribute.String;
    ListItems: Schema.Attribute.Component<"component.titre", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::formation.formation"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiInolibAcademyInolibAcademy extends Struct.CollectionTypeSchema {
  collectionName: "inolib_academies";
  info: {
    description: "";
    displayName: "inolibAcademy";
    pluralName: "inolib-academies";
    singularName: "inolib-academy";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    introduction: Schema.Attribute.String;
    list: Schema.Attribute.Component<"component.list-item", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::inolib-academy.inolib-academy"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiIntroAIntroA extends Struct.CollectionTypeSchema {
  collectionName: "intro_as";
  info: {
    description: "";
    displayName: "introA";
    pluralName: "intro-as";
    singularName: "intro-a";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    introduction: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::intro-a.intro-a"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiIntroAccompagnementTechniqueIntroAccompagnementTechnique extends Struct.SingleTypeSchema {
  collectionName: "intro_accompagnement_techniques";
  info: {
    displayName: "intro Accompagnement technique";
    pluralName: "intro-accompagnement-techniques";
    singularName: "intro-accompagnement-technique";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::intro-accompagnement-technique.intro-accompagnement-technique"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiIntroAccompagnementIntroAccompagnement extends Struct.SingleTypeSchema {
  collectionName: "intro_accompagnements";
  info: {
    displayName: "intro Accompagnement";
    pluralName: "intro-accompagnements";
    singularName: "intro-accompagnement";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::intro-accompagnement.intro-accompagnement"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiIntroDevelopmentIntroDevelopment extends Struct.CollectionTypeSchema {
  collectionName: "intro_developments";
  info: {
    description: "";
    displayName: "intro-d\u00E9veloppement";
    pluralName: "intro-developments";
    singularName: "intro-development";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    introduction: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::intro-development.intro-development"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiIntroFormationIntroFormation extends Struct.CollectionTypeSchema {
  collectionName: "intro_formations";
  info: {
    description: "";
    displayName: "intro-formation";
    pluralName: "intro-formations";
    singularName: "intro-formation";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::intro-formation.intro-formation"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiIntroPageAccueilleIntroPageAccueille extends Struct.SingleTypeSchema {
  collectionName: "intro_page_accueilles";
  info: {
    displayName: "intro page accueil";
    pluralName: "intro-page-accueilles";
    singularName: "intro-page-accueille";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::intro-page-accueille.intro-page-accueille"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiIntroSiteVitrineIntroSiteVitrine extends Struct.CollectionTypeSchema {
  collectionName: "intro_site_vitrines";
  info: {
    displayName: "intro-site-vitrine";
    pluralName: "intro-site-vitrines";
    singularName: "intro-site-vitrine";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    introduction: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::intro-site-vitrine.intro-site-vitrine"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiIntroTestUtilisateurIntroTestUtilisateur extends Struct.SingleTypeSchema {
  collectionName: "intro_test_utilisateurs";
  info: {
    displayName: "intro test utilisateur";
    pluralName: "intro-test-utilisateurs";
    singularName: "intro-test-utilisateur";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::intro-test-utilisateur.intro-test-utilisateur"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiMembreMembre extends Struct.CollectionTypeSchema {
  collectionName: "membres";
  info: {
    description: "";
    displayName: "Membre";
    pluralName: "membres";
    singularName: "membre";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    Linkdin: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::membre.membre"> & Schema.Attribute.Private;
    Nom: Schema.Attribute.String;
    photo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    publishedAt: Schema.Attribute.DateTime;
    Role: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiMentionLegaleMentionLegale extends Struct.SingleTypeSchema {
  collectionName: "mention_legales";
  info: {
    description: "";
    displayName: "Mention l\u00E9gale";
    pluralName: "mention-legales";
    singularName: "mention-legale";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<"component.contact-info", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    introduction: Schema.Attribute.Blocks & Schema.Attribute.Required;
    list: Schema.Attribute.Component<"component.list-item", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::mention-legale.mention-legale"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiMethodologieAuditMethodologieAudit extends Struct.SingleTypeSchema {
  collectionName: "methodologie_audits";
  info: {
    displayName: "M\u00E9thodologie audit";
    pluralName: "methodologie-audits";
    singularName: "methodologie-audit";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.list-item", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::methodologie-audit.methodologie-audit"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiMissionMission extends Struct.CollectionTypeSchema {
  collectionName: "missions";
  info: {
    displayName: "Mission";
    pluralName: "missions";
    singularName: "mission";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    Description1: Schema.Attribute.Text;
    Description2: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::mission.mission"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre1: Schema.Attribute.String;
    titre2: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiOffresDAuditOffresDAudit extends Struct.SingleTypeSchema {
  collectionName: "offres_d_audits";
  info: {
    description: "";
    displayName: "offres d\u2019audit";
    pluralName: "offres-d-audits";
    singularName: "offres-d-audit";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.titre", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::offres-d-audit.offres-d-audit"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiPageContactPageContact extends Struct.SingleTypeSchema {
  collectionName: "page_contacts";
  info: {
    description: "";
    displayName: "Page contact";
    pluralName: "page-contacts";
    singularName: "page-contact";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    CardInfo: Schema.Attribute.Component<"component.list-item", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    introduction: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::page-contact.page-contact"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiPageQualiopiPageQualiopi extends Struct.SingleTypeSchema {
  collectionName: "page_qualiopis";
  info: {
    displayName: "certificat qualiopi";
    pluralName: "page-qualiopis";
    singularName: "page-qualiopi";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::page-qualiopi.page-qualiopi"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiPartenairePartenaire extends Struct.SingleTypeSchema {
  collectionName: "partenaires";
  info: {
    displayName: "partenaire";
    pluralName: "partenaires";
    singularName: "partenaire";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::partenaire.partenaire"> & Schema.Attribute.Private;
    logo: Schema.Attribute.Component<"component.image-partenaire", true>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiPlanDuSitePlanDuSite extends Struct.SingleTypeSchema {
  collectionName: "plan_du_sites";
  info: {
    description: "";
    displayName: "plan du site ";
    pluralName: "plan-du-sites";
    singularName: "plan-du-site";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    lien: Schema.Attribute.Component<"component.section", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::plan-du-site.plan-du-site"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiPlusLoinAccompagnementPlusLoinAccompagnement extends Struct.SingleTypeSchema {
  collectionName: "plus_loin_accompagnements";
  info: {
    description: "";
    displayName: "plus loin Accompagnement";
    pluralName: "plus-loin-accompagnements";
    singularName: "plus-loin-accompagnement";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::plus-loin-accompagnement.plus-loin-accompagnement"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiPlusLoinPlusLoin extends Struct.SingleTypeSchema {
  collectionName: "plus_loins";
  info: {
    displayName: "plus loin ";
    pluralName: "plus-loins";
    singularName: "plus-loin";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::plus-loin.plus-loin"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiPolitiqueDeConfidentialitePolitiqueDeConfidentialite extends Struct.SingleTypeSchema {
  collectionName: "politique_de_confidentialites";
  info: {
    description: "";
    displayName: "Politique de confidentialit\u00E9";
    pluralName: "politique-de-confidentialites";
    singularName: "politique-de-confidentialite";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contacInfo: Schema.Attribute.Component<"component.contact-info", true> & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    introduction: Schema.Attribute.Blocks & Schema.Attribute.Required;
    ListItem: Schema.Attribute.Component<"component.list-item", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::politique-de-confidentialite.politique-de-confidentialite"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiPourquoiDevelopmentPourquoiDevelopment extends Struct.SingleTypeSchema {
  collectionName: "pourquoi_developments";
  info: {
    description: "";
    displayName: "choisir-Inolib-d\u00E9veloppement";
    pluralName: "pourquoi-developments";
    singularName: "pourquoi-development";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    ListItems: Schema.Attribute.Component<"component.list-item", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::pourquoi-development.pourquoi-development"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.String;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiQualiopiQualiopi extends Struct.CollectionTypeSchema {
  collectionName: "qualiopis";
  info: {
    displayName: "qualiopi";
    pluralName: "qualiopis";
    singularName: "qualiopi";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    introduction: Schema.Attribute.String;
    list: Schema.Attribute.Component<"component.list-item", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::qualiopi.qualiopi"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiRecommandationAccompagnementRecommandationAccompagnement extends Struct.SingleTypeSchema {
  collectionName: "recommandation_accompagnements";
  info: {
    displayName: "Recommandation accompagnement";
    pluralName: "recommandation-accompagnements";
    singularName: "recommandation-accompagnement";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::recommandation-accompagnement.recommandation-accompagnement"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiReferentEnAccessibiliteReferentEnAccessibilite extends Struct.SingleTypeSchema {
  collectionName: "referent_en_accessibilites";
  info: {
    displayName: "R\u00E9f\u00E9rent en accessibilit\u00E9";
    pluralName: "referent-en-accessibilites";
    singularName: "referent-en-accessibilite";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::referent-en-accessibilite.referent-en-accessibilite"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiResultatsUtilisateurResultatsUtilisateur extends Struct.SingleTypeSchema {
  collectionName: "resultats_utilisateurs";
  info: {
    description: "";
    displayName: "R\u00E9sultats Utilisateur";
    pluralName: "resultats-utilisateurs";
    singularName: "resultats-utilisateur";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::resultats-utilisateur.resultats-utilisateur"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiServiceAccueilServiceAccueil extends Struct.SingleTypeSchema {
  collectionName: "service_accueils";
  info: {
    displayName: "Service-accueil";
    pluralName: "service-accueils";
    singularName: "service-accueil";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.titre", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::service-accueil.service-accueil"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiServiceDevelopmentServiceDevelopment extends Struct.CollectionTypeSchema {
  collectionName: "service_developments";
  info: {
    description: "";
    displayName: "service-d\u00E9veloppement";
    pluralName: "service-developments";
    singularName: "service-development";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    ListItems: Schema.Attribute.Component<"component.titre", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::service-development.service-development"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiSiteInstitutionnelSiteInstitutionnel extends Struct.SingleTypeSchema {
  collectionName: "site_institutionnels";
  info: {
    displayName: "Site institutionnel";
    pluralName: "site-institutionnels";
    singularName: "site-institutionnel";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::site-institutionnel.site-institutionnel"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiSiteVitrineSiteVitrine extends Struct.SingleTypeSchema {
  collectionName: "site_vitrines";
  info: {
    displayName: "site vitrine";
    pluralName: "site-vitrines";
    singularName: "site-vitrine";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::site-vitrine.site-vitrine"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sousTitre: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiSuiviEtMaintienDeLAccessibiliteSuiviEtMaintienDeLAccessibilite extends Struct.SingleTypeSchema {
  collectionName: "suivi_et_maintien_de_l_accessibilites";
  info: {
    displayName: "Suivi et maintien de l\u2019accessibilit\u00E9";
    pluralName: "suivi-et-maintien-de-l-accessibilites";
    singularName: "suivi-et-maintien-de-l-accessibilite";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    contenu: Schema.Attribute.Component<"component.contenu", true>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      "oneToMany",
      "api::suivi-et-maintien-de-l-accessibilite.suivi-et-maintien-de-l-accessibilite"
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiTemoignageTemoignage extends Struct.SingleTypeSchema {
  collectionName: "temoignages";
  info: {
    displayName: "t\u00E9moignage";
    pluralName: "temoignages";
    singularName: "temoignage";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    auteur: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::temoignage.temoignage"> & Schema.Attribute.Private;
    metier: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    temoignage: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiTitreArticleTitreArticle extends Struct.CollectionTypeSchema {
  collectionName: "titre_articles";
  info: {
    displayName: "Titre Article";
    pluralName: "titre-articles";
    singularName: "titre-article";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::titre-article.titre-article"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<"titre">;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface ApiValeurValeur extends Struct.CollectionTypeSchema {
  collectionName: "valeurs";
  info: {
    displayName: "Valeur";
    pluralName: "valeurs";
    singularName: "valeur";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    introduction: Schema.Attribute.String;
    list: Schema.Attribute.Component<"component.list-item", true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "api::valeur.valeur"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginCommentsComment extends Struct.CollectionTypeSchema {
  collectionName: "plugin_comments_comments";
  info: {
    description: "Comment content type";
    displayName: "Comment";
    kind: "collectionType";
    pluralName: "comments";
    singularName: "comment";
    tableName: "plugin-comments-comments";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    approvalStatus: Schema.Attribute.Enumeration<["PENDING", "APPROVED", "REJECTED"]>;
    authorAvatar: Schema.Attribute.String;
    authorEmail: Schema.Attribute.Email;
    authorId: Schema.Attribute.String;
    authorName: Schema.Attribute.String;
    authorUser: Schema.Attribute.Relation<"oneToOne", "plugin::users-permissions.user">;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blockedThread: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blockReason: Schema.Attribute.String;
    content: Schema.Attribute.Text & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    isAdminComment: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::comments.comment"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.String;
    removed: Schema.Attribute.Boolean;
    reports: Schema.Attribute.Relation<"oneToMany", "plugin::comments.comment-report">;
    threadOf: Schema.Attribute.Relation<"oneToOne", "plugin::comments.comment">;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginCommentsCommentReport extends Struct.CollectionTypeSchema {
  collectionName: "plugin_comments_reports";
  info: {
    description: "Reports content type";
    displayName: "Reports";
    kind: "collectionType";
    pluralName: "comment-reports";
    singularName: "comment-report";
    tableName: "plugin-comments-reports";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    content: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::comments.comment-report"> & Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    reason: Schema.Attribute.Enumeration<["BAD_LANGUAGE", "DISCRIMINATION", "OTHER"]> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"OTHER">;
    related: Schema.Attribute.Relation<"manyToOne", "plugin::comments.comment">;
    resolved: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Struct.CollectionTypeSchema {
  collectionName: "strapi_releases";
  info: {
    displayName: "Release";
    pluralName: "releases";
    singularName: "release";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<"oneToMany", "plugin::content-releases.release-action">;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::content-releases.release"> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<["ready", "blocked", "failed", "done", "empty"]> & Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction extends Struct.CollectionTypeSchema {
  collectionName: "strapi_release_actions";
  info: {
    displayName: "Release Action";
    pluralName: "release-actions";
    singularName: "release-action";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::content-releases.release-action"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<"manyToOne", "plugin::content-releases.release">;
    type: Schema.Attribute.Enumeration<["publish", "unpublish"]> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: "i18n_locale";
  info: {
    collectionName: "locales";
    description: "";
    displayName: "Locale";
    pluralName: "locales";
    singularName: "locale";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::i18n.locale"> & Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow extends Struct.CollectionTypeSchema {
  collectionName: "strapi_workflows";
  info: {
    description: "";
    displayName: "Workflow";
    name: "Workflow";
    pluralName: "workflows";
    singularName: "workflow";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON & Schema.Attribute.Required & Schema.Attribute.DefaultTo<"[]">;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::review-workflows.workflow"> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stages: Schema.Attribute.Relation<"oneToMany", "plugin::review-workflows.workflow-stage">;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage extends Struct.CollectionTypeSchema {
  collectionName: "strapi_workflows_stages";
  info: {
    description: "";
    displayName: "Stages";
    name: "Workflow Stage";
    pluralName: "workflow-stages";
    singularName: "workflow-stage";
  };
  options: {
    draftAndPublish: false;
    version: "1.1.0";
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<"#4945FF">;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::review-workflows.workflow-stage"> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<"manyToMany", "admin::permission">;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<"manyToOne", "plugin::review-workflows.workflow">;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: "files";
  info: {
    description: "";
    displayName: "File";
    pluralName: "files";
    singularName: "file";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<"manyToOne", "plugin::upload.folder"> & Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::upload.file"> & Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<"morphToMany">;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: "upload_folders";
  info: {
    displayName: "Folder";
    pluralName: "folders";
    singularName: "folder";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<"oneToMany", "plugin::upload.folder">;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    files: Schema.Attribute.Relation<"oneToMany", "plugin::upload.file">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::upload.folder"> & Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<"manyToOne", "plugin::upload.folder">;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer & Schema.Attribute.Required & Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission extends Struct.CollectionTypeSchema {
  collectionName: "up_permissions";
  info: {
    description: "";
    displayName: "Permission";
    name: "permission";
    pluralName: "permissions";
    singularName: "permission";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::users-permissions.permission"> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<"manyToOne", "plugin::users-permissions.role">;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Struct.CollectionTypeSchema {
  collectionName: "up_roles";
  info: {
    description: "";
    displayName: "Role";
    name: "role";
    pluralName: "roles";
    singularName: "role";
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    "content-manager": {
      visible: false;
    };
    "content-type-builder": {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::users-permissions.role"> & Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<"oneToMany", "plugin::users-permissions.permission">;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    users: Schema.Attribute.Relation<"oneToMany", "plugin::users-permissions.user">;
  };
}

export interface PluginUsersPermissionsUser extends Struct.CollectionTypeSchema {
  collectionName: "up_users";
  info: {
    description: "";
    displayName: "User";
    name: "user";
    pluralName: "users";
    singularName: "user";
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<"oneToMany", "plugin::users-permissions.user"> & Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<"manyToOne", "plugin::users-permissions.role">;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<"oneToOne", "admin::user"> & Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ContentTypeSchemas {
      "admin::api-token": AdminApiToken;
      "admin::api-token-permission": AdminApiTokenPermission;
      "admin::permission": AdminPermission;
      "admin::role": AdminRole;
      "admin::transfer-token": AdminTransferToken;
      "admin::transfer-token-permission": AdminTransferTokenPermission;
      "admin::user": AdminUser;
      "api::accompagnement-operationnel.accompagnement-operationnel": ApiAccompagnementOperationnelAccompagnementOperationnel;
      "api::accompagnement-strategique.accompagnement-strategique": ApiAccompagnementStrategiqueAccompagnementStrategique;
      "api::approche-accompagnement.approche-accompagnement": ApiApprocheAccompagnementApprocheAccompagnement;
      "api::approche-development.approche-development": ApiApprocheDevelopmentApprocheDevelopment;
      "api::approche-inclusif-utilisateur.approche-inclusif-utilisateur": ApiApprocheInclusifUtilisateurApprocheInclusifUtilisateur;
      "api::approche-pedagogique.approche-pedagogique": ApiApprochePedagogiqueApprochePedagogique;
      "api::approche-test-utilisateur.approche-test-utilisateur": ApiApprocheTestUtilisateurApprocheTestUtilisateur;
      "api::article.article": ApiArticleArticle;
      "api::assistance-technique-et-correction.assistance-technique-et-correction": ApiAssistanceTechniqueEtCorrectionAssistanceTechniqueEtCorrection;
      "api::audit-d-accessibilite.audit-d-accessibilite": ApiAuditDAccessibiliteAuditDAccessibilite;
      "api::audits-de-conformite.audits-de-conformite": ApiAuditsDeConformiteAuditsDeConformite;
      "api::categorie.categorie": ApiCategorieCategorie;
      "api::commentaire.commentaire": ApiCommentaireCommentaire;
      "api::creation-site-institutionnel.creation-site-institutionnel": ApiCreationSiteInstitutionnelCreationSiteInstitutionnel;
      "api::engagement.engagement": ApiEngagementEngagement;
      "api::foire-aux-questions-audit.foire-aux-questions-audit": ApiFoireAuxQuestionsAuditFoireAuxQuestionsAudit;
      "api::foire-aux-questions-utilisateur.foire-aux-questions-utilisateur": ApiFoireAuxQuestionsUtilisateurFoireAuxQuestionsUtilisateur;
      "api::footer.footer": ApiFooterFooter;
      "api::formation.formation": ApiFormationFormation;
      "api::inolib-academy.inolib-academy": ApiInolibAcademyInolibAcademy;
      "api::intro-a.intro-a": ApiIntroAIntroA;
      "api::intro-accompagnement-technique.intro-accompagnement-technique": ApiIntroAccompagnementTechniqueIntroAccompagnementTechnique;
      "api::intro-accompagnement.intro-accompagnement": ApiIntroAccompagnementIntroAccompagnement;
      "api::intro-development.intro-development": ApiIntroDevelopmentIntroDevelopment;
      "api::intro-formation.intro-formation": ApiIntroFormationIntroFormation;
      "api::intro-page-accueille.intro-page-accueille": ApiIntroPageAccueilleIntroPageAccueille;
      "api::intro-site-vitrine.intro-site-vitrine": ApiIntroSiteVitrineIntroSiteVitrine;
      "api::intro-test-utilisateur.intro-test-utilisateur": ApiIntroTestUtilisateurIntroTestUtilisateur;
      "api::membre.membre": ApiMembreMembre;
      "api::mention-legale.mention-legale": ApiMentionLegaleMentionLegale;
      "api::methodologie-audit.methodologie-audit": ApiMethodologieAuditMethodologieAudit;
      "api::mission.mission": ApiMissionMission;
      "api::offres-d-audit.offres-d-audit": ApiOffresDAuditOffresDAudit;
      "api::page-contact.page-contact": ApiPageContactPageContact;
      "api::page-qualiopi.page-qualiopi": ApiPageQualiopiPageQualiopi;
      "api::partenaire.partenaire": ApiPartenairePartenaire;
      "api::plan-du-site.plan-du-site": ApiPlanDuSitePlanDuSite;
      "api::plus-loin-accompagnement.plus-loin-accompagnement": ApiPlusLoinAccompagnementPlusLoinAccompagnement;
      "api::plus-loin.plus-loin": ApiPlusLoinPlusLoin;
      "api::politique-de-confidentialite.politique-de-confidentialite": ApiPolitiqueDeConfidentialitePolitiqueDeConfidentialite;
      "api::pourquoi-development.pourquoi-development": ApiPourquoiDevelopmentPourquoiDevelopment;
      "api::qualiopi.qualiopi": ApiQualiopiQualiopi;
      "api::recommandation-accompagnement.recommandation-accompagnement": ApiRecommandationAccompagnementRecommandationAccompagnement;
      "api::referent-en-accessibilite.referent-en-accessibilite": ApiReferentEnAccessibiliteReferentEnAccessibilite;
      "api::resultats-utilisateur.resultats-utilisateur": ApiResultatsUtilisateurResultatsUtilisateur;
      "api::service-accueil.service-accueil": ApiServiceAccueilServiceAccueil;
      "api::service-development.service-development": ApiServiceDevelopmentServiceDevelopment;
      "api::site-institutionnel.site-institutionnel": ApiSiteInstitutionnelSiteInstitutionnel;
      "api::site-vitrine.site-vitrine": ApiSiteVitrineSiteVitrine;
      "api::suivi-et-maintien-de-l-accessibilite.suivi-et-maintien-de-l-accessibilite": ApiSuiviEtMaintienDeLAccessibiliteSuiviEtMaintienDeLAccessibilite;
      "api::temoignage.temoignage": ApiTemoignageTemoignage;
      "api::titre-article.titre-article": ApiTitreArticleTitreArticle;
      "api::valeur.valeur": ApiValeurValeur;
      "plugin::comments.comment": PluginCommentsComment;
      "plugin::comments.comment-report": PluginCommentsCommentReport;
      "plugin::content-releases.release": PluginContentReleasesRelease;
      "plugin::content-releases.release-action": PluginContentReleasesReleaseAction;
      "plugin::i18n.locale": PluginI18NLocale;
      "plugin::review-workflows.workflow": PluginReviewWorkflowsWorkflow;
      "plugin::review-workflows.workflow-stage": PluginReviewWorkflowsWorkflowStage;
      "plugin::upload.file": PluginUploadFile;
      "plugin::upload.folder": PluginUploadFolder;
      "plugin::users-permissions.permission": PluginUsersPermissionsPermission;
      "plugin::users-permissions.role": PluginUsersPermissionsRole;
      "plugin::users-permissions.user": PluginUsersPermissionsUser;
    }
  }
}
