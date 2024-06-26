const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema(
    {
        url: {
            type: String,
        },
        lesson:  {type: Schema.Types.ObjectID, ref: 'Lesson'}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Video', videoSchema);
