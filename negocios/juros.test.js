const juros = require('./juros')
const expect = require('chai').expect

//Agrupar testes = describe
describe('Testando modulo juros', () => {
  it('calcula juros compostos', () => {
    const test1010 = juros.calculosJuros(1000, 0.01, 1)
    expect(test1010).to.equal(1010)

    const test1010 = juros.calculosJuros(1000, 0.02, 1)
    expect(test1010).to.equal(1020)
  })
})