import type { NextRequest, NextResponse } from 'next/server'
 
export function middleware(request: NextRequest, response: NextResponse) {
  const currentUser = request.cookies.get('user')?.value
  const token = request.cookies.get('token')?.value
  // If the user is logged in, send token with the all requests
    if (currentUser && token) {
        console.log('User is logged in')
        request.headers.set('Authorization', `Bearer ${token}`)
    }

}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}