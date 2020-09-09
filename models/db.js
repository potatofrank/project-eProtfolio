const mongoose = require('mongoose');

const uri = "mongodb+srv://ArtHur:0626@cluster0-nm8oy.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error:'));
db.once('open',function () {
    console.log('Connect to mongoose');
});