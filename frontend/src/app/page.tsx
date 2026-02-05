'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [profile, setProfile] = useState<{ name: string; bio: string } | null>(
    null
  );

  // 💡 画面が開いた瞬間に、バックエンド（3001番）に「今の名前を教えて！」と聞きに行く
  useEffect(() => {
    fetch('http://localhost:3001/profile')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error('データ取得エラー:', err));
  }, []);

  if (!profile) return <div className="p-10">読み込み中...</div>;

  return (
    <main className="min-h-screen bg-[#fcfaf2] text-[#333] font-sans">
      {/* ヒーローセクション */}
      <div className="flex flex-col items-center justify-center py-32 px-10">
        <h1 className="text-5xl font-bold mb-6 text-[#5a7d6c]">
          {profile.name} のポートフォリオ
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-center text-gray-600">
          {profile.bio}
        </p>
      </div>

      {/* 実績・スキルなどのセクション（枠組みだけ） */}
      <section className="bg-white py-20 px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold border-b-2 border-[#5a7d6c] inline-block mb-10">
            Skills & Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-500">
            <p>ここに実績やスキルを並べていきます。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
