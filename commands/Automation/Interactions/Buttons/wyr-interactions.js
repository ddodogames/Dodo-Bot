module.exports = [{
    name: "wyr1-votebutton",
    type: "interaction",
    $if: "old",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Would you rather...}{field:**Option 1**:$get[question1]}{field:**Option 2**:$get[question2]}{color:$getVar[embedcolor]}}{actionRow:{button:$getObjectProperty[wyrdata;upvotes]:2:wyr1-votebutton:false:1️⃣}{button:$getObjectProperty[wyrdata;downvotes]:2:wyr2-votebutton:false:2️⃣}}]
    

    $setMessageVar[wyr;$getObject[wyrdata];$interactionData[message.id]]
    $setObjectProperty[wyrdata;upvotes;$sum[$getObjectProperty[wyrdata;upvotes];1]]
    $createObject[wyrdata;$getMessageVar[wyr;$interactionData[message.id]]]
    
    $setMessageVar[wyr_hasuservoted_$authorID;true;$interactionData[message.id]]
    
    $onlyIf[$getMessageVar[wyr_hasuservoted_$authorID;$interactionData[message.id]]==false;
    You have already voted.
    {interaction}
    {ephemeral}
    ]
    
    $let[question2;$getEmbed[$channelID;$interactionData[message.id];1;field2.value]]
    $let[question1;$getEmbed[$channelID;$interactionData[message.id];1;field1.value]]
    $if[$isVariableExist[wyr_hasuservoted_$authorID;main]==false]
    $createTemporaryVar[main;wyr_hasuservoted_$authorID:false]
    $endif`
    },{
    name: "wyr2-votebutton",
    type: "interaction",
    $if: "old",
    prototype: "button",
    code: `$interactionUpdate[{newEmbed:{title:Would you rather...}{field:**Option 1**:$get[question1]}{field:**Option 2**:$get[question2]}{color:$getVar[embedcolor]}}{actionRow:{button:$getObjectProperty[wyrdata;upvotes]:2:wyr1-votebutton:false:1️⃣}{button:$getObjectProperty[wyrdata;downvotes]:2:wyr2-votebutton:false:2️⃣}}]
    
    
    $setMessageVar[wyr;$getObject[wyrdata];$interactionData[message.id]]
    $setObjectProperty[wyrdata;downvotes;$sum[$getObjectProperty[wyrdata;downvotes];1]]
    $createObject[wyrdata;$getMessageVar[wyr;$interactionData[message.id]]]
    
    $setMessageVar[wyr_hasuservoted_$authorID;true;$interactionData[message.id]]
    
    $onlyIf[$getMessageVar[wyr_hasuservoted_$authorID;$interactionData[message.id]]==false;
    You have already voted.
    {interaction}
    {ephemeral}
    ]
    
    $let[question2;$getEmbed[$channelID;$interactionData[message.id];1;field2.value]]
    $let[question1;$getEmbed[$channelID;$interactionData[message.id];1;field1.value]]
    $if[$isVariableExist[wyr_hasuservoted_$authorID]==false]
    $createTemporaryVar[main;wyr_hasuservoted_$authorID:false]
    $endif`
    }]
