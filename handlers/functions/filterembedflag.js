module.exports = [{
    name: "filterembedflag",
    params: ["text"],
    code: `
    $let[message;$advancedReplace[$env[text];--embed;;—embed;]]
    $return[$get[message]]
    `
}]
