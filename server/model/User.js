const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: 'string',
        require: true,
        unique: true,
    },
    password: {
        type: 'string',
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('users', UserSchema);
