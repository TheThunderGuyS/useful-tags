export as namespace usefulTags;
interface templateTag {
    (templateLiteral: TemplateStringsArray, ...expressions: any[]): string;
    (string: string | any[]): string;
}
export const stripIndent: templateTag;
export const stripAllIndents: templateTag;
export const oneLine: templateTag;
export const oneLineConcatenate: templateTag;
