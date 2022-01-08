import Navigation from "../components/Navigation";

function HomePage() {

    const student = {
        name: "Yasindu",
        age: 24,
        address: "Panadura",
        tp: "0342222222"
    }

    return (
        <div>
            <Navigation screen="Home Page" />
            <p>This is Home Page</p>

            <hr />

            <h1>Student Details</h1>

            <h3>Student Name : {student.name}</h3>
            <h3>Student Age : {student.age}</h3>
            <h3>Student Address : {student.address}</h3>
            <h3>Student T.P : {student.tp}</h3>

        </div>
    )
}

export default HomePage;