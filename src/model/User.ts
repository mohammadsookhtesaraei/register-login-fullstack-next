
// import mongose and type and schema
import mongoose, { Schema, Document, Model } from "mongoose";


// type user model
interface IUserModel extends Document {
    email: string,
    password: string,
    createdAt: Date,
    role: "USER" | "ADMIN"
};

// create schema for user model
const userSchema: Schema<IUserModel> = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
});

// and crate user model from userschema
const User: Model<IUserModel> = mongoose.models.User || mongoose.model<IUserModel>("User", userSchema);

export default User;