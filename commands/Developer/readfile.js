module.exports = {
    name: "readfile",
    info: {
      description: "Returns the contents of the file specified.",
      usage: "`readfile <path to file>`",
      perms: ["`SendMessages`", "`AttachFiles`"],
      dev: "true"
    },
    aliases: ["viewfile", "readcontent", "viewcontent"],
    $if: "old",
    code: `$if[$charCount[$readFile[$message]]>=2000]
$createFile[$readFile[$message];output.js]
$else
\`\`\`$readFile[$message]\`\`\`
$endif
$onlyIf[$fileExists[$message]==true;This file doesn't seem to exist.]
$onlyIf[$message!=;You need to specify a path of the file to view.]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
    `
  }
