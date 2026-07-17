import avatar from "./avatar.svg";
import "./adding-styles.css";

export default function AddingStyles() {
    return (
        // 在 React 中，你可以使用 className 来指定一个 CSS 的 class。它与 HTML 的 class 属性的工作方式相同。
        <main className="profile-card">
            <h1>添加样式</h1>
            <img
                className="avatar"
                src={avatar}
                alt="一只戴着围巾的小猫头像"
            />
            <p>
                这个头像通过 <code>className="avatar"</code> 使用独立 CSS
                文件中的样式。
            </p>
        </main>
    );
}
