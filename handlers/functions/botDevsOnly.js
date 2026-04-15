module.exports = [{
    name: "botDevsOnly",
    params: [],
    code: `
    $return[
        $if[$and[$getGlobalVar[AllowBotMembers]==true;$botTeamID!=];
        $arrayLoad[users;, ;$botTeamMembers[id]]
        $arrayLoad[roles;, ;$botTeamMembers[role]]
        $arrayLoad[membershipstate;, ;$botTeamMembers[membership]]

        $onlyIf[$checkContains[$arrayJoin[users;, ];$authorID]==true;]
        $onlyIf[$env[membershipstate;$arrayIndexOf[users;$authorID]]==Accepted;]
        $onlyIf[$env[roles;$arrayIndexOf[users;$authorID]]!=ReadOnly;]
        ;
        $onlyIf[$checkContains[$clientOwnerID[false];$authorID]==true;]
        ]
    ]


    `
}]
