module.exports = {
  name: "execute",
  info: {
    description: "Runs terminal commands directly in Discord",
    usage: "execute <code>",
    perms: ["`SendMessages`"],
    dev: "true"
  },
  $if: "old",
  aliases: "exec",
  code: `$if[$charCount[$exec[$message]]>=2000]
$createFile[$exec[$message];result.txt]
$else
\`\`\`$exec[$message]\`\`\`
$endif
$onlyIf[$message!=;Please send a terminal command to be executed.]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]

  `
}
