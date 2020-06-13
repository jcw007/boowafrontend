function Hello(props) {
    const [name, setName] = React.useState(props.name);
    return (
        <h1 onClick = {() => setName(Math.random().toString(36).substring(5))}>
            Hello {name}
        </h1>
    );
}

ReactDOM.render(
    <Hello name='World'/>,
    document.getElementById('root'),
);

//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
