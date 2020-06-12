/*
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel">

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

</script>

*/
