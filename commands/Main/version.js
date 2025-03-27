module.exports = [{
  name: "version",
  info: {
    description: "Returns the current version of Dodo-Bot (with it's changelog).",
    perms: "`SendMessages`",
    usage: "version (flag)"
    flags: ["`--buildinfo`"]
},
  aliases: ["ver", "changelog", "updates"],
  $if: "old",
  code: `$ifAwaited[$checkContains[$message;--buildinfo;—buildinfo]==true;{execute:versionbuildinfo};{execute:currentversion}]


$cooldown[2s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[2s;user;version;$authorID];$dateStamp];1000]]:R>]
  `
},{
  name: "currentversion",
  $if: "old",
  type: "awaited",
  code: `$title[Dodo-Bot version]
$description[
* **Version**: $getVar[version]$get[Revision]
* **Release type**: $getVar[release_type]
* **$get[releasedatetype]**: <t:$truncate[$divide[$getVar[buildDate];1000]]:f>
]
$color[$getVar[embedcolor]]
$if[$getVar[pre_release]==on]
$footer[Testing is recommended;https://us-east-1.tixte.net/uploads/dodogames.wants.solutions/refreshedredwarning2.png]
$endif
$addButton[2;Changelog history;5;https://github.com/ddodogames/Dodo-Bot/releases;false;📜]
$addButton[1;Other;2;versionother_$authorID;false]
$addButton[1;Bug Fixes;2;versionbugfixes_$authorID;false]
$addButton[1;Changes;2;versionchanges_$authorID;false]

$let[Revision;$advancedReplaceText[$checkCondition[$getVar[buildRevision]!=0];true; (Revision $getVar[buildRevision]);false; ]]
$let[releasedatetype;$advancedReplaceText[$checkCondition[$getVar[showbuildinfo]==on];true;Last updated on;false;Released on]]
`
},{
  name: "versionbuildinfo",
  type: "awaited",
  code: `$title[Build Info]
$addField[Progress;
$getVar[buildStatus]
;true]
$addField[General;
* **Dodo-Bot**: v$getVar[version]
* **Codename**: $getVar[versionCodename]
* **Build Branch**: $getVar[buildBranch]
* **Build number**: $getVar[buildNumber]
* **Revision**: $getVar[buildRevision]
;true]
$color[$getVar[embedcolor]]

$onlyIf[$getVar[showbuildinfo]==on;Viewing build information is currently unavailable.]
`
}]
