import Detail from "../components/Detail";
import {TextField} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function HomePage() {

    const students = [{
        id: 1,
        name: "Yasindu",
        age: 24,
        address: "Panadura",
        tp: "0342222222"
    },
        {
            id: 2,
            name: "Kasun",
            age: 25,
            address: "Galle",
            tp: "0342222222"
        },
        {
            id: 3,
            name: "Ishan",
            age: 27,
            address: "Kadawatha",
            tp: "0342222222"
        }]

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Student Details</h1>

                        {
                            students.map(student => {
                                return (
                                    <div key={student.id}>
                                        <Detail student={student}/>
                                        <br/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col">
                        <input style={{position: "relative", left: 20, margin: 10}} type="color"
                               className="form-control form-control-color" value="#563d7c" title="Choose your color"/>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>

                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage;
