import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { CloudinaryStorage } from "multer-storage-cloudinary";

dotenv.config();

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRETE_KEY, // Click 'View API Keys' above to copy your API secret
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "linkedin_clone/uploads",
        allowedFormats: ["jpg", "jpeg", "png"],
        // optional: custom filename logic
        public_id: (req, file) => `${Date.now()}-${file.originalname}`,
    },
});

export { cloudinary, storage };
