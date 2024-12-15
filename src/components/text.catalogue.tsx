interface TextCatalogueProps {
  text_first: string;
  text_second?: string;
}
export default function TextCatalogue({
  text_first,
  text_second,
}: TextCatalogueProps) {
  return (
    <h1 className="text-4xl text-nowrap flex items-center gap-2">
      <span className="p-1 bg-emerald-600 text-white">{text_first}</span>{" "}
      {text_second}
    </h1>
  );
}
