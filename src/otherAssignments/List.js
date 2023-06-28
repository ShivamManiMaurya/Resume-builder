const List = ({ items, layout }) => {
    return (
        <div>
            <h4>Layout = {layout}</h4>
            {layout === "bullet" ? (
                <ul>
                    {items.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            ) : (
                <ol type={layout === "alpha" ? "a" : ""}>
                    {items.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ol>
            )}
        </div>
    );
};

export default List;
