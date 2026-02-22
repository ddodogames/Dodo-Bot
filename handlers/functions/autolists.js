module.exports = [{
    name: "autoListText",
    params: ["variable", "sep"],
    code: `
    $c[Let's create the array.]
    $arrayLoad[totalList;$env[sep];$env[variable]]

    $c[Let's map each element of the array.]
    $arrayMap[totalList;element;
    $c[Get the text based on the current array element.]
    $if[$env[element]==none;
    $return[None];
    $return[* $trim[$env[element]]]
    ]

    ;result]

    $return[$arrayJoin[result;\n]]
    `
},{
    name: "autoListcategories",
    params: ["variable", "sep"],
    code: `
    $c[Let's create the array.]
    $arrayLoad[totalList;$env[sep];$env[variable]]

    $c[Let's map each element of the array.]
    $arrayMap[totalList;element;
    $c[Get the text based on the current array element.]
    $if[$env[element]==none;
    $return[None];
    $let[getcategories;$if[$guildChannelExists[$guildID;$env[element]];**$channelName[$trim[$env[element]]]**;\`Deleted Category\`]]
    $return[* $get[getcategories]]
    ]

    ;result]

    $return[$arrayJoin[result;\n]]
    `
},{
    name: "autoListroles",
    params: ["variable", "sep"],
    code: `
    $c[Let's create the array.]
    $arrayLoad[totalList;$env[sep];$env[variable]]

    $c[Let's map each element of the array.]
    $arrayMap[totalList;element;
    $c[Get the text based on the current array element.]
    $if[$env[element]==none;
    $return[None];
    $let[getroles;$if[$roleExists[$guildID;$env[element]];<@&$trim[$env[element]]>;\`Deleted Role\`]]
    $return[* $get[getroles]]
    ]

    ;result]

    $return[$arrayJoin[result;\n]]
    `
},{
    name: "autoListchannels",
    params: ["variable", "sep"],
    code: `
    $c[Let's create the array.]
    $arrayLoad[totalList;$env[sep];$env[variable]]

    $c[Let's map each element of the array.]
    $arrayMap[totalList;element;
    $c[Get the text based on the current array element.]
    $if[$env[element]==none;
    $return[None];
    $let[getchannels;$if[$guildChannelExists[$guildID;$env[element]];<#$trim[$env[element]]>;\`Deleted Channel\`]]
    $return[* $get[getchannels]]
    ]

    ;result]

    $return[$arrayJoin[result;\n]]
    `
},{
    name: "autoListServers",
    params: ["variable", "sep"],
    code: `
    $c[Let's create the array.]
    $arrayLoad[totalList;$env[sep];$env[variable]]

    $c[Let's map each element of the array.]
    $arrayMap[totalList;element;
    $c[Get the text based on the current array element.]
    $return[* $trim[$serverName[$env[element]] - $env[element]]]
    ;result]

    $return[$arrayJoin[result;\n]]
    `
}]
