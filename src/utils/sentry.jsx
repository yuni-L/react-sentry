import * as Sentry from "@sentry/react";
// import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

const sentry = {
  init: () => {
    // init
    process.env.NODE_ENV === "development" &&
      Sentry.init({
        dsn: `${process.env.REACT_APP_DSN}`,
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1,
      });
  },
  captureError: (err) => {
    // error 캡처하기
    Sentry.captureException(err);
  },
  captureMessage: (msg) => {
    // 메세지보내기
    Sentry.captureMessage(msg);
  },
};

export default sentry;
