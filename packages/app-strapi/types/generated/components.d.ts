import type { Schema, Struct } from "@strapi/strapi";

export interface ComponentContactInfo extends Struct.ComponentSchema {
  collectionName: "components_component_contact_infos";
  info: {
    displayName: "contactInfo";
  };
  attributes: {
    adresseEmail: Schema.Attribute.String & Schema.Attribute.Required;
    adressePostale: Schema.Attribute.String & Schema.Attribute.Required;
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

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "component.contact-info": ComponentContactInfo;
      "component.list-item": ComponentListItem;
      "component.privacy-policy-section": ComponentPrivacyPolicySection;
    }
  }
}
