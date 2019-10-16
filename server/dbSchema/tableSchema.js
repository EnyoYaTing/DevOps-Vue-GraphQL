const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
  name: {
    type: String
  },
  season:{
    type: String
  },
  h_draw:{
    type: Number
  },
   h_goal:{
    type: Number
  },
   h_l_goal:{
    type: Number
  },
   h_loss:{
    type: Number
  },
   h_p:{
    type: Number
  },
   h_pts:{
    type: Number
  },
   h_win:{
    type: Number
  },
  league:{
    type: String
  },
  a_draw:{
    type: Number
  },
  a_goal:{
    type: Number
  },
  a_l_goal:{
    type: Number
  },
  a_loss:{
    type: Number
  },
  a_p:{
    type: Number
  },
  a_pts:{
    type: Number
  },
  a_win:{
    type: Number
  },
  draw:{
    type: Number
  },
  goal:{
    type: Number
  },
  l_goal:{
    type: Number
  },
  loss:{
    type: Number
  },
  p:{
    type: Number
  },
  pts:{
    type: Number
  },
  win:{
    type: Number
  },
  rank:{
    type: Number
  }
})

module.exports = tableSchema