import { TemaRoutes } from "./modules/tema/routes/tema.routes";
import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";

export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    private temaRoutes: TemaRoutes =new TemaRoutes();

    public routes(app): void {
        this.usuarioRoutes.routes(app);
        this.temaRoutes.routes(app);
    }
}