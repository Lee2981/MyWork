const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: { type: String, require: true },
    password: { type: String, require: true, max: 100 },
    sex: { type: String, require: true },
    create_time: { type: Date }
})


//导出User模型

module.exports = mongoose.model('User', UserSchema);