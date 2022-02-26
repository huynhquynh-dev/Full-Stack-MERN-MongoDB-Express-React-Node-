require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://lionhuynh:quynh.huynh@cluster0.sxcoo.mongodb.net/fullstackMERN?retryWrites=true&w=majority'
        );
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
