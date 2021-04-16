export as namespace usefulTags;
interface templateTag {
    (templateString: TemplateStringsArray, ...literals: any[]): string;
    (strings: string | any[]): string;
}
export const stripIndent: templateTag;
export const stripAllIndents: templateTag;
export const oneLine: templateTag;
export const oneLineConcatenate: templateTag;
