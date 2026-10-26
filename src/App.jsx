import {useState} from "react";

function App() {
    // 컴포넌트를 만들 때 처음 해야되는건, 내가 원하는 모양을 구상하고
    // 그 원하는 걸 만들어낼 때 필요한 state에 대해서 생각해봄

    // 1. 투두 리스트의 갯수를 관리할 state  => number   => 2번을 보니까 array고, length를 구하면 갯수가 나오네? => 필요없겠다
    // 2. 투두 리스트 목록을 관리할 state   => 어떠한 모양이 되어야 하냐 => 목록이니까 array겠다 => 그 안엔 string이 들어가겠다
    const [todoList, setTodoList] = useState([]);     // To Do 리스트를 저장할 state 선언 -> 초기값은 요소를 갖지 않은 []

    // 더 이상 코드를 쓸 건 없고, 초기 렌더링을 위한 모양을 잡아보자

    return (
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form>
                {/*
                    form 태그는 사용자가 입력하는 input을 묶어서 한 번에 전송하기 위해
                    존재하는 태그
                 */}
                <input type={"text"} placeholder={"Write your to do..."} />
                <button type="submit">Add To Do</button>
            </form>
            <hr />
            <ul>
                <li>더미</li>
                <li>데이터</li>
                <li>투두 추가</li>
            </ul>
        </>
    )
}

export default App;