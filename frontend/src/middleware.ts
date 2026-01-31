import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// この門番が守る範囲（設定）
export const config = {
  matcher: ['/admin/:path*'], // 「/admin」から始まるページは全部チェック！
}

export function middleware(request: NextRequest) {
  // 本来はここでFirebaseのトークンを確認しますが、
  // まずは「仕組み」を理解するために、仮のルールを作ります。
  
  const isLoggedIn = request.cookies.get('isLoggedIn'); // クッキーがあるか確認

  // もし「/admin」に行こうとしているのに、ログインしていなかったら
  if (!isLoggedIn) {
    // ログイン画面へ強制送還！
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}