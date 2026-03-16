const makeChange = (cents) => {
  // Convert input to a number in case it's passed as a string
  let amount = parseInt(cents);

  const change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  // 1. Calculate quarters (25 cents)
  change.q = Math.floor(amount / 25);
  amount %= 25;

  // 2. Calculate dimes (10 cents)
  change.d = Math.floor(amount / 10);
  amount %= 10;

  // 3. Calculate nickels (5 cents)
  change.n = Math.floor(amount / 5);
  amount %= 5;

  // 4. Remaining amount is pennies (1 cent)
  change.p = amount;

  return change;
};


// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));