const Home = (props) => {
    const { onGridChange, onPlayerChange, onClick } = props;
    return (
        <div>
            <h1>Grid Size</h1>
            <input type="text" onChange={onGridChange} />
            <h1>Players</h1>
            <input type="text" onChange={onPlayerChange} />
            <button type="submit" onClick={onClick} >Start</button>
        </div>
    )
}

export default Home