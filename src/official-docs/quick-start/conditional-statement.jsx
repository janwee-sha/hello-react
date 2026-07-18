import React from "react";
import AddingStyles from "./adding-styles";
import MyButton from "./my-button";

function isEvenMinute() {
    return new Date().getMinutes() % 2 === 0;
}

// React 没有特殊的语法来编写条件语句，因此你使用的就是普通的 JavaScript 代码。例如使用 if 语句根据条件引入 JSX：
function Condition1() {
    let content;
    if (isEvenMinute()) {
        content = <AddingStyles/>
    } else {
        content = <MyButton/>
    }
    return (
        <div>
            {content}
        </div>
    )
}

// 如果你喜欢更为紧凑的代码，可以使用 条件 ? 运算符。与 if 不同的是，它工作于 JSX 内部：
function Condition2() {
    return <div>
        {isEvenMinute() ?
            (<AddingStyles/>) :
            (<MyButton/>)
        }
    </div>
}

// 当你不需要 else 分支时，你也可以使用更简短的 逻辑 && 语法：
function Condition3() {
    return <div>
        {isEvenMinute() && <AddingStyles/>}
    </div>
}

export default function ConditionalStatement() {
    return (
        <div>
            <Condition3/>
        </div>
    )
}
