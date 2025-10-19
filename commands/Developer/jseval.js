module.exports = {
    name: "jseval",
    info: {
      description: "Executes codes for testing (in discord.js only).",
      usage: "`jseval <code>`",
      perms: ["`SendMessages`"],
      flags: ["`--return`"],
      dev: "true"
    },
    aliases: ["jse", "djseval", "djse"],
    $if: "old",
    code: `
$if[$checkContains[$message;--return;—return]==true]
$djsEval[$get[content];true]
$else
$djsEval[$message]
$endif
$let[content;$removeContains[$message;--return;—return]]
$onlyIf[$message!=;You need to provide a code.]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
    `
  }
