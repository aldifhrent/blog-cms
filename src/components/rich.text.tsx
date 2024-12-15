import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocuments } from "@contentful/rich-text-types";

type RichTextProps = {
  document: RichTextDocuments | undefined;
  className?: string;
};

export default function RichText({ document, className }: RichTextProps) {
  if (!document) return null;

  return (
    <div className={`${className}`}>{documentToReactComponents(document)}</div>
  );
}
