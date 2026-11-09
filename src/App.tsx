import { type ChangeEvent, useState } from "react";
import styles from "./App.module.css";
import * as React from "react";

type Todo = {
    text: string;
    completed: boolean;
};

function App() {
    // state, 리액트에서 사용하는 화면과 관련짓는 데이터를 저장할 수 있는 특수 변수에도
    // type을 강제해야됨
    // 근데 이 state를 선언하는건 리액트에서 제공한 useState 함수를 사용함

    // 변수를 선언할 때 쓰는 법 const 변수명: 타입 = "";
    // 함수를 선언할 떄 쓰는 법 function 함수명(매개변수: 타입): 리턴타입 { 함수몸통 }

    // 함수를 사용할 때 결과에 필요한 타입을 제공해주는 방법은 함수<타입>(인수);
    // 지금 상황에서 타입을 지정하는건, useState를 실행해서 나온 결과인 todoList에 타입을 제공
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [todoValue, setTodoValue] = useState<string>("");

    const handleOnChange = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        setTodoValue(event.target.value);
    };

    // SubmitEvent는 javascript엔진에 내장된, 이름이 같은 타입이 존재하기 때문 => 우리가 원하는건 내장 타입이 아님
    // 우리가 원하는건, React 패키지에 있는 SubmitEvent 타입이 필요하고, 얘는 직접 import를 해줘야 함   -- 1번 방식
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newText = todoValue.trim();
        if (newText === "") {
            return;
        }

        // 원래 자바스크립트는,
        // 코드를 작성할 때 todoList가 어떤 타입인지 모르기 때문에 (값을 넣어야만 결정나니까)
        // 코드를 아무렇게나 내가 작성해도 다 받아주고, 실행할 때 에러를 냄
        // 타입스크립트는 변수 안에 Todo[] 만 저장된다라고 위에서 강제한 상태이기 때문에
        // 실제값을 넣지 않아도 저 모양의 값만 받아준다는걸 실행하지 않고도 코드 레벨에서 확인 가능함
        setTodoList([...todoList, { text: newText, completed: false }]);
        setTodoValue("");
    };

    const handleDeleteTodo = (target: number) => {
        // filter 메서드의 매개변수인 (item, index) => {} 에, 첫번째 자리인 item은 안쓰고 index는 쓸것임
        // 두번째 자리가 있으려면 첫번째 자리는 생략이 불가능함
        // 그런데, 웹스톰이 사용하지 않는 변수나 매개변수는 필요 없다고 빨간색 에러를 냄
        // 이런 경우, '사용은 하지 않지만, 꼭 필요하다'는 뜻으로 _ 처리 함 => 에러를 내지 않도록 약속
        const result = todoList.filter((_, index) => {
            return target !== index;
        });
        setTodoList(result);
    };

    const handleToggleTodo = (index: number) => {
        const newTodoList = todoList.map((item, i) => {
            if (i !== index) {
                return item;
            }
            return { ...item, completed: !item.completed };
        });
        setTodoList(newTodoList);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My ToDo ({todoList.length})</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type={"text"}
                    placeholder={"Write your to do..."}
                    onChange={handleOnChange}
                    value={todoValue}
                />
                <button type="submit" className={styles.submitButton}>
                    Add To Do
                </button>
            </form>
            <hr className={styles.divider} />
            <ul className={styles.list}>
                {todoList.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        <span
                            className={`${styles.text} ${item.completed ? styles.completed : ""}`}>
                            {item.text}
                        </span>
                        <button
                            className={styles.actionButton}
                            onClick={() => {
                                // 지금 현재의 completed 값을 반대로 저장
                                handleToggleTodo(index);
                            }}>
                            {item.completed ? "❤️" : "🤍"}
                        </button>
                        <button
                            className={styles.actionButton}
                            onClick={() => {
                                return handleDeleteTodo(index);
                            }}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
