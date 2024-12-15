import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import { Document as RichTextDocuments } from "@contentful/rich-text-types";
export interface TypeContentField {
  title: EntryFieldTypes.Text;
  slug?: EntryFieldTypes.Text;
  body: EntryFieldTypes.RichText;
  createdAt: EntryFieldTypes.Date;
  category: EntryFieldTypes.Text[];
  image: IContentfulAsset;
  shortDescription: EntryFieldTypes.Text;
}

export interface IContentfulAsset {
  sys: {
    id: string;
  };
  fields: {
    file: {
      url: string;
      fileName: string;
      contentType?: string;
    };
  };
}

export type TypeTravelContentSkeleton = EntrySkeletonType<
  TypeContentField,
  "travel"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTravelContentSkeleton, Modifiers, Locales>;

export interface ICategory {
  fields: {
    category: string;
  };
}

export interface IPostFields {
  title: string;
  createdAt: string;
  body: RichTextDocuments;
  image: IContentfulAsset;
  category: ICategory[];
  shortDescription?: string;
  slug?: string;
}
