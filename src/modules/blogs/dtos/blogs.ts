export interface CreateBlogDTO {
  title: string;
  content?: ContentDTO[];
  image: string;
  userId: string;
}

export interface ContentDTO {
  subtitle: string;
  paragraph: string;
}
