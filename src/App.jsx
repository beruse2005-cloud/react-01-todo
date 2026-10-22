import {useState} from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // todoValue에 값이 준비된 상황이고, todoList에 저 값을 덧붙여야 되는데, "언제" 덧붙여줘야 되나?
  // 1. button을 클릭했을 때
  // 2. input에서 사용자가 엔터를 쳤을 때

  // form이라고 하는 태그로 input과 button이 묶여있음
  // input으로 입력 받는 것은 기본적으로 입력된 값을 (백엔드 등에) 전달하기 위해 있음
  // 기본적으로 input들 중에서 엔터가 쳐지면 묶여져있는 form에 "제출 (submit)"이라는게 발동됨
  // type="submit"으로 되어져 있는 button도 역시 클릭되면 묶여져 있는 form에 "제출"이 발동됨

  // form에는 onSubmit 속성이 있고, onSubmit={함수}    onSubmit={(event) => {}}

  // onSubmit이라는 속성에 함수를 바로 적어도 되지만, 거기에 내용이 길어지면 보기 불편하니
  const handleSubmit = (event) => {
    // 사용자가 "등록해달라"고 요청을 했었을 때 해야하는 코드
    // 내가 쓰지도 않은 "화면이 깜빡인다"와 "인풋의 값이 사라진다"는 현상이 일어났음
    // 이 두가지 현상은 사실 "새로고침"된 것임

    // form 태그는 onSubmit이 발동될 때 브라우저에서 정해진 행동이 있음
    // 입력된 input의 정보를 어딘가로 "전송"하고, 전송 후에 지정된 어느 곳으로 이동하는 것
    // 이게 브라우저에 기본 동작 방식으로 박혀있음

    // 우리는 이 기본 기능이 필요가 없음! 그래서 기본 기능을 동작하지 않게끔 해야됨.
    event.preventDefault();     // 브라우저가 발동하는 기본 동작을 하지말라고 하는 메서드

    // todoValue가 있고, 그걸 저장해야되는 todoList가 있음
    // "밥먹기"라는 todoValue의 값을 []인 todoList에 추가하기 위해 todoList.push(todoValue) 를 생각했다면
    // 여기에서 사용하면 안됨. => todoList는 state이기 때문임

    // state는 값이 변하는걸 React엔진이 감시해서 값이 바뀌면 화면을 리랜더링
    // 근데 그 감시 대상이 Stack 메모리 영역임.
    // 그렇기 때문에 array에 요소를 추가해야 하는 상황에 화면을 다시 그려지게 할려면
    // 새로운 array로 todoList를 바꿔치기 해야됨

    // state의 값을 바꿔줘야될 때에는 result = 40; 이러한 방식을 통해서 바꾸면 안됨
    // 무조건 useState에서 제공한 set함수를 써야됨   (<- React 감시 때문에)
    setTodoList([...todoList, todoValue]);
  };

  return (
      <>
        <h1>My ToDo ({todoList.length})</h1>
        <form onSubmit={handleSubmit}>
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
