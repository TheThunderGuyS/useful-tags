const {
    stripIndent,
    stripAllIndents,
    oneLine,
    oneLineConcatenate
} = require("./dist/usefulTags.js");
{
    {
        const single = stripIndent`    This is ${"a"} single-line string. Random number: ${Math.random()}.`;
        const multi = stripIndent`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;

        console.log(`stripIndent tests:\n${single}\n${multi}\n`);
    }

    {
        const single = stripAllIndents`    This is ${"a"} single-line string. Random number: ${Math.random()}.`;
        const multi = stripAllIndents`This
    is
         ${"a"}
      multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;

        console.log(`stripAllIndents tests:\n${single}\n${multi}\n`);
    }

    {
        const single = oneLine`    This is ${"a"} single-line string. Random number: ${Math.random()}.`;
        const multi = oneLine`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;

        console.log(`oneLine tests:\n${single}\n${multi}\n`);
    }

    {
        const single = oneLineConcatenate`    This is ${"a"} single-line string. Random number: ${Math.random()}.`;
        const multi = oneLineConcatenate`
        This
        is
        ${"a"}
        multi-line
        newline
         
            indented  
        string.
        Random number: ${Math.random()}.`;

        console.log(`oneLineConcatenate tests:\n${single}\n${multi}\n`);
    }
}

console.log("CommonJS test complete. Scroll back to check over output.");
