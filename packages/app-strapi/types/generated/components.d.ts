
import type { Schema, Struct } from "@strapi/strapi";

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

export interface ComponentListItem extends Struct.ComponentSchema {
  collectionName: "components_component_list_items";
  info: {
    description: "";
    displayName: "ListItem";
  };
  attributes: {
    ListItem: Schema.Attribute.Blocks & Schema.Attribute.Required;
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

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "component.contact-info": ComponentContactInfo;
      "component.list-item": ComponentListItem;
      "component.privacy-policy-section": ComponentPrivacyPolicySection;
      "component.section": ComponentSection;
      "component.sous-lien": ComponentSousLien;
    }
  }
}

