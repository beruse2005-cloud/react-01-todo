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
}

export default App;