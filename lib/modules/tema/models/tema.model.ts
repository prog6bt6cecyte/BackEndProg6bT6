import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface ITema extends mongoose.Document {  
    materia: string;
}

 const TemaSchema = new Schema(
    {
        tema: {
            type: String,
            required: [true, 'tema required'],
            unique: true
        }
    }
    
 );

const Tema = mongoose.model<ITema>("Tema", TemaSchema);
export default Tema;