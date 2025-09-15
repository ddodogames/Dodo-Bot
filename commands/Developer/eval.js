module.exports = {
  name: "eval",
  info: {
    description: "Executes codes for testing (in aoi.js only)",
    usage: "`eval <code>`",
    perms: ["`SendMessages`"],
    dev: "true"
  },
  aliases: "e",
  code: `
$eval[$message]
$onlyIf[$message!=;You need to provide a code.]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
  `
}
