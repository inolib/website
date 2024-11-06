export interface Member {
  createdAt: string;
  Description: string | null;
  documentId: string;
  id: number;
  Nom: string;
  photo: Record<string, never> | null;
  publishedAt: string;
  Role: string | null;
  updatedAt: string;
}

export interface ApiResponse {
  data: Member[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
