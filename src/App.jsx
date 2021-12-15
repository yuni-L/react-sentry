import './App.css';
import sentry from './utils/sentry';

function App() {
  const errorToSentry = () => {
    try {
      throw new Error ('센트리로 에러 보내기');
    } catch(error) {
      sentry.error(error);
      sentry.message('임의의 에러 후, 보내지는 메세지');
    }
  }
  return (
    <div className="App">
      <button onClick={() => { errorToSentry(); }}>센트리 에러 보내기</button>
    </div>
  );
}

export default App;
