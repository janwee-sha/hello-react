import {Component, PureComponent, useState} from "react";

// 当父组件重新渲染时，React 通常会重新渲染子组件。
class ButtonComponent extends Component {
    state = {count: 0};

    render() {
        return (
            <button onClick={() => this.setState({count: this.state.count + 1})}>
                {this.state.count}
            </button>
        )
    }
}

// PureComponent 能够在属性和状态相同时跳过重新渲染。
// PureComponent 是 Component 的子类，并且支持 所有 Component 的 API。
// 继承 PureComponent 的子类相当与定义了一个自定义的 shouldComponentUpdate 方法，该方法将浅比较 props 和 state。
class ButtonPureComponent extends PureComponent {
    state = {count: 0};

    render() {
        return (
            <button onClick={() => this.setState({count: this.state.count + 1})}>
                {this.state.count}
            </button>
        )
    }
}

// 函数式组件
function ButtonFunction() {
    const [count, setState] = useState(0);

    return (
        <button onClick={() => setState(count + 1)}>
            {count}
        </button>
    );
}

export default function App() {
    return <>
        <ButtonComponent/>
        <ButtonPureComponent/>
        <ButtonFunction/>
    </>;
}