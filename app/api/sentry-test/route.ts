import * as Sentry from '@sentry/nextjs'
import { NextResponse } from 'next/server'

export async function GET() {
  Sentry.captureMessage('Apex Roofing Sentry connection test', 'info')
  await Sentry.flush(2000)

  return NextResponse.json({
    ok: true,
    message: 'Test event sent to Sentry. Check nm-systems / apex-roofing issues.',
  })
}
