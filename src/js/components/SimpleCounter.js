import React, { useState } from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container my-5">
            <div className="card border border-primary text-center my-5">
                <div className="card-body">
                    <h1 className="text-muted">Simple Counter</h1>
                    <div className="my-5">
                        <h2 className="my-5 text-primary">{count}</h2>
                        <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>+</button>
                        <button className="btn btn-danger mx-3"onClick={() => setCount(count - 1)} disabled={count ===0}>-</button>
                        <button className="btn btn-warning mx-3 text-light"onClick={() => setCount(0)} disabled={count ===0}>Resert</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimpleCounter;