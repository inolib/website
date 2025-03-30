import type { Schema, Struct } from "@strapi/strapi";

export interface FormationsConcepts extends Struct.ComponentSchema {
  collectionName: "components_formations_concepts";
  info: {
    displayName: "Concepts";
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    image: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
    titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "formations.concepts": FormationsConcepts;
    }
  }
}
