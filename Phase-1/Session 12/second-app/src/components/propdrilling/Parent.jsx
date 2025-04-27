import Child from "./Child";

function Parent({ data, setData }) {
    return (
        <div>
            <h1>Parent</h1>
            <p>Data from Child in Parent component: {data}</p>
            <Child data={data} setData={setData} />
        </div>
    );
}
export default Parent;