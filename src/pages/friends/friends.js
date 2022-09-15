import React, { useState, useEffect } from 'react'
import './friends.css';
import { BsPersonCircle } from "react-icons/bs";

const Friends = () => {
    const [name, setName] = useState('')
    const [friends, setFriends] = useState([])
    const [submit, setSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const friend = { name }
        console.log(friend)
        fetch("https://javaprojectbackend1.herokuapp.com/friends/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(friend)

        }).then(() => {
            console.log("New friend added")
            setName('');
            setSubmit(true);
        })
    }
    useEffect(() => {
        fetch("https://javaprojectbackend1.herokuapp.com/friends/getAll")
            .then(res => res.json())
            .then((result) => {
                setFriends(result);
            }
            )
    }, [])

    return (
        <>
            <div className='anchor'></div>
            <div id="friends-container">
                <section id="add-friend">
                    <form autoComplete="off" >
                        <h1>Add friend</h1>
                        <label>Name</label>
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} required />
                        <input type="submit" onClick={handleSubmit} value="ADD" />

                        {submit ? (
                            <div className="submit-message">New friend added</div>
                        ) : (
                            <div className='submit-message'></div>
                        )}
                    </form>
                </section>
                <section id="friends-list">
                    <h1>Friends</h1>
                    {friends.map(friend => (
                        <>
                            <ul>
                                <li>
                                    <BsPersonCircle id="friend-icon" />
                                    {friend.name}
                                </li>
                            </ul>
                        </>
                    ))}
                </section>
            </div>
        </>
    )
}

export default Friends;