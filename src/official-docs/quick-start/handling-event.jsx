function Button() {
    function handleClick() {
        alert("How dare you click me!")
    }

    return <button onClick={handleClick}>Button</button>
}

export default function HandlingEvent() {
    return <Button/>
}