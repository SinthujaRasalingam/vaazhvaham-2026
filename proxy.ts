import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If the user visits the clean /admin/login URL
  if (pathname === '/admin') {
    // Invisibly rewrite the request to the real internal route
    return NextResponse.rewrite(new URL('/admin/login', request.url));
  }

  if (pathname === '/admin/dashboard') {
    return NextResponse.rewrite(new URL('/admin/admin/dashboard', request.url));
  }

  if (pathname === '/admin/staff') {
    return NextResponse.rewrite(new URL('/admin/admin/staff-management', request.url));
  }

  if (pathname === '/admin/news') {
    return NextResponse.rewrite(new URL('/admin/admin/news-management', request.url));
  }

  if (pathname === '/admin/event') {
    return NextResponse.rewrite(new URL('/admin/admin/event-management', request.url));
  }

  if (pathname === '/admin/publication') {
    return NextResponse.rewrite(new URL('/admin/admin/publication-management', request.url));
  }

  if (pathname === '/admin/staff/add') {
    return NextResponse.rewrite(new URL('/admin/admin/add/staff', request.url));
  }

  if (pathname === '/admin/news/add') {
    return NextResponse.rewrite(new URL('/admin/admin/add/news', request.url));
  }

  if (pathname === '/admin/event/add') {
    return NextResponse.rewrite(new URL('/admin/admin/add/event', request.url));
  }
  if (pathname === '/admin/publication/add') {
    return NextResponse.rewrite(new URL('/admin/admin/add/publication', request.url));
  }

  if (pathname === '/admin/staff/edit') {
    return NextResponse.rewrite(new URL('/admin/admin/edit/staff', request.url));
  }

  if (pathname === '/admin/news/edit') {
    return NextResponse.rewrite(new URL('/admin/admin/edit/news', request.url));
  }

  if (pathname === '/admin/event/edit') {
    return NextResponse.rewrite(new URL('/admin/admin/edit/event', request.url));
  }
  if (pathname === '/admin/publication/edit') {
    return NextResponse.rewrite(new URL('/admin/admin/edit/publication', request.url));
  }

  if (pathname === '/admin/news/delete') {
    return NextResponse.rewrite(new URL('/admin/admin/delete/news', request.url));
  }

  if (pathname === '/admin/event/delete') {
    return NextResponse.rewrite(new URL('/admin/admin/delete/event', request.url));
  }
  if (pathname === '/admin/publication/delete') {
    return NextResponse.rewrite(new URL('/admin/admin/delete/publication', request.url));
  }

  if (pathname === '/staff/dashboard') {
    return NextResponse.rewrite(new URL('/admin/staff/dashboard', request.url));
  }

  if (pathname === '/staff/news') {
    return NextResponse.rewrite(new URL('/admin/staff/news-management', request.url));
  }

  if (pathname === '/staff/event') {
    return NextResponse.rewrite(new URL('/admin/staff/event-management', request.url));
  }

  if (pathname === '/staff/publication') {
    return NextResponse.rewrite(new URL('/admin/staff/publication-management', request.url));
  }

  if (pathname === '/manager/dashboard') {
    return NextResponse.rewrite(new URL('/admin/manager/dashboard', request.url));
  }

  if (pathname === '/manager/news') {
    return NextResponse.rewrite(new URL('/admin/manager/news-management', request.url));
  }

  if (pathname === '/manager/event') {
    return NextResponse.rewrite(new URL('/admin/manager/event-management', request.url));
  }

  if (pathname === '/manager/publication') {
    return NextResponse.rewrite(new URL('/admin/manager/publication-management', request.url));
  }
}

export const config = {
  matcher:[
    '/admin',
    '/admin/dashboard',
    '/staff/dashboard',
    '/manager/dashboard',
    '/admin/staff',
    '/admin/news',
    '/admin/event',
    '/admin/publication',
    '/admin/staff/add',
    '/admin/news/add',
    '/admin/event/add',
    '/admin/publication/add',
    '/admin/staff/edit',
    '/admin/news/edit',
    '/admin/event/edit',
    '/admin/publication/edit',
    '/admin/news/delete',
    '/admin/event/delete',
    '/admin/publication/delete',
    '/staff/news',
    '/staff/event',
    '/staff/publication',
    '/manager/news',
    '/manager/event',
    '/manager/publication'

  ]
}