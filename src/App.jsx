import { useState } from "react";
import styles from "./App.module.css";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        const newText = todoValue.trim();
        if (newText === "") {
            return;
        }
        setTodoList([...todoList, { text: newText, completed: false }]);
        setTodoValue("");
    };

    const handleDeleteTodo = target => {
        const result = todoList.filter((item, index) => {
            return target !== index;
        });
        setTodoList(result);
    };

    const handleToggleTodo = index => {
        // todoList 목록의 [index] 번호 요소의 completed 값을,
        // 그 당사자의 반대값으로 = 할당 해달라
        // todoList[index].completed = !todoList[index].completed;
        // 하지만 state 값이기 때문에 직접 할당하면 안됨. set함수를 써서 해야 함
        // 이 이야기는, 새로운 배열을 만들어서 setTodoList에 저장

        const newTodoList = todoList.map((item, i) => {
            // handleToggleTodo에서 값을 변경하고 싶어하는 index가 아닌 것들
            // 만약, handleToggleTodo 함수에서 2번 요소를 바꾸고 싶어하는거라면
            // 1번 요소와 3번 요소는 그냥 지나가면 됨
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
                    onChange={event => {
                        setTodoValue(event.target.value);
                    }}
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
