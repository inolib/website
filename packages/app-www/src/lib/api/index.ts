export interface ContentManagementService {
  getBlogPostBySlug(slug: string): Promise<any>;
  getBlogPosts(populate: string, page: number, pageSize: number): Promise<any>;
  login?(identifier: string, password: string): Promise<any>;
}
