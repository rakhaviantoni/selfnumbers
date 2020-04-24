const sum = require('./sum')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.write("In 1949 the Indian mathematician D.R. Kaprekar discovered a class of numbers called self-numbers.\n\n");
rl.write("For any positive integer n, define d(n) to be n plus the sum of the digits of n.\n");
rl.write("For example, d(75) = 75 + 7 + 5 = 87.\n\n");
rl.write("The number n is called a generator of d(n).\n\n");
rl.write("Some numbers have more than one generator:\n"); rl.write("For example, 101 has two generators, 91 and 100.\n\n");
rl.write("A number with no generators is a self-number.\n");
rl.write("There are thirteen self-numbers less than 100:\n");
rl.write("1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, and 97.\n\n\n");
rl.write("What is the sum of all self-numbers which are:\n");

inputRefNum = (definer, callback) => {
  rl.question(`${definer} than: `, (answer) => {
    callback(answer);
  });
}

inputRefNum('Bigger', (biggerThan) => {
  inputRefNum('Smaller', (smallerThan) => {
    sum(parseInt(biggerThan), parseInt(smallerThan));
  });
});