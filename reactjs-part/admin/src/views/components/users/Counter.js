import React, { useState, useEffect } from "react";
import { useFormInput } from "../../../utils/hooks";

export default function AddUser() {
    const [counter, setCounter] = useState(0);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useFormInput("");
    const [lastName, setLastName] = useFormInput("");

    const increase = function () {
        setCounter(counter + 1);
    };

    const updateTitle = () => {
        document.title = firstName + " " + lastName;
    };

    useEffect(() => {
        // console.log(
        //     "componentDidmount and componentDidUpdate (firstname, lastname only)"
        // );
        updateTitle();
        console.log(
            "Before return firstName: ",
            firstName,
            "lastName: ",
            lastName
        );
        return () => {
            console.log("before update");
            console.log("firstName: ", firstName, "lastName: ", lastName);
        };
    }, [firstName, lastName]);

    // useEffect(() => {
    //     // connect to user
    //     connectToFriend(friend_id)
    //     return () => {
    //         disConnectToFriend(friend_id)
    //     };
    // }, [friend_id]);

    useEffect(() => {
        return () => {
            console.log("ComponentWillUnmount");
        };
    }, []);

    useEffect(() => {
        // console.log("componentDidMount and componentDidUpdate");
    });

    useEffect(() => {
        // console.log("ComponentDidMount");
    }, []);

    return (
        <div>
            <p> Counter: {counter}</p>
            {/* <button onClick={() => setCounter(counter + 1)}>Increase</button> */}
            <button onClick={increase}>Increase</button>
            <div>
                <label htmlFor="firstname">First Name:</label>
                <input type="text" id="firstname" onChange={setFirstName} />
            </div>
            <div>
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" id="lastname" onChange={setLastName} />
            </div>
        </div>
    );
}
