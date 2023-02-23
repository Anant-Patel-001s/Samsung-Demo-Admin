import React from 'react'

const Customer = () => {
    return (
        <div className='d-flex'>
            <div className='customer-page'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark Otto</td>
                            <td>9638520147</td>
                            <td>a@gmail.com</td>
                            <td>Surat</td>
                            <td> <button type="button" class="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">Edit</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark Otto</td>
                            <td>9638520147</td>
                            <td>a@gmail.com</td>
                            <td>Surat</td>
                            <td><button type="button" class="btn btn-link btn-rounded btn-sm fw-bold" data-mdb-ripple-color="dark">Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Customer