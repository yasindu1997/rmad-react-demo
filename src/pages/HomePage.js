import Navigation from "../components/Navigation";
import Detail from "../components/Detail";

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

            <Detail student={student} />

        </div>
    )
}

export default HomePage;