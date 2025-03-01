module.exports = [{
    name: "autoListText",
    type: "awaited",
    code: `
   $if[{value}==none;none;* {value}]
`
},{
    name: "autoListServers",
    type: "awaited",
    code: `
* $guildName[{value}] - {value}
    `
},{
    name: "autoListChannels",
    type: "awaited",
    code: `$if[{value}==none;none;$get[channels]]

$let[channels;$if[$guildChannelExists[$guildID;{value}]==true;* <#{value}>;* \`Deleted Channel\`]]`
},{
    name: "autoListCategories",
    $if: "old",
    type: "awaited",
    code: `
    $if[{value}==none]
    none
    $else
    $advancedReplaceText[$checkCondition[$guildChannelExists[$guildID;{value}]==true];true;* **$djsEval[const data = d.util.aoiFunc(d);
const channel = d.util.getChannel(d, "{value}",true)
channel.name
;true]**;false;* \`Deleted Category\`]
    $endif
`
}]
