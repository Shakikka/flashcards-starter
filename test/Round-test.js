const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.instanceof('function')
  )};

  it('should accept an instance of Deck', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    const newRound = new Round(newDeck);
    expect(newRound.deck).to.equal([card1, card2]);
  });

  it('should return the current card in play', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    const newRound = new Round(newDeck);
    expect(newRound.currentCard).to.equal(card1);
    expect(newRound.returnCurrentCard()).to.equal(card1);
  });

});
