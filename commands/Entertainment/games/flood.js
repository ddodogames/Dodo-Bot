module.exports = [{
  name: "flood",
  info: {
    description: "Starts a game of Flood (pass the flag \`--settings\` to open up the settings).",
    usage: "`flood (flag)`",
    perms: ["`SendMessages`"],
    flags: ["`--settings`"]
  },
  code: `$ifAwaited[$checkContains[$message;--settings;—settings]==true;{execute:floodsettings};{execute:floodstart}]


$cooldown[3s; Slow down! Don't spam the command!
Time remaining: <t:$truncate[$divide[$sum[$getCooldownTime[3s;user;flood;$authorID];$dateStamp];1000]]:R>]`
},{
  name: "floodstart",
  type: "awaited",
  code: `
  $djsEval[const { Flood } = require('discord-gamecord');

const Game = new Flood({
  message: message,
  isSlashGame: false,
  embed: {
    title: 'Flood',
    color: '$getVar[embedcolor]',
  },
  difficulty: $getGlobalUserVar[flood_difficulty],
  timeoutTime: 60000,
  buttonStyle: 'SECONDARY',
  emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
  winMessage: 'You won! You took **{turns}** turns.',
  loseMessage: 'You lost! You took **{turns}** turns.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
`
},{
  name: "floodsettings",
  type: "awaited",
  code: `$title[Flood Settings]
$description[Welcome to Flood settings! To select a option to change, use the dropdown menu below!]
$addField[**Current Setup**;
**Difficulty#COLON#** \`$get[type]\`
]
$color[$getVar[embedcolor]]
$addSelectMenu[1;string;floodsettings_$authorID;Select a option;1;1;false;Difficulty:How hard the game will be?:flooddifficulty:false]
$let[type;$advancedReplaceText[$getGlobalUserVar[flood_difficulty];18;\`Hard\`;13;\`Normal\`;8;\`Easy\`]]
  `
}]
