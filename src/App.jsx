import {useState} from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, todoValue]);

        // 정상적으로 사용자가 입력한 todoValue가 todoList엔 들어감.
        // 하지만, 저장이 끝난 인풋에 입력된 값은 사라지지 않고 계속 화면에 떠 있는 상황임 => 비워주면 좋겠음
        // input에 바로 접근할 수는 없으니,
        // state를 이용해서 todoValue의 값을 비워주고 그걸로 input의 입력값을 바꿔치기 하고 싶은데?
        setTodoValue("");
    };

    return (
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Write your to do..."}
                    onChange={(event) => { setTodoValue(event.target.value) }}
                    /*
                     input의 value라는 속성이 사용자가 입력하는 값이 존재하게 되는 속성임
                     평상시엔 이 아랫줄이 동작을 안 하다가, handleSubmit의 setTodoValue를 통해
                     todoValue의 값이 ""으로 변하는 순간 리액트는 아랫줄에 ""을 집어넣음
                    */
                    value={todoValue}
                />
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