const ItemList = ({greetings}) =>{
    return (
        <aside id="aside">
            <h1>{greetings}</h1>
            <ul>
                <li>Cuerda</li>
                <li>Viento</li>
                <li>Percusión</li>
            </ul>
        </aside>
    );
}

export default ItemList;