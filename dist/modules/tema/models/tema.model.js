"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TemaSchema = new Schema({
    tema: {
        type: String,
        required: [true, 'tema required'],
        unique: true
    }
});
const Tema = mongoose.model("Tema", TemaSchema);
exports.default = Tema;
//# sourceMappingURL=tema.model.js.map