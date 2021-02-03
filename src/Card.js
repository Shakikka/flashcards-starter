class Card {
  constructor(id, question, answers, answer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = answer;
    this.id = id;
  }
}

module.exports = Card;
