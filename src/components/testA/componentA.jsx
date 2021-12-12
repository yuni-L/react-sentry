import ComponentB from './componentB'
// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";
import sentry from '../../utils/sentry'

function componentA() {
  console.log('linked github repository commit test');
  // console.log('sentry', sentry)
  sentry.init();
  // Sentry.init({
  //   dsn: `${process.env.REACT_APP_DSN}`,
  //   integrations: [new Integrations.BrowserTracing()],
  
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //  tracingOptions: { // 하위 구성 요소를 추적하고 렌더링 프로세스에 대한 자세한 내용을 보기
  //     trackComponents: true,
  //  },
  //  attachProps: true, // 로깅을 위해 모든 Vue 구성 요소의 props를 보기
  //  tracesSampleRate: 1, // 0에서 1 사이의 숫자로 주어진 트랜잭션이 Sentry로 전송 될 확률을 제어
  // //  beforeSend: (event, hint) => console.log(event, hint), // 에러를 Sentry에게 전달하기 전 처리할 수 있는 hook
  // });
  
  console.log('componentA');
  return (
    <div className="componentA">
      <button onClick={() => {console.log('이동경로확인용')}}>이동경로확인용</button>
      <ComponentB />
    </div>
  );
}

export default componentA;
