import mongoose from 'mongoose';

const uri = "mongodb+srv://jeffri:jrvl0506@cluster0-siod5.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Database Is conected'))
    .catch(error => console.log(error));