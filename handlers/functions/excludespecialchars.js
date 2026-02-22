module.exports = [{
    name: "excludespecialchars",
    params: ["content"],
    code: `
    $let[message;$advancedReplace[$env[content];+;;-;;/;;%;;&;;$;;#;;^;;(;;);;*;;!;;?;]]

    $return[$get[message]]
    `
}]
