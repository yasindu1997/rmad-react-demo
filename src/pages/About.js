import Navigation from "../components/Navigation"
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

function About() {

    //how to create a state
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState(0);

    const whenClicked = () => {
        console.log(name + " " + address);
    }

    useEffect(() => {
        console.log("useEffect Called");
    }, [name]);

    return (
        <div>
            <Navigation screen="About Page" />
            <br></br>
            Name : <input type={"text"} value={name} onChange={(e) => { setName(e.target.value) }} />
            <br></br>
            <br></br>
            Address : <input type={"text"} value={address} onChange={(e) => { setAddress(e.target.value) }} />
            <br></br>
            <br></br>

            Slect Your Favourite vehicle Brand :
            <select >
                <option value={"Mazda"}>Mazda</option>
                <option value={"BMW"}>BMW</option>
                <option value={"Toyota"}>Toyota</option>
            </select>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={whenClicked}>Save Data</Button>

        </div>
    )
}

export default About;