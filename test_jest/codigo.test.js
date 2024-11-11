const { soma, dobro } = require('./codigo');

// crie uma estrutura de testes unitários em JS usando Jest
// para calcular funções matemáticas, crie describe e it para esses testes.

// pode ser implementado beforeall, afterall, beforeeach e aftereach

describe('Testes para a função soma', () => {
    it('Deve retornar a soma de dois números', () => {
        expect(soma(2, 3)).toBe(5);
        expect(soma(-1, 1)).toBe(0);
        expect(soma(0, 0)).toBe(0);
    });
    it('Dobro de um valor', () => {
        expect(dobro(2)).toBe(4);
        expect(dobro(-1)).toBe(-2);
        expect(dobro(0)).toBe(0);
    });
});