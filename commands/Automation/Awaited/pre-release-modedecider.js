module.exports = [{
    name: "Set Pre-release mode",
    type: "clientReady",
    code: `
    $ifAwaited[$getVar[pre_release]==on;{execute:Enable-pre-release};{execute:Disable-pre-release}]


`
},{
    name: "Enable-pre-release",
    type: "awaited",
    code: `

    $setVar[release_type;$getVar[DevReleaseTypeToSet]]
    $onlyIf[$checkContains[$getVar[release_type];$getVar[DevReleaseTypeToSet]]==false]`
},{
    name: "Disable-pre-release",
    type: "awaited",
    code: `

    $deleteVar[release_type;;main]
    $onlyIf[$checkContains[$getVar[release_type];Stable]==false]`
}]
