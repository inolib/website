import type { Schema, Struct } from "@strapi/strapi";

export interface ComponentArticle extends Struct.ComponentSchema {
  collectionName: "components_component_articles";
  info: {
    description: "";
    displayName: "article";
  };
  attributes: {
    categorie: Schema.Attribute.Relation<"oneToMany", "api::categorie.categorie">;
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    titre: Schema.Attribute.String;
  };
}

export interface ComponentContactInfo extends Struct.ComponentSchema {
  collectionName: "components_component_contact_infos";
  info: {
    description: "";
    displayName: "contactInfo";
  };
  attributes: {
    adresseEmail: Schema.Attribute.String & Schema.Attribute.Required;
    adressePostale: Schema.Attribute.String & Schema.Attribute.Required;
    forme: Schema.Attribute.String;
    Immatriculation: Schema.Attribute.String;
    numero: Schema.Attribute.String;
    Responsable: Schema.Attribute.String;
    SIRET: Schema.Attribute.String;
    Societe: Schema.Attribute.String;
    Tva: Schema.Attribute.String;
  };
}

export interface ComponentContenu extends Struct.ComponentSchema {
  collectionName: "components_component_contenus";
  info: {
    description: "";
    displayName: "contenu";
    icon: "";
  };
  attributes: {
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    lien: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    titre: Schema.Attribute.String;
  };
}

export interface ComponentFoire extends Struct.ComponentSchema {
  collectionName: "components_component_foires";
  info: {
    displayName: "foire";
  };
  attributes: {
    question: Schema.Attribute.Text;
    reponse: Schema.Attribute.Text;
  };
}

export interface ComponentImagePartenaire extends Struct.ComponentSchema {
  collectionName: "components_component_image_partenaire_s";
  info: {
    displayName: "image-partenaire ";
  };
  attributes: {
    logo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    titre: Schema.Attribute.String;
  };
}

export interface ComponentListItem extends Struct.ComponentSchema {
  collectionName: "components_component_list_items";
  info: {
    description: "";
    displayName: "ListItem";
  };
  attributes: {
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    ListItem: Schema.Attribute.Blocks & Schema.Attribute.Required;
    titre: Schema.Attribute.String;
  };
}

export interface ComponentPrivacyPolicySection extends Struct.ComponentSchema {
  collectionName: "components_component_privacy_policy_sections";
  info: {
    description: "";
    displayName: "PrivacyPolicySection";
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<"component.contact-info", true>;
    ListItems: Schema.Attribute.Component<"component.list-item", true>;
  };
}

export interface ComponentSection extends Struct.ComponentSchema {
  collectionName: "components_component_sections";
  info: {
    description: "";
    displayName: "section";
  };
  attributes: {
    lien: Schema.Attribute.String;
    sousLiens: Schema.Attribute.Component<"component.sous-lien", true>;
    titre: Schema.Attribute.String;
  };
}

export interface ComponentSousLien extends Struct.ComponentSchema {
  collectionName: "components_component_sous_liens";
  info: {
    displayName: "sousLien";
  };
  attributes: {
    sousLiens: Schema.Attribute.String;
    Titre: Schema.Attribute.String;
  };
}

export interface ComponentTitre extends Struct.ComponentSchema {
  collectionName: "components_component_titres";
  info: {
    description: "";
    displayName: "titre";
  };
  attributes: {
    cles: Schema.Attribute.Component<"component.list-item", true>;
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    text: Schema.Attribute.String;
    titre: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "component.article": ComponentArticle;
      "component.contact-info": ComponentContactInfo;
      "component.contenu": ComponentContenu;
      "component.foire": ComponentFoire;
      "component.image-partenaire": ComponentImagePartenaire;
      "component.list-item": ComponentListItem;
      "component.privacy-policy-section": ComponentPrivacyPolicySection;
      "component.section": ComponentSection;
      "component.sous-lien": ComponentSousLien;
      "component.titre": ComponentTitre;
    }
  }
}
