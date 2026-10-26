import {useState} from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    // 사용자가 input에 입력한 값을, 버튼을 눌렀을 때 todoList에 기록하는 "기능" => 버튼에 onClick 만들어야 되네?
    // setTodoList를 통해 원래 있던 배열에 사용자가 입력한 값을 추가해서 덮어쓰기를 해야함
    // 그렇다면, "사용자가 입력한 값"은 어떻게 구하지?

    // 사용자가 입력한 값을 나중에 꺼내오는건 불가능
    // 사용자가 키보드를 눌렀을 때 발동시킬 수 있는 속성 => onChange
    // 사용자가 입력한 값을 onChange를 통해 실시간 발동시켜서 기록을 먼저 받아놓는 것 => state가 필요함
    // 결론. 사용자가 input에 입력을 할 때마다 onChange가 발동되어서 그 값을 state인 todoValue 에 기록하는 기능이 필요

    // 그런데,
    // onClick도 그렇고 onChange도 그렇고, 이것들은 "사용자가 어떠한 사건"을 일으키는 상황
    // onClick={함수}           onClick={(사건에 대해서 리액트가 분석한 내용) => { 실행할 내용 }}
    // '사건에 대해 리액트가 분석한 내용'을 이벤트(event)라고 부름



    // 버튼을 클릭한 이후에 해줘야 되는 일?    => todoValue의 값을 todoList에 덧붙여주기만 하면 됨

    return (
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form>
                <input type={"text"} placeholder={"Write your to do..."} onChange={(event) => { setTodoValue(event.target.value) }}/>
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