(function() {
  var lowerBound = 0;
  var upperBound = 1000;

  var currentNumber = getHalf(lowerBound, upperBound)
  var secretNumber = getRandomInteger(lowerBound, upperBound);

  var count = 1; // The initial currentNumber choice counts as 1 try;

  console.log(`I'm going to guess the secret number between ${lowerBound} and ${upperBound}!\n\n`);

  do {
    console.log(`Current number: ${currentNumber}`);

    if (currentNumber < secretNumber) {
      console.log("It's more");
      lowerBound = currentNumber + 1;
      currentNumber = lowerBound + getHalf(lowerBound, upperBound);
    } else {
      console.log("It's less");
      upperBound = currentNumber - 1;
      currentNumber = upperBound - getHalf(lowerBound, upperBound);
    }
    count++;
  } while (currentNumber !== secretNumber)

  console.log(`The secret number was: ${secretNumber}`);
  console.log(`Found it in ${count} tries!`);

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function getHalf(min, max) {
    return Math.floor((max - min) / 2);
  }
})();
