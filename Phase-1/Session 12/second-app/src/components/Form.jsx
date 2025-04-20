import React, { useState } from 'react';
import UserInfo from './UserInfo';

function Form() {
    const [person, setPerson] = useState({ name: '', email: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${person.name}, Email: ${person.email}`);
    }
    return (
        <>
            <form className="card mt-3 text-start" onSubmit={handleSubmit}>
                <div >
                    <label className="form-label">Name</label>
                    <input onChange={(e) => setPerson((prev) => ({ ...prev, name: e.target.value }))} type="text" className="form-control" aria-describedby="nameHelp" />
                </div>
                <div className="mt-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" onChange={(e) => setPerson((prev) => ({ ...prev, email: e.target.value }))} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            <UserInfo person={person} />
        </>
    );
}
export default Form;