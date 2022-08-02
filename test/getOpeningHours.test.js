const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => { });

it('Teste não passando argumentos. Deverá retornar o objeto', () => {
  expect(getOpeningHours()).toEqual({
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  });
});

it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
});
it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
});

it('Se a hora for maior de 12 exibe a mensagem The hour must be between 0 and 12', () => {
  expect(() => getOpeningHours('Tuesday', '13:00-PM')).toThrow('The hour must be between 0 and 12');
});
it('Se os minutos forem maiores de 59 exibe a mensagem The minutes must be between 0 and 59', () => {
  expect(() => getOpeningHours('Sunday', '10:60-PM')).toThrow('The minutes must be between 0 and 59');
});
it('Se a abreviação de AM ou PM estiver errada exibe a mensagem The abbreviation must be XX', () => {
  expect(() => getOpeningHours('Sunday', '10:00-HM')).toThrow('The abbreviation must be');
});
it('Se a hora não representar numero exibe a mensagem The hour should represent a number', () => {
  expect(() => getOpeningHours('Sunday', 'AA:40-AM')).toThrow('The hour should represent a number');
});
it('Se os minutos não representar numero exibe a mensagem The minutes should represent a number', () => {
  expect(() => getOpeningHours('Sunday', '10:AA-AM')).toThrow('The minutes should represent a number');
});
it('Se o dia da semana não existir exibe The day must be valid. Example: Monday', () => {
  expect(() => getOpeningHours('Summer', '10:00-AM')).toThrow('The day must be valid. Example: Monday');
});
