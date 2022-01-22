import { db } from '../firebase-config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react';

function AddStudent() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, [])

    const addStudent = async () => {
        const docRef = await addDoc(collection(db, "rmad_students"), {
            name: name,
            address: address,
            email: email,
            phone_number: phone
        }).then(res => {
            alert("Student Added !")
        }).catch(err => {
            alert("Failed Attempt !")
        });
    }

    const getStudents = async () => {
        const querySnapshot = await getDocs(collection(db, "rmad_students"));
        setStudents(querySnapshot.docs.map((doc) => ({ ...doc.data() })))
    }

    return (
        <div className="container">
            <div className="row">
                <h1 style={{ color: 'orangered', marginTop: 5 }}>Enter details to save student</h1>

                <div className="col-6">
                    <input className="form-control mt-5" value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" placeholder="Enter Your Name"></input>
                    <input className="form-control mt-3" value={address} onChange={(e) => {
                        setAddress(e.target.value)
                    }} type="text" placeholder="Enter Your Address"></input>
                    <input className="form-control mt-3" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} type="text" placeholder="Enter Your Email"></input>
                    <input className="form-control mt-3" value={phone} onChange={(e) => {
                        setPhone(e.target.value)
                    }} type="tel" placeholder="Phone Number"></input>

                    <button type="button" className="btn btn-success mt-4" onClick={() => { console.log(students); }}>Save Student</button>
                </div>

                <div className="col-6">
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Yasindu Sathsara</td>
                                <td>Panadura</td>
                                <td>yasindusathsara@gmail.com</td>
                                <td>0775067538</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default AddStudent;