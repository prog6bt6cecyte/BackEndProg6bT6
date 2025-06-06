"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemaRoutes = void 0;
const tema_controller_1 = require("../controllers/tema.controller");
class TemaRoutes {
    constructor() {
        this.temaController = new tema_controller_1.TemaController();
    }
    routes(app) {
        app.route('/tema')
            .get(this.temaController.obtenerTemas)
            .post(this.temaController.crearTema);
        app.route('/tema/:id')
            .put(this.temaController.actualizarTema)
            .delete(this.temaController.eliminarTema);
    }
}
exports.TemaRoutes = TemaRoutes;
//# sourceMappingURL=tema.routes.js.map