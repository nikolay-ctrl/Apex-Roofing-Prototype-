import * as Sentry from '@sentry/nextjs'
import { getSharedSentryOptions, resolveSentryDsn } from './sentry.shared'

Sentry.init(getSharedSentryOptions(resolveSentryDsn()))
