import mongoose from 'mongoose';

// import autoIncrement from 'mongoose-auto-increment';


const studSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    phone: String
})


// autoIncrement.initialize(mongoose.connection);
// studSchema.plugin(autoIncrement.plugin, 'student')

const student = mongoose.model('student', studSchema);

export default student;