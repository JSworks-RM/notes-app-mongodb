const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
}, {
    timestamps: true
})

// Creando método de la clase UserSchema que va a ser una función que recibe la contraseña que el usuario va a escribir
// Una vez que recibamos la contraseña, vamos a implementar un módulo llamado bcriptjs que se encargará de cifrar la contraseña.
UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

UserSchema.methods.matchPassword = async function (password) {
    return await bcriypt.compare(password, this.password)
} 

module.exports = model('User', UserSchema)