import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/getCurrentUser'; // أو أينما تكون دالتك

export async function GET() {
  const user = await getCurrentUser(); // ستجلب التوكن من الكوكيز وتتحقق من المستخدم

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json(user);
}

export async function DELETE() {
  // بنحذف التوكن من الكوكيز عن طريق إعادة الكوكي فاضي ومنتهي
  const response = NextResponse.json({ message: 'Logged out successfully' });

  response.cookies.set('token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0), // منتهي
  });

  return response;
}