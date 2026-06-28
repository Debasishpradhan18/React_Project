import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (


        <>

            <h1>Counter App</h1>

            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>

            {

                
                count >= 10
                    ? <h2>🎉 Great Job!</h2>
                    : <h2>Keep Going...</h2>

            }
        </>
    );
}

export default App;