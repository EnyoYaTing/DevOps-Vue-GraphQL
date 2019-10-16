const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/*
The cloud database we used is mLab (https://mlab.com/)
const connectionString = 'mongodb+srv://[yourID]:[youPW]@cluster0-hlezw.mongodb.net/football?retryWrites=true'
*/
const connectionString = 'Your MongoDB URL'


mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${connectionString}`));