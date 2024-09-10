import mongoose, { Document } from 'mongoose';

export interface User extends Document {
  fullname: string;
  username: string;
  password: string;
  role: string;
  email: string;
  phonenumber: string;
  address?: string;
}