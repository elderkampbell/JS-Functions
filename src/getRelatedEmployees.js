const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const empregados = employees.filter((managed) => managed.managers.includes(managerId));
    return empregados.reduce((acc, curr) => acc.concat(`${curr.firstName} ${curr.lastName}`), []);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
