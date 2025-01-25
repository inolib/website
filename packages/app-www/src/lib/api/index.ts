export interface ContentManagementService {
  getBlogPostBySlug(slug: string, populate: string): Promise<any>;
  getBlogPosts(populate: string): Promise<any>;
  login?(identifier: string, password: string): Promise<any>;
}
