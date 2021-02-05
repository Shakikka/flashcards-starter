const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');

describe('Game', function() {

  it('should be able to start a new game, and create a new round', function() {
    const fakeData = [
      {'id': 1, 'question': 'Which color is blue?', 'answers': ['red', 'blue', 'green'], 'correctAnswer': 'blue'},
      {'id': 2, 'question': 'Which number is 1?', 'answers': ['1', '2', '3'], 'correctAnswer': '1'},
      {'id': 3, 'question': 'Where do you find whales?', 'answers': ['forest', 'prarie', 'ocean'], 'correctAnswer': 'ocean'}
    ];
    const newGame = new Game();
    newGame.start(fakeData);
    expect(newGame.currentRound.deck[2]['correctAnswer']).to.equal('ocean');
    expect(newGame.tempDeck.length).to.equal(3);
    expect(newGame.tempDeck[0]['correctAnswer']).to.equal('blue');
  });
});
