const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const LybSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    content: { type: String, required: true },
    author: { type: String, required: true },
    create_time: { type: Date }
})


//导出Lyb模型

module.exports = mongoose.model('Lyb', LybSchema);