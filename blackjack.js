let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let cards = []
let sum = 0

let hasBlackjack = false, isAlive = true

let message = ""

function startGame() {
    cards = [
        getRandomCard(),
        getRandomCard()
    ]
    sum = cards[0] + cards[1]
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
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
}

function getRandomCard() {
    return Math.floor(Math.random() * 10) + 2
}