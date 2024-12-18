import { Document } from "@contentful/rich-text-types";
import { IContentfulAsset } from "./contentful";

export interface IPostCardWithFields {
  fields: {
    slug?: string;
    title: string;
    body: Document;
    createdAt: string | Date;
    image: IContentfulAsset;
    category?: ICategory[];
    shortDescription: string;
  };
}

export interface IPostCardWithoutFields {
  slug?: string;
  title: string;
  body?: Document;
  createdAt: string | Date;
  image: IContentfulAsset;
  category: string[];
  shortDescription: string;
}

export interface ICategory {
  fields: {
    category: string;
  };
}


export interface searchPost {
  fields: { 
    title: string;
    slug: string;
    image?: IContentfulAsset,
  };
}
