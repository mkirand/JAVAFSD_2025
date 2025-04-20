function UserInfo(props) {
    const { person } = props;
    return (
        <div className="card mt-5">
            <h2>User Information</h2>
            <p>Name: {person.name}</p>
            <p>Email: {person.email}</p>
        </div>
    );
}
export default UserInfo;