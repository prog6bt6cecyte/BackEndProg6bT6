"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemaController = void 0;
const tema_model_1 = require("../models/tema.model");
class TemaController {
    constructor() {
        this.crearTema = (req, res) => {
            const nuevoTema = new tema_model_1.default({
                tema: req.body.tema
            });
            nuevoTema.save()
                .then(temaCreado => {
                res.status(201).json({
                    ok: true,
                    tema: temaCreado,
                    message: 'Tema creado'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Tema no creado'
                });
            });
        };
        this.obtenerTemas = (req, res) => {
            tema_model_1.default.find()
                .then(temas => {
                res.status(200).json({
                    ok: true,
                    temas: temas
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: error.message
                });
            });
        };
        this.actualizarTema = (req, res) => {
            tema_model_1.default.findByIdAndUpdate(req.params.id, {
                tema: req.body.tema
            })
                .then(temaActualizado => {
                res.status(200).json({
                    ok: true,
                    tema: temaActualizado,
                    message: 'Tema actualizado'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Tema no actualizado'
                });
            });
        };
        this.eliminarTema = (req, res) => {
            tema_model_1.default.findByIdAndDelete(req.params.id)
                .then(temaEliminado => {
                res.status(200).json({
                    ok: true,
                    message: 'Tema eliminado'
                });
            })
                .catch(error => {
                res.status(400).json({
                    ok: false,
                    error: error.name,
                    message: 'Tema no eliminado'
                });
            });
        };
    }
}
exports.TemaController = TemaController;
//# sourceMappingURL=tema.controller.js.map