const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function')
  });

  it('should instantiate Card', function() {
    const turn = new Turn();
    expect(turn).to.be.instanceof(Turn)
  })

  it('should accept a guess', function() {
    const turn = new Turn('Is it a horse?')
    expect(turn.guess).to.equal('Is it a horse?')
  })

  it('should invoke an instance of Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card)
    expect(turn.card).to.equal(card)
  })

  it('should return a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card)
    expect(turn.returnGuess()).to.equal('object')
  })







});
