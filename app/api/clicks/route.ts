import { NextResponse } from 'next/server';

let clickCount = 0; // This will reset every server restart

export async function GET() {
  return NextResponse.json({ clickCount });
}

export async function POST(request: Request) {
  const { clickCount: newClickCount } = await request.json();

  if (typeof newClickCount === 'number') {
    clickCount += newClickCount;
    return NextResponse.json({ message: 'Click count updated', clickCount });
  } else {
    return NextResponse.json({ message: 'Invalid click count value' }, { status: 400 });
  }
}
