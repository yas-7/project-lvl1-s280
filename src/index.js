import readlineSync from 'readline-sync';

export default () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
  return actual;
};

const getQuestion = func => func('getQuestion');
const getAnswer = func => func('getAnswer');
const roundsCount = 3;

export const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const gameDescription = game('getDescription');
  console.log(gameDescription);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const iter = (currentRound) => {
    if (currentRound === roundsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const newAnswerQuestionPair = game();
    const question = getQuestion(newAnswerQuestionPair);
    const rightAnswer = getAnswer(newAnswerQuestionPair);

    console.log(`Question: ${question}`);
    const actualAnswer = readlineSync.question('Your answer: ');
    if (actualAnswer === rightAnswer) {
      console.log('Correct!');
      iter(currentRound + 1);
    } else {
      console.log(`'${actualAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  };
  iter(0);
};
