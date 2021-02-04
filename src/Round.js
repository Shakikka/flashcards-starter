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

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length === 0) {
      return 100
    } else if((this.incorrectGuesses.length / this.turns) === 1) {
      return 0
    } else {
      return 100 - ((this.incorrectGuesses.length / this.turns) * 100)

    }
  }

  endRound() {
    const percent = this.calculatePercentCorrect();
    return`**Round over!** You answered ${Math.ceil(percent)}% of the questions correctly!`
  }
}

module.exports = Round;
