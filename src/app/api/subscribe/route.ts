import { NextResponse } from 'next/server'

const GOOGLE_SHEETS_WEBHOOK = process.env.GOOGLE_SHEETS_WEBHOOK as string

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    console.log('📧 Received email:', email)
    console.log('📡 Using webhook:', GOOGLE_SHEETS_WEBHOOK)

    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, error: 'Invalid email address' })
    }

    const res = await fetch(GOOGLE_SHEETS_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    console.log('✅ Google response status:', res.status)
    const data = await res.json()
    console.log('📦 Google response data:', data)

    return NextResponse.json(data)
  } catch (err) {
    console.error('❌ Subscribe error:', err)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
