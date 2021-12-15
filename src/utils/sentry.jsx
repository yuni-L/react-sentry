import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const sentry = {
  init: () => {
    process.env.NODE_ENV === "development" &&
      Sentry.init({
        dsn: `${process.env.REACT_APP_DSN}`,
        integrations: [new Integrations.BrowserTracing()],
        release: process.env.REACT_APP_VERSION,
        environment: process.env.NODE_ENV
      });
  },
  error: (err) => {
    // error 캡처하기
    Sentry.captureException(err);
  },
  message: (msg) => {
    // 메세지보내기
    Sentry.captureMessage(msg);
  },
};

export default sentry;
