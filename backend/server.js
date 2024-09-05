import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './db/connectDb.js';
import router from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows to parse incoming requests: req.body

app.get('/', (req, res) => {
  res.send('Hello worlds');
});

app.use(router);

app.listen(PORT, () => {
  connectDB();
  console.log('Sever is running on port:', PORT);
});
