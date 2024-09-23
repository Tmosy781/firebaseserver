import Image from "../models/Image.js";

export const createImage = async (req, res) => {
    const { imgName, imgUrl } = req.body;

    if (!imgName || !imgUrl) {
        return res.status(400).json({ error: "Name and imgUrl are required" });
    }

    try {
        const image = await Image.create({ imgName, imgUrl });
        res.status(201).json(image);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};