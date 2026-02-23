module.exports = [{
    name: "filterembedflag",
    params: [{
        'name': 'text',
        'type': 'String',
        'required': true
    }],
    code: `
    $let[message;$advancedReplace[$env[text];--embed;;—embed;]]
    $return[$get[message]]
    `
}]
