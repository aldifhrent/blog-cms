import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

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

export type TypeTravelContentSkeleton = EntrySkeletonType<TypeContentField>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTravelContentSkeleton, Modifiers, Locales>;
