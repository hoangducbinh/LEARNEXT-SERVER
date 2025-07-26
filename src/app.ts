import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.route';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', userRoutes);

export default app;
