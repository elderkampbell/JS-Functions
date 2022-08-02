const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const total = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      total.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      total.adult += 1;
    } else {
      total.senior += 1;
    }
  });
  return total;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const obj = countEntrants(entrants);
  return (obj.child * prices.child) + (obj.adult * prices.adult) + (obj.senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
