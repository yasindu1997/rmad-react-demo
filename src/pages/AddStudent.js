function AddStudent() {
    return (
        <div className="container">
            <div className="row">
                <h1 style={{ color: 'orangered', marginTop: 5 }}>Enter details to save student</h1>

                <div className="col-6">
                    <input className="form-control mt-5" type="text" placeholder="Enter Your Name"></input>
                    <input className="form-control mt-3" type="text" placeholder="Enter Your Address"></input>
                    <input className="form-control mt-3" type="text" placeholder="Enter Your Email"></input>
                    <input className="form-control mt-3" type="tel" placeholder="Phone Number"></input>

                    <button type="button" className="btn btn-success mt-4">Save Student</button>
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