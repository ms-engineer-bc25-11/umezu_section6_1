(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__7cc1eef7._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/bootcamp/umezu_section6_1/frontend/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bootcamp/umezu_section6_1/frontend/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
const config = {
    matcher: [
        '/admin/:path*'
    ]
};
function middleware(request) {
    // 本来はここでFirebaseのトークンを確認しますが、
    // まずは「仕組み」を理解するために、仮のルールを作ります。
    const isLoggedIn = request.cookies.get('isLoggedIn'); // クッキーがあるか確認
    // もし「/admin」に行こうとしているのに、ログインしていなかったら
    if (!isLoggedIn) {
        // ログイン画面へ強制送還！
        return __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$bootcamp$2f$umezu_section6_1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__7cc1eef7._.js.map