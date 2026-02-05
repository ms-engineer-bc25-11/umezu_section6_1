import { initializeApp, getApp, getApps } from "firebase/app"; // 💡インポートを追加
import { getAuth } from "firebase/auth"; // 💡インポートを追加

// .env.localから設定を読み込む
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// 💡 既に初期化されていたらそれを使い、なければ新しく初期化する
// (Next.jsのホットリロードで二重に初期化されるのを防ぐお作法です)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 💡 「auth」という名前でエクスポートします
export const auth = getAuth(app);