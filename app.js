import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import tuitsController from './controllers/tuits/tuits-controller.js';

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';

mongoose.connect(CONNECTION_STRING).then(() => {
  console.log('Connected to MongoDB!');
});

const app = express();
app.use(cors());
app.use(express.json());

HelloController(app);
UserController(app);
tuitsController(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
