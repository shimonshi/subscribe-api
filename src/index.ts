import express from 'express';
import connect from './connect';
import cors from 'cors';
import initRoutes from './routes';

// Init database connection
if (!process.env.MONGODB_URI) {
    throw new Error('Error');
}
connect({ db: process.env.MONGODB_URI });

// Init express API
const port = process.env.API_PORT;
const app = express();

app.use(cors());
app.use(express.json());

initRoutes(app);
app.listen(port, () => console.log(`Server is running at ${port}`));
