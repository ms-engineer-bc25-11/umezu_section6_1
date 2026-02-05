import { Request, Response, NextFunction } from 'express';
import { auth } from '../lib/firebase.js';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

// 1. 通行証（ヘッダー）があるかチェック
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // 2. 【最重要】Firebaseに「この通行証は本物？」と問い合わせる
    const decodedToken = await auth.verifyIdToken(token);
    
    // 3. 本物なら、ユーザー情報をリクエストに忍ばせて次へ進む
    (req as any).user = decodedToken;
    next();
  } catch (error) {
    // 4. 偽物だったり期限切れなら、ここでシャットアウト
    console.error('Firebase token verification error:', error);
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
