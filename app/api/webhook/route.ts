import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 处理 Base Mini App webhook 事件
    console.log('Webhook received:', body);
    
    // 这里可以处理各种事件，如用户交互、通知等
    switch (body.type) {
      case 'user_interaction':
        // 处理用户交互事件
        console.log('User interaction:', body.data);
        break;
      case 'notification':
        // 处理通知事件
        console.log('Notification:', body.data);
        break;
      default:
        console.log('Unknown webhook type:', body.type);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
