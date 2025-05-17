import MyChild from "./MyChild";
import { useMyContext } from "./MyContext";

function MyParent() {
    const { data } = useMyContext();
    return (
        <div>
            <h1>My Parent</h1>
            <p>Data from child in Parent Component: {data}</p>
            <MyChild />
        </div >
    );
}
export default MyParent;