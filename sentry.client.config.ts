import * as Sentry from "@sentry/nextjs";


Sentry.init({
  dsn: "https://3a2c78888f5d2868a31d52315dee9e6f@o4507915975852032.ingest.us.sentry.io/4507915981029376",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",

    }),

    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),

  ],
});