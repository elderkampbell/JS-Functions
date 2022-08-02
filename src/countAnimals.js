const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  if (animal.sex === undefined) {
    return species.find((specie) => (specie.name === animal.specie)).residents.length;
  }
  if (animal.sex !== undefined) {
    return species.find((specie) => specie.name === animal.specie).residents
      .filter((filtered) => filtered.sex === animal.sex).length;
  }
}
module.exports = countAnimals;
