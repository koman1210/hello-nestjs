import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  email: { type: String, unique: true },
  address: { type: String },
});

export interface User extends Document {
  id: string;
  fullname: string;
  username: string;
  password: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}