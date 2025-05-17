import MyContextProvider, { useMyContext } from "./MyContext";
import MyParent from "./MyParent";


function MyGrandParent() {
    // const { data } = useMyContext();
    return (
        <MyContextProvider>
            <h1>My Garent Parent</h1>
            {/* <p>Data from child in Grand Parent Component: {data}</p> */}
            <MyParent />
        </MyContextProvider>
    );
}
export default MyGrandParent;