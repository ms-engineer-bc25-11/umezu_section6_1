(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>"); // Firebase の道具をインポート
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AdminProfilePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "00d42b1028bcb7343e100f297b6e04c9594b0c60a82561eb3a7b3b82965523a4") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "00d42b1028bcb7343e100f297b6e04c9594b0c60a82561eb3a7b3b82965523a4";
    }
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleTestLogin = _AdminProfilePageHandleTestLogin;
    let t0;
    if ($[1] !== bio || $[2] !== name) {
        t0 = ({
            "AdminProfilePage[handleSubmit]": async (e)=>{
                e.preventDefault();
                const auth_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])();
                const user = auth_0.currentUser;
                if (!user) {
                    alert("\u30ED\u30B0\u30A4\u30F3\u304C\u5FC5\u8981\u3067\u3059\u3002\u4E0B\u306E\u30C6\u30B9\u30C8\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002");
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
                        alert("\u66F4\u65B0\u306B\u5931\u6557\u3057\u307E\u3057\u305F...\uFF08\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u5074\u306E\u30ED\u30B0\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\uFF09");
                    }
                } catch (t1) {
                    const error = t1;
                    console.error("\u901A\u4FE1\u30A8\u30E9\u30FC:", error);
                    alert("\u30B5\u30FC\u30D0\u30FC\u3068\u901A\u4FE1\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002CORS\u8A2D\u5B9A\u306F\u5927\u4E08\u592B\u3067\u3059\u304B\uFF1F");
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
            lineNumber: 66,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: handleTestLogin,
            className: "mb-8 block p-2 bg-gray-200 rounded text-sm underline",
            children: "（テスト用）管理者ログインを実行"
        }, void 0, false, {
            fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
            lineNumber: 67,
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
            lineNumber: 85,
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
            lineNumber: 102,
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
            lineNumber: 110,
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
                    lineNumber: 117,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/bootcamp/umezu_section6_1/frontend/src/app/admin/profile/page.tsx",
            lineNumber: 117,
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
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])();
    ;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithEmailAndPassword"])(auth, "talsolidesignworks@gmail.com", "gama0318");
        alert("\u30ED\u30B0\u30A4\u30F3\u3057\u307E\u3057\u305F\uFF01");
    } catch (t0) {
        const err = t0;
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

//# sourceMappingURL=bootcamp_umezu_section6_1_frontend_src_app_admin_profile_page_tsx_feb24cce._.js.map