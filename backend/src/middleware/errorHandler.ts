import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // ここでエラーをコンソールに出して、ユーザーにレスポンスを返す
  console.error(err.stack); //サーバー側にログを残す

  let status = err.status || 500;
  let message = err.message || 'Internal Server Error';

  if (err.code === 'P2025') {
    //prisma専用のエラーコード
    status = 404;
    message = '指定されたデータが見つかりませんでした。';
  }

  res.status(status).json({
    error: {
      message: message,
      status: status,
    },
  });
};
