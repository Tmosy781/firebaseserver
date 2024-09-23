import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    imgName: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
});

const Image = mongoose.model('Image', imageSchema);
export default Image;