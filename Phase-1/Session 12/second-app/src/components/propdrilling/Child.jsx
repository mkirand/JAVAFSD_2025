function Child({ data, setData }) {
    return (
        <div>
            <h1>Child</h1>
            <p>Data from Child in Child component: {data}</p>
            <input type="text" value={data} onChange={setData} />
        </div>
    );
}
export default Child;