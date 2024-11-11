const { spy, assert, stub, mock } = require('sinon');
const { Database } = require('./database');
const { UsuarioController } = require('./controller');

let respostaEsperada;

describe('Controller de Usuários', () => {
    beforeAll(() => {
        respostaEsperada = [
            {
                id: 1,
                name: 'Teste 1',
                email: '1@1.com'
            },
        ]
    });


    it('Fake', () => {
        const fakeDatabase = {
            findAll() {
                return respostaEsperada
            }
        }
        const controller = new UsuarioController(fakeDatabase);
        const respose = controller.getAll();

        expect(respose).toBe(respostaEsperada)
    });

    it('Spy', () => {
        const findAll = spy(Database, 'findAll');
        const controller = new UsuarioController(Database);
        controller.getAll();

        assert.calledWith(findAll, 'usuarios');
        findAll.restore();
    });

    it('stub', () => {
        const findAll = stub(Database, 'findAll')
        findAll.withArgs('usuarios').returns(respostaEsperada)

        const controller = new UsuarioController(Database);
        const respose = controller.getAll();

        assert.calledWith(findAll, 'usuarios');
        expect(respose).toEqual(respostaEsperada)

        findAll.restore();
    });

    it('Mock', () => {
        const dbMock = mock(Database);
        dbMock.expects('findAll').once().withArgs('usuarios').returns(respostaEsperada)

        const controller = new UsuarioController(Database);
        const respose = controller.getAll();

        expect(respose).toEqual(respostaEsperada)

        dbMock.verify();
        dbMock.restore();
    });
});