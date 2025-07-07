import type { Schema, Struct } from "@strapi/strapi";

export interface FormationsCertification extends Struct.ComponentSchema {
  collectionName: "components_formations_certifications";
  info: {
    displayName: "certification";
  };
  attributes: {};
}

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

export interface FormationsPedagogicApproach extends Struct.ComponentSchema {
  collectionName: "components_formations_pedagogic_approaches";
  info: {
    description: "";
    displayName: "pedagogicApproach";
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface FormationsWhyUs extends Struct.ComponentSchema {
  collectionName: "components_formations_whyuses";
  info: {
    displayName: "whyUs";
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    image: Schema.Attribute.Media<"images", true> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: "components_section_heroes";
  info: {
    description: "";
    displayName: "Hero";
  };
  attributes: {
    heroButton: Schema.Attribute.Component<"shared.button", true>;
    heroImage: Schema.Attribute.Component<"shared.image", false>;
    subtitle: Schema.Attribute.Blocks;
    title: Schema.Attribute.Blocks;
  };
}

export interface SeoSeoMetadata extends Struct.ComponentSchema {
  collectionName: "components_seo_seo_metadata";
  info: {
    description: "";
    displayName: "seo_metadata";
    icon: "connector";
  };
  attributes: {
    canonicalURL: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    metaImage: Schema.Attribute.Media<"files" | "images">;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: "components_shared_buttons";
  info: {
    description: "";
    displayName: "Button";
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    external: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: "components_shared_images";
  info: {
    displayName: "Image";
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    decorative: Schema.Attribute.Boolean;
    media: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "formations.certification": FormationsCertification;
      "formations.concepts": FormationsConcepts;
      "formations.pedagogic-approach": FormationsPedagogicApproach;
      "formations.why-us": FormationsWhyUs;
      "section.hero": SectionHero;
      "seo.seo-metadata": SeoSeoMetadata;
      "shared.button": SharedButton;
      "shared.image": SharedImage;
    }
  }
}
