const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => { });
it('retorna a quantidade de elefantes', () => {
  expect(handlerElephants('count')).toEqual(4);
});
it('retorna um array com a relação dos nomes de todos os elefantes', () => {
  expect(handlerElephants('names')).toContain('Bea');
});
it('retorna a média de idade dos elefantes', () => {
  expect(handlerElephants('averageAge')).toEqual(10.5);
});
it('retorna a localização dos elefantes dentro do Zoológico', () => {
  expect(handlerElephants('location')).toBe('NW');
});
it('retorna a popularidade dos elefantes', () => {
  expect(handlerElephants('popularity')).toEqual(5);
});
it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
  expect(handlerElephants('availability')).toContain('Saturday');
});
it('retorna um array com a relação de dias que não contém Monday', () => {
  expect(handlerElephants('availability')).toEqual(expect.not.stringContaining('Monday'));
});
it('retorna null se parametro uppercase', () => {
  expect(handlerElephants('NAMES')).toBeNull();
});
it('retorna undefined se parametro vazio', () => {
  expect(handlerElephants()).toBeUndefined();
});
it('retorna "Parâmetro inválido, é necessário uma string"', () => {
  expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
});
