import { useMyContext } from "./MyContext";

function MyChild() {

    const { data, setData } = useMyContext();
    return (
        <>
            <h1>My Child</h1>
            <p>Data from Child in Child Component: {data}</p>
            <input type="text" value={data} onChange={(e) => { setData(e.target.value) }} />
        </>
    );
}
export default MyChild;