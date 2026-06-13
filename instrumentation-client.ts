import * as Sentry from '@sentry/nextjs'
import { getSharedSentryOptions, resolveSentryDsn } from './sentry.shared'

const dsn = resolveSentryDsn(process.env.NEXT_PUBLIC_SENTRY_DSN)

Sentry.init({
  ...getSharedSentryOptions(dsn),
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
