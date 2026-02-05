'use client';
import { useState } from 'react';
// 💡 ポイント1： '@/lib/firebase' から、初期化済みの auth をインポートする
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function AdminProfilePage() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleTestLogin = async () => {
    // 💡 ポイント2： ここで getAuth() を呼ばず、上の import で持ってきた auth を使う
    try {
      await signInWithEmailAndPassword(
        auth,
        'talsolidesignworks@gmail.com',
        'gama0318'
      );
      alert('ログインしました！');
    } catch (err: any) {
      console.error(err);
      alert('ログイン失敗: ' + err.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 💡 ポイント3： ここでも import した auth からユーザー情報を取る
    const user = auth.currentUser;

    if (!user) {
      alert('ログインが必要です。先にログインボタンを押してください。');
      return;
    }

    try {
      const token = await user.getIdToken();
      const response = await fetch('http://localhost:3001/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, bio }),
      });

      if (response.ok) {
        alert('プロフィールの更新に成功しました！');
      } else {
        alert('更新に失敗しました...');
      }
    } catch (error) {
      console.error('通信エラー:', error);
      alert('サーバーと通信できませんでした。');
    }
  };

  return (
    <div className="p-10 text-black bg-white min-h-screen">
      <h1 className="text-xl font-bold mb-4">プロフィール編集</h1>

      <button
        type="button"
        onClick={handleTestLogin}
        className="mb-8 block p-2 bg-gray-200 rounded text-sm underline"
      >
        （テスト用）管理者ログインを実行
      </button>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="名前"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="自己紹介"
          className="border p-2 rounded"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          更新を保存する
        </button>
      </form>
    </div>
  );
}
