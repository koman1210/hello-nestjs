import { Document } from 'mongoose';

export interface User extends Document {
  // id: number;
  fullname: string;
  username: string;
  password: string;
  role: string;
  email: string;
  phonenumber: string;
  address?: string;
}