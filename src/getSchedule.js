const data = require('../data/zoo_data');

const { species, hours } = data;

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;

const animal = (weekday) => species
  .filter((specie) => specie.availability.includes(weekday))
  .map((specie) => specie.name);

const weekdays = {
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: animal('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: animal('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: animal('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: animal('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: animal('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: animal('Sunday'),
  },
};

function getSchedule(scheduleTarget) {
  const schedule = species.map((element) => element.name);
  if (scheduleTarget === undefined) {
    return weekdays;
  }
  if (Object.keys(weekdays).includes(scheduleTarget) === true) {
    return { [scheduleTarget]: weekdays[scheduleTarget] };
  }
  if (schedule.includes(scheduleTarget) === true) {
    return species.find((elements) => elements.name === scheduleTarget).availability;
  }
  return weekdays;
}
console.log(getSchedule());
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Wednesday'));
// console.log(getSchedule('Thursday'));
// console.log(getSchedule('Friday'));
// console.log(getSchedule('Saturday'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('snakes'));

module.exports = getSchedule;
