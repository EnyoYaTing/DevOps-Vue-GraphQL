const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({
  _id: String,
  a_name: String,
  date: String,
  h_name: String,
  league: String,
  season: String,
  a_score: Number,
  h_score: Number
})

module.exports = resultSchema

