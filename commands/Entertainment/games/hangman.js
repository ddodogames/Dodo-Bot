module.exports = {
name: "hangman",
info: {
        description: "Starts a game of Hangman (pass the flag `--themes` to open the settings).",
        usage: "`hangman (flag)`",
        perms: ["`SendMessages`"],
        flags: ["`--themes`", "--settings (alias)"]
},
aliases: ["hangguy"],
type: "messageCreate",
code: `$userCooldown[hangmancmd;3s;Cooldown has been triggered! Please, wait!
Time remaining: <t:$trunc[$divide[$sum[$getTimestamp;$getUserCooldownTime[hangmancmd]];1000]]:R>]

$if[$checkContains[$message;--settings;—settings;--themes;—themes]==true;
$title[Hangman themes]
$description[Welcome to Hangman's themes! Select a theme to use!]
$addField[Current Setup;
**Theme:** $toTitleCase[$getUserVar[hangman_theme]]
]
$color[$getGlobalVar[embedcolor]]
$addActionRow
$addStringSelectMenu[hangmansettings_$authorID;Select a theme;false;1;1]
$addOption[Nature;Set the theme to Nature-related;nature;;false]
$addOption[Sport;Set the theme to Sport-related;sport;;false]
$addOption[Color;Set the theme to Color-related;color;;false]
$addOption[Camp;Set the theme to Camp-related;camp;;false]
$addOption[Fruit;Set the theme to Fruit-related;fruit;;false]
$addOption[Discord;Set the theme to Discord-related;discord;;false]
$addOption[Winter;Set the theme to Winter-related;winter;;false]
$addOption[Pokemon;Set the theme to Pokemon-related;pokemon;;false]
;
$!djsEval[const { Hangman } = require('discord-gamecord');

const Game = new Hangman({
  message: ctx.message,
  isSlashGame: false,
  embed: {
    title: 'Hangman',
    color: '$getGlobalVar[embedcolor]'
  },
  hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
  customWord: null,
  timeoutTime: 60000,
  theme: '$getUserVar[hangman_theme]',
  winMessage: 'You won! The word was {word}.',
  loseMessage: 'You lost! The word was {word}.',
  playerOnlyMessage: 'Only {player} can use these buttons.'
});

Game.startGame();
]
]

`
}
