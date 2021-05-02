<h1 align="center">usefulTags</h1>
<p align="center">A tiny JavaScript library providing some useful template literal tags.</p>

---
![code size: < 5kb](https://img.shields.io/github/languages/code-size/thethunderguys/usefulTags) ![license: MIT](https://img.shields.io/github/license/thethunderguys/usefulTags?color=ff8c00) ![release: 1.x.x](https://img.shields.io/github/v/release/thethunderguys/usefulTags?sort=semver&color=32cd32) [![codefactor: A+](https://img.shields.io/codefactor/grade/github/thethunderguys/usefulTags/trunk?label=codefactor&logo=codefactor)](https://www.codefactor.io/repository/github/thethunderguys/usefultags) [![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&logoColor=1e90ff)](https://github.com/prettier/prettier)

usefulTags is a compact JavaScript library that adds a handful of commonly used template literal tags.
It aims to be simple by adding only the 4 most commonly used.

By default, template literals preserve all newlines and indents, which can be irritating and make source code look terrible.
usefulTags' primary purpose is to resolve this issue in the vast majority of use cases.

```js
import {stripIndent} from "usefultags";

stripIndent`
    Hello,
      World!`;

// Returns (notice the lack of indentation):
`Hello,
  World!`
```

## Table of Contents
- [Usage](#usage)
    - [Requirements](#requirements)
    - [Importing](#importing)
        - [Node](#node)
        - [Browsers](#browsers)
        - [Deno](#deno)
    - [Available Tags](#available-tags)
        - [`stripIndent`](#stripindent)
        - [`stripAllIndents`](#stripallindents)
        - [`oneLine`](#oneline)
        - [`oneLineConcatenate`](#onelineconcatenate)
    - [Tags on Regular Strings](#tags-on-regular-strings)
    - [TypeScript Usage](#typescript-usage)
- [License](#license)

## Usage
See [the MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) for details on how to use tagged template literals, and [available tags](#available-tags) for usage examples.

When used as a traditional function, any type is accepted.

A string is always returned.

### Requirements
- Any version of Node.js / iojs
- Any version of Deno
- Any other environment supporting ES5 array methods

usefulTags supports the vast majority of module loaders (CommonJS, ESModule, RequireJS, etc.) thanks to [UMD](https://github.com/umdjs/umd).

usefulTags works with transpilers like TypeScript and Babel, so you can write template literals in modern ES2015 syntax and transform it to ES5.
### Importing
See importable functions in [available tags](#available-tags).

The default namespace is `usefulTags` if you use an object for importing.
#### Node
Install with NPM (or yarn):
```
npm i usefultags
```

```js
// CommonJS loader:
const {stripIndent} = require("usefultags");

// RequireJS loader:
requirejs(["usefultags"], (usefulTags) => {
    // ...
});

// ESModule loader:
import {stripIndent} from "usefultags";
```

#### Browsers
Import from UNPKG:
```html
<!--Script to be used without module loader (ensure you replace @ver with a version tag)-->
<!--The namespace is "usefulTags" or "window.usefulTags"-->
<script src="https://unpkg.com/usefultags@ver"></script>
```
```js
// RequireJS loader (ensure you replace @ver with a version tag):
requirejs(["https://unpkg.com/usefultags@ver"], (usefulTags) => {
    // ...
});

// ESModule loader (again, ensure you replace @ver with a version tag):
// Remember that the ESModule version is located in the /dist/usefulTags.mjs path
import {stripIndent} from "https://unpkg.com/usefultags@ver/dist/usefulTags.mjs";
```

#### Deno
```js
// Ensure you replace @ver with a version tag
// This will import the module with TypeScript type defenitions (v1.1.0 and later)
// For regular JavaScript you should do a more traditional import like Node.js
import * as usefulTags from "https://deno.land/x/usefultags@ver/usefulTags.mjs";
import * as _usefulTags from "https://deno.land/x/usefultags@ver/usefulTags.d.ts";
const {stripIndent} = usefulTags as typeof _usefulTags;
```

### Available Tags:
These are all of the functions exposed by usefulTags.
#### `stripIndent`
Remove initial indentation from each line in a multi-line string, but keep intentionally larger indents.
Useful in deep nesting to keep multi-line strings looking clean and operational.

Note that if you mix tabs and spaces, there will be horrible results using this.
```js
stripIndent`
        This
        is
        ${"a"}
        multi-line
        newline

            indented
        string.
        Random number: ${Math.random()}.`;

// Returns
`This
is
a
multi-line
newline

    indented
string.
Random number: 0.xxxxxxxxxxxxxxxx.`
```

#### `stripAllIndents`
Remove *all* indentation from each line in a multi-line string.
Useful in deep nesting to keep multi-line strings looking clean and operational.
```js
stripAllIndents`This
    is
         ${"a"}
      multi-line
        newline

            indented
        string.
        Random number: ${Math.random()}.`;

// Returns
`This
is
a
multi-line
newline

indented
string.
Random number: 0.xxxxxxxxxxxxxxxx.`
```
#### `oneLine`
Merge a multi-line string onto one line.
Useful for keeping long lines looking nice in source code.
```js
oneLine`
        This
        is
        ${"a"}
        multi-line
        newline

            indented  /
        string.
        Random number: ${Math.random()}.`;

// Returns
"This is a multi-line newline indented  / string. Random number: 0.xxxxxxxxxxxxxxxx."
*/
```

#### `oneLineConcatenate`
Merge a multi-line string onto one line, without spaces.
Useful for URLs constructed using template literals.
```js
oneLineConcatenate`
        This
        is
        ${"a"}
        multi-line
        newline

            indented  /
        string.
        Random number: ${Math.random()}.`;

// Returns
"Thisisamulti-linenewlineindented  /string.Random number: 0.xxxxxxxxxxxxxxxx."

```

### Tags on Regular Strings
If needed, you can always use a tag without an actual template literal.
Call the tag as a function, supplying a string or array of strings as arguments.
```js
stripIndent("    Hello,\n      World!");

// Returns:
"Hello,\n  World!"
```

### TypeScript Usage
usefulTags v1.1.0 and later ship with TypeScript type defenitions by default. They should automatically be loaded when used in Node.js.
For Deno, the instructions in [Importing/Deno](#deno) detail how to import with type defenitions.

## License
usefulTags is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
