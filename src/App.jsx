import {useState} from "react";

function App() {
  // useState() 리액트 훅
  // react가 이 컴포넌트가 화면에 떠 있는 동안 유지하며 감시하는 특수 변수를 만들어내는 훅
  // 매개변수로서 useState(초기값)
  // 그렇게 해서 array를 리턴하는데 그 모양은 [state변수, state변수를 바꿀 수 있는 함수]
  const [count, setCount] = useState(0);

  // 사용자가 버튼을 클릭하는 순간, count에 현재값+1 하는 계산을 시켜야 됨

  function addCount() {
    setCount(count + 1);
    // 리턴이 필요없음. 왜?
    // count의 값을 이 함수는 바꿔줄 것이고,
    // count는 state이므로, 값만 바뀌면 리액트가 알아서 화면을 다시 그릴거니까.
  }

  // 어떠한 태그든지, onClick이라는 속성을 사용할 수 있고
  // 말 그대로 "이 태그가 클릭되는 순간" 집어넣은 함수가 실행됨
  return <button onClick={addCount}>지금 현재 count state의 값은 {count}입니다</button>;
}

export default App;