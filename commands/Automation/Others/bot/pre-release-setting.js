module.exports = {
type: "clientReady",
code: `$if[$getGlobalVar[pre_release]==on;
$onlyIf[$getGlobalVar[release_type]!=$getGlobalVar[DevReleaseTypeToSet];]
$setGlobalVar[release_type;$getGlobalVar[DevReleaseTypeToSet]]
;
$onlyIf[$getGlobalVar[release_type]!=Stable;]
$deleteGlobalVar[release_type]
]`
}
