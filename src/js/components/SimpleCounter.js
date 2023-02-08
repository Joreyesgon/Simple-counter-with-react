import React, { useState } from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container">
            <div className="card border border-secondary text-center my-5">
                <div className="card-body">
                    <h1 className="header my-2"><u>Simple Counter</u></h1>
                    
                        <h2 className=" text-primary my-4">{count}</h2>
                        <button className="btn btn-success mx-3 my-3" onClick={() => setCount(count + 1)}>+</button>
                        <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
                        <button className="btn btn-warning mx-3 text-dark" onClick={() => setCount(0)} disabled={count === 0}>Resert</button>
                    
                </div>
            </div>
        </div>
    );
}

export default SimpleCounter;