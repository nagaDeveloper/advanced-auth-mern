import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB database is connected: ${connect.connection.host}`);
  } catch (error) {
    console.log('Error coneection to MongoDB:', error.message);
    process.exit(1); //faiure code - 1 success
  }
};
