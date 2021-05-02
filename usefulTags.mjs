// Convert all inputs to strings
function manageTypes(templateLiteral, ...expressions) {
    if (templateLiteral == null) return ""; // Prevent error on nullish input

    // Return string from TemplateStringsArray
    if (Array.isArray(templateLiteral)) {
        let convertedString = "";
        // Loop over array, adding each value to a string
        for (let index = 0; index < templateLiteral.length; ++index) {
            convertedString +=
                templateLiteral[index] + (expressions[index] || "");
        }
        return convertedString;
    }

    return templateLiteral.toString(); // If given anything else, return as a string
}

export function stripIndent(templateLiteral, ...expressions) {
    const string = manageTypes(templateLiteral, ...expressions);

    // Find whitespace characters at the beginning of lines, fall back to empty array if falsey
    const indentArray = string.match(/^[ \t]*(?=\S)/gm) || [];

    // Get the number of whitespace characters
    const indents = indentArray.reduce(
        (accumulator, currentValue) =>
            Math.min(accumulator, currentValue.length),
        Infinity
    );

    return string
        .replace(new RegExp(`^[ \t]{${indents}}`, "gm"), "") // Trim whitespace
        .replace(/^[ \t]+/, "") // Trim whitespace that may be trailing on the first line
        .replace(/^\n/, ""); // Trim the first newline
}

export function stripAllIndents(templateLiteral, ...expressions) {
    const string = manageTypes(templateLiteral, ...expressions);

    return string
        .replace(/^[ \t]+/gm, "") // Trim whitespace
        .replace(/^\n/, ""); // Trim the first newline
}

export function oneLine(templateLiteral, ...expressions) {
    const string = manageTypes(templateLiteral, ...expressions);

    return string
        .replace(/^\s+/gm, " ") // Trim all excess whitespace, replacing them with one space
        .replace(/\n|^\s/g, ""); // Trim the extra space and all newlines
}

export function oneLineConcatenate(templateLiteral, ...expressions) {
    const string = manageTypes(templateLiteral, ...expressions);

    return string.replace(/^\s+|\n\s+|\n/g, ""); // Trim all newlines and whitespace
}
