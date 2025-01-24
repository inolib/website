    export interface ContentManagementService {
        getBlogPosts(populate: string): Promise<any>,
        login?(identifier: string, password : string): Promise<any>,
    }