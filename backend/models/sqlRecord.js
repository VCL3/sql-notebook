const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const SqlRecordSchema = new Schema(
  {
    id: Number,
    message: String,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('SqlRecord', SqlRecordSchema);