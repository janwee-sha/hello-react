const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

function Profile() {
    // JSX 会让你把标签放到 JavaScript 中。而大括号会让你 “回到” JavaScript 中，这样你就可以从你的代码中嵌入一些变量并展示给用户。
    return (
        <>
            <h1>{user.name}</h1>
            <img className="avatar"
                 src={user.imageUrl}
                 alt={'Photo of ' + user.name}
                 style={{
                     width: user.imageSize,
                     height: user.imageSize
                 }}
            />
        </>
    );
}

export default function ShowData() {
    return <Profile />
}