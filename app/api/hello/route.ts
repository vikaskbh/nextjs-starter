import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: "Hello from Next.js 15 API"
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    return NextResponse.json({ 
      message: 'Data received successfully',
      data: body,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON' },
      { status: 400 }
    )
  }
}
