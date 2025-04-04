import { useState } from "react";

export default function Form() {
    let [fullName, setFullName] = useState("Yogii");

    // For changing single input here the problem is if there are mutiple values change in form then we have to write multiple useStates ans onchange property for them

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    //     console.log(event.target.value);
    // };

    // handling multiple inputs

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name; // name of the property which is changing
        let newValue = event.target.value; // newValue

        // setFormData

        setFormData((currData) => {
            return { ...currData, [fieldName]: newValue };
        });

        console.log(`${event.target.name} : ${event.target.value}`);
        console.log();
    };

    return (
        <form>
            <input
                placeholder="enter here"
                // value={fullName}
                value={formData.fullName}
                // onChange={handleNameChange}
                onChange={handleInputChange}
                name="fullName"
            />
            <input
                placeholder="username"
                onChange={handleInputChange}
                value={formData.userName}
                name="userName"
            />
            <button>Submit</button>
        </form>
    );
}
