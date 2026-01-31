import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// .env.localから設定を読み込む
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// すでに初期化されていたらそれを使い、なければ新しく初期化する(Next.js特有の書き方)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 認証機能（Auth）をエクスポート
export const auth = getAuth(app);