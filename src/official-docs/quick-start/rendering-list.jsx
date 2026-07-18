const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

function ListItems() {
    const items = products.map(product=>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        <ul>{items}</ul>
    );
}

export default function RenderingList() {
    return (
      <ListItems />
    );
}