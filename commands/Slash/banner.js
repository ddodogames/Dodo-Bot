module.exports = {
    name: "banner",
    type: "interaction",
    prototype: "slash",
    info: {
        description: "Returns your/users profile banner."
    },
    code: `$interactionReply[{newEmbed:{title:$get[username]'s Banner}{image:$userBanner[$get[user]]}{color:$getVar[embedcolor]}}

    {actionRow:{button:Download:5:$nonEscape[$userBanner[$get[user]]]:false}};all;true]

    $onlyIf[$userBanner[$get[user]]!=null;This user does not have a banner attached to their profile.
    {ephemeral}
    {interaction}
    ]

    $let[username;$advancedReplaceText[$checkCondition[$hasUserTag[$get[user]]==false];true;$username[$get[user]];false;$userTag[$get[user]]]]
    $let[user;$advancedReplaceText[$checkCondition[$slashOption[user]==];true;$authorID;false;$slashOption[user]]]

    $onlyIf[$getVar[userapps]==true;User apps are currently disabled.
    {ephemeral}
    {interaction}
    ]
    `
}
