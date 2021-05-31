import * as mongoose from 'mongoose';

const FilmeSchema = new mongoose.Schema({
    titulo: {type: String, required: true, unique: true},
    urlFoto: {type: String},
    urlIMDb: {type: String},
    descricao: {type: String},
    notaIMDb: {type: Number, required: true},
    dtLancamento: {type: Date, required: true},
    genero: {type: String, required: true}
})

export default mongoose.model('Filme', FilmeSchema);