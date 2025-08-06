module.exports = {
    name: "setcustomstatus",
    info: {
      description: "Sets a custom status for the bot",
      usage: "`setcustomstatus <text> or (flag)`",
      perms: ["`SendMessages`"],
      flags: ["`--reset`"],
      dev: "true"
    },
    aliases: ["scs", "customstatus"],
    $if: "old",
    code: `
$if[$stringStartsWith[$tolowercase[$message];--reset;—reset]==true]
$setStatus[;custom;online]
Status has been reset! You can set a status again if you would like to do so.
$onlyIf[$userCustomStatus[$guildID;$clientID]!=none;There is no status to reset.]
$else
$setStatus[$message;custom]
Status has been set! You can remove it by passing the flag \`--reset\` at the start of your message.
$onlyIf[$charCount[$message]<=128;You can only have up to 128 characters for each custom status you set.]
$endif
$onlyIf[$message!=;Please enter an text. You can also reset the current status by passing the flag \`--reset\` as first argument of the cmd.]
$cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;setcustomstatus;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]`
    
    }
