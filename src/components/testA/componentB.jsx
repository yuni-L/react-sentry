/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import sentry from '../../utils/sentry'

function componentB() {
  const BB = () => {
    안나옴1;
    // try {
    //   a;
    // } catch(err) {
    //   sentry.captureError(err);
    //   // sentry.captureMessage('errtest');
    //   console.log('err', err);
    // }
  }
  return (
    <div className="componentB">
      <div>A의 하위 componentB</div>
      <button onClick={BB}>연결할 함수 없음</button>
    </div>
  );
}

export default componentB;
