import mongoose, { Schema } from "mongoose";

export const UserSchema = new Schema({
    id: { type: mongoose.SchemaType, required: true, unique: true },
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    passowrd: { type: String, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: String, required: true },
    address: { type: String, required: false }
});