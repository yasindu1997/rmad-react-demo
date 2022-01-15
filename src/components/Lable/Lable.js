import './LableStyle.css'

function Lable(props) {
    return (
        <h3 className='lable'>Student {props.name} : {props.value}</h3>
    )
}

export default Lable;