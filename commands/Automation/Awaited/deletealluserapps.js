module.exports = {
    name: "deleteuserapps",
    type: "awaited",
    code: `
    $deleteApplicationCommand[global;$getApplicationCommandID[avatar;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[8ball;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[about;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[banner;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[report;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[ping;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[randomcolor;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[reverse;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[owoify;global]]
    $deleteApplicationCommand[global;$getApplicationCommandID[invite;global]]
    `
}
