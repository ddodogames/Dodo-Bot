module.exports = [{
  name: "prefix",
  executeAt: "guild",
  code: `
  $setGuildVar[prefix;$message]
  changed prefix from \`$get[oldprefix]\` to \`$get[newprefix]\`
  $onlyIf[$getGuildVar[prefix]!=$message; this prefix is already in use]
  $cooldown[2s;slow down, don't spam the command]
  $onlyIf[$charCount[$message]<=5;prefix can't be longer than 5 characters]
  $let[newprefix;$message]
  $let[oldprefix;$getGuildVar[prefix]]
  $onlyIf[$message!=;prefix: \`$getGuildVar[prefix]\` (change prefix by putting symbol/letters/numbers in your cmd argument!)]
  $onlyPerms[manageguild;you need to have \`ManageServer\` perm]
  `
},{
    name: "prefix-reset",
    executeAt: "guild",
    aliases: "reset-prefix",
    code: ` $setGuildVar[prefix;]
the prefix has been successfully resetted <3
$onlyPerms[manageguild;you need to have \`ManageServer\` perm]
$cooldown[2s;slow down, don't spam the command]
$onlyIf[$getGuildVar[prefix]!=n!;cannot reset when the prefix is default]`
}]