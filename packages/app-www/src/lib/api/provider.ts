import type { ContentManagementService } from "./index";
import { StrapiService } from "./strapi";

const serviceName = process.env.CONTENT_MANAGEMENT_SERVICE || "strapi";

export const ContentManagementServiceFactory = (): ContentManagementService => {
  switch (serviceName) {
    case "strapi": {
      return StrapiService;
    }
    default: {
      return StrapiService;
    }
  }
};
