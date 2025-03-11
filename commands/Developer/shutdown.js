module.exports = [{
    name: "shutdown",
    info: {
      description: "Brings up a confirmation before shutting down the bot.",
      perms: ["`SendMessages`"],
      flags: ["`--now`"],
      dev: "true"
    },
    code: `$ifAwaited[$checkContains[$message;--now;—now]==true;{execute:shutdownbyforce};{execute:shutdownwithconfirmation}]

$cooldown[2s;Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;shutdown;$authorID];$dateStamp];1000]]:R>]
$onlyIf[$checkContains[$clientOwnerIDs[| ];$authorID]==true;]
      `
},{
    name: "shutdownbyforce",
    type: "awaited",
    code: `$shutdown`
},{
    name: "shutdownwithconfirmation",
    type: "awaited",
    code: `$title[Shutdown]
$description[Do you really want to shutdown the bot? This will simply stop your bot from running. To turn on the bot, you need to go through your host to start it again.]
$color[Red]
$thumbnail[https://us-east-1.tixte.net/uploads/dodo-bot.wants.solutions/warning.png]
$addButton[1;No;2;shutdowndeny_$authorID;false]
$addButton[1;Yes;2;shutdownconfirm_$authorID;false]`
}]
