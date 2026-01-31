'use client'; // ブラウザで動く画面であることを宣言

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // ドキュメントにある「ログイン関数」
import { auth } from '@/lib/firebase'; // さっき作った「準備室の窓口」
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  // 入力されたメールとパスワードを一時保存する「箱」
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // ボタンを押した時の動き
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // auth（窓口）と入力されたemail, passwordをFirebaseに渡して「確認して！」と頼む
      await signInWithEmailAndPassword(auth, email, password);

      alert('ログイン成功！');
      router.push('/'); // ログインできたらトップページへ飛ばす
    } catch (err: any) {
      setError(
        'ログインに失敗しました。メールアドレスかパスワードが違います。'
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="p-8 bg-white shadow-md rounded-lg border border-gray-200"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          管理画面ログイン
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          placeholder="メールアドレス"
          className="block w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          className="block w-full p-2 mb-6 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          ログイン
        </button>
      </form>
    </div>
  );
}
