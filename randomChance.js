function randomChance() {
    var quarters = 50;
    var winner = Math.round(Math.random() * 50);
    var count = 0;

    while (quarters > 0) {
        var winnings = Math.round(Math.random() * 50) + 50;
        quarters--;
        if (winner === Math.round(Math.random() * 50)) {
            quarters += winnings;
            return "This is how many quarters you have left: " + quarters + ". You tried " + count + " times to win. Here is your winnings: " + winnings;
        }
        if (winner !== Math.round(Math.random() * 100)) {
            console.log("Sorry you did not win. Try again!");
            count++;
        }
    }
    if (quarters === 0) {
        return "Oh no! You're out of quarters! Come back next time to get milked for more money! Here's what you're left with if you didn't know: " 
        + quarters;
    }
}