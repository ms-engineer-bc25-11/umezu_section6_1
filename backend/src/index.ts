import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { errorHandler } from './middleware/errorHandler.js';
import { PrismaClient } from '@prisma/client';

const app = express();
const PORT = 3001;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Portfolio Backend!');
});

app.get('/profile', async (req: Request, res: Response, next: NextFunction) => {
    try {const profile = await prisma.profile.findFirst();

        res.json(profile);
    } catch (error) {
        next(error);
    }
    });

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

