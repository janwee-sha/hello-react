import {useState} from "react";

function StatefulButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            点了 {count} 次
        </button>
    );
}

export default function SharingData() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>共同更新的计数器</h1>
            <StatefulButton count={count} onClick={handleClick}/>
            <StatefulButton count={count} onClick={handleClick}/>
        </div>
    );
}