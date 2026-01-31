'use client';

export default function AdminPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">🌿 本番用管理画面（準備中）</h1>
      <p>ここはMiddlewareによって守られています。</p>
      <button
        className="
  /* 1. カラー：自然を感じるセージグリーン */
  bg-[#5a7d6c] text-white font-medium
  
  /* 2. 形：少し丸みを強くして柔らかい印象に */
  px-8 py-3 rounded-lg shadow-sm
  
  /* 3. マウスを乗せた時：少しだけ明るくして軽やかに */
  hover:bg-[#6b8e7d] hover:shadow-md
  
  /* 4. 動き */
  active:scale-95 transition-all duration-200
"
      >
        ポートフォリオを見る
      </button>
    </div>
  );
}
