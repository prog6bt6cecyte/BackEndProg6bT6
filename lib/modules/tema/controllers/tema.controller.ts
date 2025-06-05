import { Request, Response } from 'express';
import * as _ from 'lodash';
import Tema from '../models/tema.model';

export class TemaController {
    crearTema = (req: Request, res: Response) => {
        const nuevoTema = new Tema({
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
    }

    obtenerTemas = (req: Request, res: Response) => {
        Tema.find()
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
    }

    actualizarTema = (req: Request, res: Response) => {
        Tema.findByIdAndUpdate(req.params.id, {
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
    }

    eliminarTema = (req: Request, res: Response) => {
        Tema.findByIdAndDelete(req.params.id)
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
    }
}
