import mongoose from 'mongoose';
import { config } from 'dotenv';

config(); // Carrega variáveis de ambiente

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1); // Encerra o processo se não conseguir conectar
  }
};
