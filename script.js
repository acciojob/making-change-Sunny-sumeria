const makeChange = (cents) => {
  // your name here
	function makeChange(cents) {
  const change = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  // 1. Calculate quarters (25 cents)
  change.q = Math.floor(cents / 25);
  cents %= 25;

  // 2. Calculate dimes (10 cents)
  change.d = Math.floor(cents / 10);
  cents %= 10;

  // 3. Calculate nickels (5 cents)
  change.n = Math.floor(cents / 5);
  cents %= 5;

  // 4. Remaining amount is pennies (1 cent)
  change.p = cents;

  return change;
}
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

