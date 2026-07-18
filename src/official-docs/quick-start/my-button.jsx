// React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。
function ClickMe() {
    return (
        <button>Click me!</button>
    );
}
// export default 关键字指定了文件中的主要组件。
export default function MyButton() {
    return (
        <div>
            <h1>Welcome to my app!</h1>
            <ClickMe />
        </div>
    );
}
// 上面所使用的标签语法被称为 JSX。它是可选的，但大多数 React 项目会使用 JSX，主要是它很方便。
// JSX 比 HTML 更加严格。你必须闭合标签，如 <br />。你的组件也不能返回多个 JSX 标签。你必须将它们包裹到一个共享的父级中.