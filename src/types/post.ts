export interface Post {
  fields: {
    title: string;
    categories: string;
    slug?: string;
    postCreated: Date;
    shortDetails: string;
    thumbnail: {
      fields: {
        file: {
          fileName: string;
          url: string;
        };
      };
    };
  };
}
