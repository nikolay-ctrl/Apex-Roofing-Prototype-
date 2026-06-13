import type { ErrorEvent, EventHint } from '@sentry/nextjs'

export const DEFAULT_SENTRY_DSN =
  'https://3205903ddcd5c67e7a34fb340da7fc9c@o4511384582553600.ingest.de.sentry.io/4511558251708496'

export const SENTRY_ORG = process.env.SENTRY_ORG ?? 'nm-systems'
export const SENTRY_PROJECT = process.env.SENTRY_PROJECT ?? 'apex-roofing'

export function resolveSentryDsn(preferred?: string) {
  return preferred ?? process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN ?? DEFAULT_SENTRY_DSN
}

export function scrubPii(event: ErrorEvent, _hint: EventHint): ErrorEvent | null {
  if (event.user) {
    delete event.user.email
    delete event.user.ip_address
  }

  if (event.request?.cookies) {
    delete event.request.cookies
  }

  return event
}

export function getSharedSentryOptions(dsn: string) {
  return {
    dsn,
    enabled: Boolean(dsn),
    environment: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.1,
    beforeSend: scrubPii,
  } as const
}
