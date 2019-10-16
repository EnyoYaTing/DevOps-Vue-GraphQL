const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connectionString = 'mongodb+srv://ahah:da18787@cluster0-hlezw.mongodb.net/football?retryWrites=true'


mongoose.connect(connectionString, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${connectionString}`));