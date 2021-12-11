import './App.css';
import ComponentA from './components/testA/componentA'
import ComponentC from './components/testB/componentC'

function App() {
  return (
    <div className="App">
      <ComponentA/>
      <ComponentC/>
      {/* <button onClick={noneOfFunction}>연결할 함수 없음</button> */}
    </div>
  );
}

export default App;
