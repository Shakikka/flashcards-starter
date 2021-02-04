const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should instantiate a new Deck', function() {
    const newDeck = new Deck();
    expect(newDeck).to.be.instanceof(Deck);
  });

  it('should be able to accept an array of cards', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    expect(newDeck.cards[1].correctAnswer).to.equal('array');
    expect(newDeck.cards).to.deep.equal([card1, card2]);
  });

  it('should know how many cards are in the deck', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const newDeck = new Deck([card1, card2]);
    expect(newDeck.countCards()).to.equal(2)
  })


});
