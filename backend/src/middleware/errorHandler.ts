import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction 
) => {
  // ここでエラーをコンソールに出して、ユーザーにレスポンスを返す
  console.error(err.stack);

  res.status(500).json({
    message: "サーバーでエラーが発生しました"
  });
};