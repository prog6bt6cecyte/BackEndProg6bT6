"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const tema_routes_1 = require("./modules/tema/routes/tema.routes");
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.temaRoutes = new tema_routes_1.TemaRoutes();
    }
    routes(app) {
        this.usuarioRoutes.routes(app);
        this.temaRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map