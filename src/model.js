const mongoose = require('mongoose')

// _id is implicit by default on all mongoose schemas
const videoSchema = new mongoose.Schema({
  subject: {type: String, required: true},
  class: {type: String, required: true},
  lecture: {type: String, required: true},
  university: {type: String, required: true},
  professor: {type: String, required: true},
  date: {type: Date, required: true}
})

module.exports = mongoose.model('Video', videoSchema)
