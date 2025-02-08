import app from "./app.js";
import cloudinary from "cloudinary";
//import multer from "multer";
//import express from "express";


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.listen(process.env.PORT, () => {
    console.log('Server listening on port ${process.env.PORT}');
});

//const upload = multer({ dest: "uploads/" }); // Temporary directory for uploads

/*app.post("/api/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded!" });
    }
    res.status(200).json({ message: "File uploaded successfully!", filePath: req.file.path });
}); */