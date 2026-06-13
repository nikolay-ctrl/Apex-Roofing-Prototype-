import { withSentryConfig } from '@sentry/nextjs'

const DEFAULT_SENTRY_DSN =
  'https://3205903ddcd5c67e7a34fb340da7fc9c@o4511384582553600.ingest.de.sentry.io/4511558251708496'

const SENTRY_ORG = process.env.SENTRY_ORG ?? 'nm-systems'
const SENTRY_PROJECT = process.env.SENTRY_PROJECT ?? 'apex-roofing'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN ?? DEFAULT_SENTRY_DSN,
    SENTRY_DSN: process.env.SENTRY_DSN ?? DEFAULT_SENTRY_DSN,
    SENTRY_ORG,
    SENTRY_PROJECT,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withSentryConfig(nextConfig, {
  org: SENTRY_ORG,
  project: SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  sentryUrl: 'https://de.sentry.io',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: '/monitoring',
})
