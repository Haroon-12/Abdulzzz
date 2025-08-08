import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const inquiries = await prisma.contactInquiry.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error('Error fetching contact inquiries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact inquiries' },
      { status: 500 }
    );
  }
}
