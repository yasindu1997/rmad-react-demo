import Navigation from "../components/Navigation"
import { useState } from "react";
import { Select, MenuItem } from "@mui/material";

function About() {

    //how to create a state
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState(0);

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
            
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
            // onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </div>
    )
}

export default About;