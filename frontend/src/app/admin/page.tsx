'use client';

import { useEffect, useState } from 'react';
// 💡 ポイント1: 先ほどの型定義ファイルを読み込みます
import { Profile } from '@/types';

export default function Home() {
  // 💡 ポイント2: useStateに <Profile | null> と書くことで、
  // 「ここには Profile のルールに沿ったデータが入るよ」と教えてあげます
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // バックエンドからデータを取得
    fetch('http://localhost:3001/profile')
      .then((res) => res.json())
      .then((data: Profile) => {
        // 💡 ここでも型を指定
        setProfile(data);
      })
      .catch((err) => console.error('データ取得エラー:', err));
  }, []);

  // データが届くまでは読み込み中を表示
  if (!profile)
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fcfaf2]">
        <p className="text-[#5a7d6c] animate-pulse">読み込み中...</p>
      </div>
    );

  return (
    <main className="min-h-screen bg-[#fcfaf2] text-[#333] font-sans">
      {/* ヒーローセクション */}
      <div className="flex flex-col items-center justify-center py-32 px-10">
        {/* 💡 ポイント3: profile. と打つと name や bio が予測候補に出るようになります */}
        <h1 className="text-5xl font-bold mb-6 text-[#5a7d6c]">
          {profile.name} のポートフォリオ
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-center text-gray-600 mb-8">
          {profile.bio}
        </p>

        {/* 💡 画像があれば表示する設定（一旦サンプル画像を入れています） */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={profile.imageUrl || 'https://via.placeholder.com/150'}
            alt="プロフィール画像"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="bg-white py-20 px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold border-b-2 border-[#5a7d6c] inline-block mb-10">
            Skills & Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500 italic">
            <p>
              ※
              管理画面から追加できるように、これからさらにアップデート予定です。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
