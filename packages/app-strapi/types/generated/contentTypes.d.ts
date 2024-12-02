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

      "api::engagement.engagement": ApiEngagementEngagement;
      "api::inolib-academy.inolib-academy": ApiInolibAcademyInolibAcademy;
      "api::intro-a.intro-a": ApiIntroAIntroA;
      "api::membre.membre": ApiMembreMembre;
      "api::mention-legale.mention-legale": ApiMentionLegaleMentionLegale;
      "api::mission.mission": ApiMissionMission;
      "api::plan-du-site.plan-du-site": ApiPlanDuSitePlanDuSite;
      "api::politique-de-confidentialite.politique-de-confidentialite": ApiPolitiqueDeConfidentialitePolitiqueDeConfidentialite;
      "api::qualiopi.qualiopi": ApiQualiopiQualiopi;
      "api::valeur.valeur": ApiValeurValeur;

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
