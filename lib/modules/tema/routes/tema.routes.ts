import { TemaController } from "../controllers/tema.controller";

export class TemaRoutes {
    private temaController: TemaController = new TemaController();
    public routes(app): void {
        app.route('/tema')
        .get(this.temaController.obtenerTemas)
        .post(this.temaController.crearTema);

        app.route('/tema/:id')
        .put(this.temaController.actualizarTema)
        .delete(this.temaController.eliminarTema);
    }
}