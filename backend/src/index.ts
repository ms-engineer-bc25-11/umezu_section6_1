import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import { errorHandler } from './middleware/errorHandler.js';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from './middleware/auth.js';

const app = express();
const PORT = 3001;
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('He　　　llo, Portfolio Backend!');
});

app.get('/profile', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const profile = await prisma.profile.findFirst();

    res.json(profile);
  } catch (error) {
    next(error);
  }
});

app.put(
  '/profile',
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // req.body には、フロントエンドから送られてきた「新しい名前」などが入っています
      const { name, bio, imageUrl } = req.body;

      // 2. Prismaを使って、データベースの最初の1件(id: 1)を更新します
      const updatedProfile = await prisma.profile.update({
        where: { id: 1 }, // どのデータを更新するか（基本は最初の1件）
        data: {
          name,
          bio,
          imageUrl,
        },
      });

      // 3. 更新された後のデータをフロントエンドに返します
      res.json(updatedProfile);
    } catch (error) {
      // もし更新に失敗（P2025など）したら、errorHandlerにバトンタッチします
      next(error);
    }
  }
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
