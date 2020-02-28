const { Schema, model } = require('mongoose')
// Schema nos permite guardar un esquema, básicamente que es lo que vamos a guardar en MongoDB
// model a artir de un Schema, nos permite crear una clase que va a permitir obtener métodos y props que accederemos desde el código
// Básicamente ambos nos van a servir para poder definir un modelo de datos. Definir que es lo que queremos guardar dentro de la DB de MongoDB

// Definiendo el Schema de lo que queremos en la base de datos.
const NoteSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

// Creando el modelo a partir del Schema creado previamente. Lo exportamos para ser usado en otras partes que necesitaremos
module.exports = model('Note', NoteSchema)