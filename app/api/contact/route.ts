import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required' },
        { status: 400 }
      );
    }

    // Save to database
    const inquiry = await prisma.contactInquiry.create({
      data: {
        name,
        phone,
        service: service || null,
        message
      }
    });

    // Log the inquiry with details
    console.log('📧 New Contact Form Submission:');
    console.log('   Name:', name);
    console.log('   Phone:', phone);
    console.log('   Service:', service || 'Not specified');
    console.log('   Message:', message);
    console.log('   Submitted at:', new Date().toLocaleString());
    console.log('   Database ID:', inquiry.id);

    // TODO: In production, you can add these features:
    // 1. Send email notification to admin
    // 2. Send WhatsApp notification to admin
    // 3. Send confirmation email to customer
    // 4. Integrate with CRM system

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will contact you soon via WhatsApp or phone call.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again or contact us directly via WhatsApp.' },
      { status: 500 }
    );
  }
}
