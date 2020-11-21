const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const argon2 = require('argon2');

const UserSchema = new Schema({
    forename: String,
    surname: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    permissionLevel:Number
});

UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    return await argon2.verify(user.password, password);
}

mongoose.model('User', UserSchema);


