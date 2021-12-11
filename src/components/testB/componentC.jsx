import ComponentD from './componentD'
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

function componentC() {
  // Sentry.init({
  //   dsn: `${process.env.REACT_APP_DSN}`,
  //   integrations: [new Integrations.BrowserTracing()],
  
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // });
  console.log('componentC');
  return (
    <div className="componentC">
      <ComponentD />
    </div>
  );
}

export default componentC;
