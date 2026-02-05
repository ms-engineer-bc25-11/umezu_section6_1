(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bootcamp/umezu_section6_1/frontend/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>"); // 💡インポートを追加
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>"); // 💡インポートを追加
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
;
// .env.localから設定を読み込む
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBbIdFtdJTuD3xqhtuJtQGQIgeJZEMALMg"),
    authDomain: ("TURBOPACK compile-time value", "my-portfolio-2601.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "my-portfolio-2601"),
    storageBucket: ("TURBOPACK compile-time value", "my-portfolio-2601.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "520734938002"),
    appId: ("TURBOPACK compile-time value", "1:520734938002:web:72f5c3488e288d7457274b")
};
// 💡 既に初期化されていたらそれを使い、なければ新しく初期化する
// (Next.jsのホットリロードで二重に初期化されるのを防ぐお作法です)
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])();
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// 💡 ポイント1： '@/lib/firebase' から、初期化済みの auth をインポートする
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminProfilePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "a217609f641fbed9f05e16a6d3f7dfc2dfc1e3af502c1f17b43b6280e2247d68") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a217609f641fbed9f05e16a6d3f7dfc2dfc1e3af502c1f17b43b6280e2247d68";
    }
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleTestLogin = _AdminProfilePageHandleTestLogin;
    let t0;
    if ($[1] !== bio || $[2] !== name) {
        t0 = ({
            "AdminProfilePage[handleSubmit]": async (e)=>{
                e.preventDefault();
                const user = __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
                if (!user) {
                    alert("\u30ED\u30B0\u30A4\u30F3\u304C\u5FC5\u8981\u3067\u3059\u3002\u5148\u306B\u30ED\u30B0\u30A4\u30F3\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
                    return;
                }
                ;
                try {
                    const token = await user.getIdToken();
                    const response = await fetch("http://localhost:3001/profile", {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            name,
                            bio
                        })
                    });
                    if (response.ok) {
                        alert("\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306E\u66F4\u65B0\u306B\u6210\u529F\u3057\u307E\u3057\u305F\uFF01");
                    } else {
                        alert("\u66F4\u65B0\u306B\u5931\u6557\u3057\u307E\u3057\u305F...");
                    }
                } catch (t1) {
                    const error = t1;
                    console.error("\u901A\u4FE1\u30A8\u30E9\u30FC:", error);
                    alert("\u30B5\u30FC\u30D0\u30FC\u3068\u901A\u4FE1\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
                }
            }
        })["AdminProfilePage[handleSubmit]"];
        $[1] = bio;
        $[2] = name;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    const handleSubmit = t0;
    let t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl font-bold mb-4",
            children: "プロフィール編集"
        }, void 0, false, {
            fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleTestLogin,
            className: "mb-8 block p-2 bg-gray-200 rounded text-sm underline",
            children: "（テスト用）管理者ログインを実行"
        }, void 0, false, {
            fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "AdminProfilePage[<input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["AdminProfilePage[<input>.onChange]"];
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "\u540D\u524D",
            className: "border p-2 rounded",
            value: name,
            onChange: t3
        }, void 0, false, {
            fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[7] = name;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "AdminProfilePage[<textarea>.onChange]": (e_1)=>setBio(e_1.target.value)
        })["AdminProfilePage[<textarea>.onChange]"];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== bio) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            placeholder: "\u81EA\u5DF1\u7D39\u4ECB",
            className: "border p-2 rounded",
            value: bio,
            onChange: t5
        }, void 0, false, {
            fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[10] = bio;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "bg-blue-600 text-white p-2 rounded",
            children: "更新を保存する"
        }, void 0, false, {
            fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== handleSubmit || $[14] !== t4 || $[15] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 text-black bg-white min-h-screen",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col gap-4",
                    children: [
                        t4,
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
                    lineNumber: 116,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[13] = handleSubmit;
        $[14] = t4;
        $[15] = t6;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
}
_s(AdminProfilePage, "MLlcVydG2yW9vwgQhpo9LCEI8KI=");
_c = AdminProfilePage;
async function _AdminProfilePageHandleTestLogin() {
    ;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(__TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], "talsolidesignworks@gmail.com", "gama0318");
        alert("\u30ED\u30B0\u30A4\u30F3\u3057\u307E\u3057\u305F\uFF01");
    } catch (t0) {
        const err = t0;
        console.error(err);
        alert("\u30ED\u30B0\u30A4\u30F3\u5931\u6557: " + err.message);
    }
}
var _c;
__turbopack_context__.k.register(_c, "AdminProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bootcamp_umezu_section6_1_frontend_src_37f5131a._.js.map