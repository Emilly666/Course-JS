let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

let cards = []
let sum = 0

let hasBlackjack = false, isAlive = false

let message = ""

let player = {
    name: "Fiona",
    chips: 100,
    start: function (){
        player.chips -= 10
        playerEl.textContent = player.name + ": $" + player.chips
    },
    win: function () {
        player.chips += 100
        playerEl.textContent = player.name + ": $" + player.chips
    }
}

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    if (player.chips <= 0) {
        return
    }
    player.start()
    cards = [ getRandomCard(), getRandomCard() ]
    sum = cards[0] + cards[1]
    isAlive = true
    hasBlackjack = false
    renderGame()
}

function renderGame() {
    let cardsList = ""
    cards.forEach(card => {
        cardsList += card + ", "
    });

    cardsEl.textContent = "Cards: " + cardsList.slice(0, -2);
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
        player.win()
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if ( !isAlive || hasBlackjack ) {
        return
    }
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
}

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1
    if ( card === 1 ) {
        return 11
    }
    else if (card > 10) {
        return 10
    }
    else {
        return card
    }
}