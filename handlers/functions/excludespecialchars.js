module.exports = [{
    name: "excludespecialchars",
    params: [{
        'name': 'content',
        'type': 'String',
        'required': true
    }],
    code: `
    $let[message;$advancedReplace[$env[content];+;;-;;/;;%;;&;;$;;#;;^;;(;;);;*;;!;;?;]]

    $return[$get[message]]
    `
}]
