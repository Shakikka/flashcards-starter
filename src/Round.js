const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    this.turns += 1;
    const newTurn = new Turn(guess, this.currentCard)
    if(!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.deck.shift()
    this.currentCard = this.deck[0];
    return newTurn.giveFeedback();
  }
}

module.exports = Round;
