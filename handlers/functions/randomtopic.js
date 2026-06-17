module.exports = [{
    name: "randomtopic",
    params: [],
    code: `
    $let[topics;$randomText[Did you go out today?;What did you eat today?;What are you currently worried about?;What game have you spent the most hours playing?;What movie can you watch over and over again without ever getting tired of it?;What are you interested in that most people aren't?;How do you judge a person?;What do you think you are much better at than you actually are?;Do you enjoy spicy food?;Do you usually get bored most of the time?;What do you think about technology?;What do you think about AI?;Are you afraid of the future?;What are you looking forward to in the future?;What year do you miss the most and wish to go back to it?;What's the one thing that makes you happy?;What's your favorite food?;What's your favorite animal?;What's your favorite book?;What's the best thing you've watched/read lately?;What's the hardest lesson you've ever learned?;What are you most proud of?;What is your main passion in life?;What is something that really annoys you but doesn't bother most people?;What was the biggest thing you have ever won?;What is your least favorite food?]]

    $return[$get[topics]]
    `
}]
