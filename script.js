function guessNumber(s, e) {

  let userName = prompt('Enter you name:')

  let rangeStart = s;
  let rangeEnd = e;

  // generating a random integer from given range
  const random = Math.floor(Math.random() * 2) + 1;

  // take input from the user
  let number = parseInt(prompt(`${userName} guess a number from ${rangeStart} to ${rangeEnd}: `));


  // check if the guess is correct
  if (number == random) {
    window.alert("You guessed the correct number 🎉. Range Increased for guessing number.")
    rangeEnd++;
    number = parseInt(prompt(`Now guess a number from ${rangeStart} to ${rangeEnd}: `));
  }

  if (number !== random) {
    window.alert("You gussesed the incorrect number. Game End 😞");
  }

}