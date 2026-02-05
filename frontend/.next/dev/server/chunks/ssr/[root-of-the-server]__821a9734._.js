module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/firebase/auth/dist/index.mjs [app-ssr] (ecmascript) <locals>"); // Firebase の道具をインポート
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/@firebase/auth/dist/node-esm/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function AdminProfilePage() {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleTestLogin = async ()=>{
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])();
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(auth, 'talsolidesignworks@gmail.com', 'gama0318');
            alert('ログインしました！');
        } catch (err) {
            alert('ログイン失敗: ' + err.message);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])();
        const user = auth.currentUser;
        if (!user) {
            alert('ログインが必要です。下のテストボタンを押してください。');
            return;
        }
        try {
            const token = await user.getIdToken();
            const response = await fetch('http://localhost:3001/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    bio
                })
            });
            if (response.ok) {
                alert('プロフィールの更新に成功しました！');
            } else {
                alert('更新に失敗しました...（バックエンド側のログを確認してください）');
            }
        } catch (error) {
            console.error('通信エラー:', error);
            alert('サーバーと通信できませんでした。CORS設定は大丈夫ですか？');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-black bg-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold mb-4",
                children: "プロフィール編集"
            }, void 0, false, {
                fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleTestLogin,
                className: "mb-8 block p-2 bg-gray-200 rounded text-sm underline",
                children: "（テスト用）管理者ログインを実行"
            }, void 0, false, {
                fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "名前",
                        className: "border p-2 rounded",
                        value: name,
                        onChange: (e)=>setName(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "自己紹介",
                        className: "border p-2 rounded",
                        value: bio,
                        onChange: (e)=>setBio(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-600 text-white p-2 rounded",
                        children: "更新を保存する"
                    }, void 0, false, {
                        fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__821a9734._.js.map