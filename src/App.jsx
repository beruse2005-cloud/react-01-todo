import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            현재 Count : {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );

    // 초기 렌더링 : App() 최초 실행
    //              count라고 하는 특수 변수를 초기값 0 으로 마련해서
    //              return 안에 있는 내용을 브라우저에게 전달

    // 리렌더링
    //        1. + 버튼을 사용자가 누를 때
    //               onClick에 제공된 함수가 발동해서 setCount(count + 1), 즉 count state의 값을 +1 해서 저장하게 되고
    //                       그러면 count를 감시하던 React엔진이 바뀜을 감지하고 화면에 쓰여진 count 부분을 리렌더링
    //                                                             App 전체가 다시 그려지는게 아니라, count부분만 리렌더링
    //        2. - 버튼을 사용자가 누를 때
    //               onClick에 제공된 함수가 발동해서 setCount(count - 1), 즉 count state의 값을 -1 해서 저장하게 되고
    //                       그러면 count를 감시하던 React엔진이 바뀜을 감지하고 화면에 쓰여진 count 부분을 리렌더링
}

export default App;