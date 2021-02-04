const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function')
  });

  it('should accept an instance of Deck', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    const newRound = new Round(newDeck);
    expect(newRound).to.be.instanceof(Round);
    expect(newRound.deck).to.deep.equal([card1, card2]);
  });

  it('should return the current card in play', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    const newRound = new Round(newDeck);
    expect(newRound.currentCard).to.equal(card1);
    expect(newRound.returnCurrentCard()).to.equal(card1);
  });

  it('should keep track of turns', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    const newRound = new Round(newDeck);
    expect(newRound.turns).to.equal(0);
  });

  it.skip('should be capable of taking turns', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    const newRound = new Round(newDeck);
    expect(newRound.takeTurns()).to.be.a('function');
    expect(newRound.turns).to.equal(1);
  });

  it.skip('should evaluate a guess, and record an incorrect guess', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    const newRound1 = new Round(newDeck);
    const newRound2 = newRound(newDeck);
    expect(newRound1.takeTurn('potato', card1)).to.equal('incorrect!');
    expect(newRound1.incorrectGuesses).to.equal('potato');
    expect(newRound2.takeTurn('object', card1)).to.equal('correct!');
  });

  it.skip('should show new current card after taking a turn', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    const newRound = new Round(newDeck);
    expect(newRound.takeTurn()).to.equal('incorrect!');
    expect(newRound.incorrectGuesses).to.equal(['potato']);
    expect(newRound.currentCard).to.equal(card2);

  });

});
