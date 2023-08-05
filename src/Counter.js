import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1); 
    };

    const [count2, setCount2] = useState(0);

    const onIncrease2 = () => {
        setCount2(count2 + 1);
    };

    const onDecrease2 = () => {
        setCount2(count2 - 1); 
    };

    // 0에서 출발, 1씩 증가, 1씩 감소하는 count 상태
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <b>{count % 2 === 0 ? "짝수입니다." : "홀수입니다."}</b>
        </div>
    )
}

export default Counter;