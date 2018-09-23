// GAME INSTRUCTIONS

    // You are going to create a simple card game in which a player
    // will be able to battle the autoplayer. 
    // The game will deal 3 cards (each of which has a damage value) 
    // to the player and three cards to the autoplayer. 
    // The player will choose a card, and the computer will randomly choose a card, 
    // and whichever's card has the highest value will win the point. 
    // A round is finished once this has happened three times.

// START OF GAME

$('#startGame').on('click', () => {

        $('#startGame').remove();

        $('body').append('<h1 id="intro">Lets Get Ready To Rumble!</h1>');
        $('body').append('<h2 id="introCopy">POKEMON BATTLE: Human vs Machine</h2>')
        $('body').append('<button id="clVersion">Click Here To Play The console.log Version Of This Game :(</button>');
        $('body').append('<img src="https://i.pinimg.com/474x/d4/f9/cd/d4f9cd56554375ce1798017c26d4d9e4.jpg"></img>');
});

// DEAL THE CARDS

$('body').on('click', '#clVersion', (e) => {
    $('#clVersion').remove();
    $('#intro').remove()
    $('#introCopy').remove()
    $('img').remove()
    $('#cardsDelt').append('<h5>See the console.log. Web browser version coming soon!</h5>')

});





// CONSOLE LOG VERSION OF THE GAME

game = {
    deck: 
    [
        {
          name: "Bulbasaur",
          damage: 60
        }, {
          name: "Caterpie",
          damage: 40
        }, {
          name: "Charmander",
          damage: 60
        }, {
          name: "Clefairy",
          damage: 50
        }, {
          name: "Jigglypuff",
          damage: 60
        }, {
          name: "Mankey",
          damage: 30
        }, {
          name: "Meowth",
          damage: 60
        }, {
          name: "Nidoran - female",
          damage: 60
        }, {
          name: "Nidoran - male",
          damage: 50
        }, {
          name: "Oddish",
          damage: 40
        }, {
          name: "Pidgey",
          damage: 50
        }, {
          name: "Pikachu",
          damage: 50
        }, {
          name: "Poliwag",
          damage: 50
        }, {
          name: "Psyduck",
          damage: 60
        }, {
          name: "Rattata",
          damage: 30
        }, {
          name: "Squirtle",
          damage: 60
        }, {
          name: "Vulpix",
          damage: 50
        }, {
          name: "Weedle", 
          damage: 40
        }
      ],
    player: {
        name: "Ash",
        hand: [],
        pointsWon: 0,
        roundsWon: 0,
    },
    computer: {
        name: "Gary",
        hand: [],
        pointsWon: 0,
        roundsWon: 0,
    },
    dealACard(player) {
        console.log(`Dealing a card to palyer ${player.name}`)
        let randomIndex = Math.floor(Math.random() * this.deck.length);
        let cardToDeal = game.deck.splice(randomIndex, 1)[0];
        console.log(cardToDeal);
        player.hand.push(cardToDeal);
    },
    startGame() {
        for (let i = 0; i < 3; i++) {
            this.dealACard(game.player);
            this.dealACard(game.computer);
        }
        this.battle();
    },
    battle() {
        let playerCard = this.player.hand.pop();
        let computerCard = this.computer.hand.pop();
        console.log(`${this.player.name} played ${playerCard.name} which deals ${playerCard.damage} damage.`);
        console.log(`${this.computer.name} played ${computerCard.name} which deals ${computerCard.damage} damage.`);
        if (playerCard.damage > computerCard.damage) {
            this.player.pointsWon ++
            console.log(`${this.player.name} WON THIS BATTLE`);
        } else if (playerCard.damage === computerCard.damage) {
            console.log("TIE GAME")
        } else {
            this.computer.pointsWon ++
            console.log(`${this.computer.name} WON THIS BATTLE`)
        }
        this.roundsWon();
    },
    roundsWon() {
        console.log(`SCORE: ${this.player.name}: ${this.player.pointsWon}, ${this.computer.name}: ${this.computer.pointsWon}`);
    }
}

let pointsToWin = 3;
for (i = 0; i < 3; i++){
    game.startGame();
      if (game.player.pointsWon <= pointsToWin || game.computer.pointsWon <= pointsToWin) {
        console.log("We have a winner!")
    }
};

