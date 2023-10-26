import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AVATAR_PATH = path.join("/uploads/users/avatars");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    friendships: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Friendship",
      },
    ],
  },
  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

// static
userSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  "avatar"
);
userSchema.statics.avatarPath = AVATAR_PATH;

const User = mongoose.model("User", userSchema);

export default User;






