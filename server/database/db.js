import mongoose from 'mongoose';


const USERNAME = 'ayushmatmotgill';
const PASSWORD = 'coincoin';

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.vmegvj3.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((error) => {
      console.log('Error while connecting with the database ', error.message);
    });
 
}

export default Connection;