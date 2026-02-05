module.exports = [{
    name: "First run (Modify aoi.js)",
    type: "clientReady",
    channel: "",
    code: `$setVar[isfirstrun;no]
    $writeFile[./node_modules/aoi.js/src/functions/misc/createApplicationCommand.js;$readFile[./handler/fixes/createApplicationCommand.js]]


    $onlyIf[$getVar[isfirstrun]==yes;]`
}]
