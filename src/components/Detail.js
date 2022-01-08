function Detail(props) {
    return (
        <div>
            <h3>Student Name : {props.student.name}</h3>
            <h3>Student Age : {props.student.age}</h3>
            <h3>Student Address : {props.student.address}</h3>
            <h3>Student T.P : {props.student.tp}</h3>
        </div>
    )
}

export default Detail