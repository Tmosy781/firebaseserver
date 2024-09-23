import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import imageRoutes from './routes/image.js'; // Ensure this path is correct

dotenv.config();

const app = express();
const port = process.env.PORT || 8082;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/images", imageRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Connection error', error.message);
});