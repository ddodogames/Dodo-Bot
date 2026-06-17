module.exports = [{
    name: "randomColor",
    params: [],
    code: `$return[$djsEval[const hex = Math.floor(Math.random() * 16777215).toString(16)
    hex.padStart(6, "0")
    ]]`
}]
