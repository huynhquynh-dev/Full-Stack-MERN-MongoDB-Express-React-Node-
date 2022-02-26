const express = require('express');
const mongoose = require('mongoose');

const app = express();
const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://lionhuynh:quynh.huynh@cluster0.sxcoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        );
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

connectDB();

app.get('/', (req, res) => res.send('Hello, world!'));

const PORT = process.env.PORT | 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
