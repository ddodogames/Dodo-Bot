module.exports = [{
name: "error logs",
type: "error",
code: `$onlyIf[$getGlobalVar[errorlogging]==on;]
$onlyIf[$getGlobalVar[errorchannel]!=;]
$onlyIf[$channelExists[$getGlobalVar[errorchannel]]==true;]
$onlyIf[$channelHasPerms[$getGlobalVar[errorchannel];$clientID;ViewChannel;SendMessages]==true;]
$if[$charCount[$error]>=4000;

$sendMessage[$getGlobalVar[errorchannel];
$attachment[A error has occured! Here's the error code:
$error;error.txt;true]
]
;
$sendMessage[$getGlobalVar[errorchannel];
$author[A error has occurred!;$userAvatar[$clientID]]
$description[Something went wrong!
Here's the error code:
$error
]
$color[Red]
]]

`
}]
