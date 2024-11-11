class UsuarioController {
    constructor(Database) {
        this.Database = Database;
    }
    getAll() {
        return this.Database.findAll('usuarios');
    }
}

module.exports = { UsuarioController };