import {useState} from "react";

function Button() {
    const [count, changeCountTo] = useState(0);

    function handleClick() {
        changeCountTo(count + 1);
    }

    return <button onClick={handleClick}>Clicked {count} times.</button>
}

export default function UsingState() {
    return <Button/>
}