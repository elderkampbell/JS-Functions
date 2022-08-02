const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const responsavel = employees.find((employee) => employee.id === id).responsibleFor;
  const animal = species.find((specie) => responsavel[0] === specie.id).residents;
  const comparador = animal
    .reduce((oldest, animals) => (oldest.age < animals.age ? animals : oldest));
  return Object.values(comparador);
}

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
