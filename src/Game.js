const data = require('../src/data');
const prototypeQuestions = data.prototypeData;
const util = require('../src/util');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRoundCounter = 0;
    this.tempDeck = [];
    this.currentRound = ''
  }

  start(cards) {
    cards.forEach(card => {
      const newCard = new Card(card.id, card.question, card.answers, card.correctAnswer)
      this.tempDeck.push(newCard)
    })
    const deck = new Deck(this.tempDeck);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
    this.currentRoundCounter += 1;
    this.currentRound = round;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
