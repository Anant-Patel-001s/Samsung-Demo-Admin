import React from 'react'

const Card = () => {
    return (
        <>
            <div className='dashboard d-flex'>
                <div className='row'>
                    <div className='col'>
                        <div className='card user-card'>
                            <div className='row'>
                                <div className='col number'>
                                    <h3>5</h3>
                                </div>
                                <div className='col icon'>
                                    <i class="fa-solid fa-user"></i>
                                </div>
                            </div>
                            <p className='card-title'>Registrated Members</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card user-card'>
                            <div className='row'>
                                <div className='col number'>
                                    <h3>5</h3>
                                </div>
                                <div className='col icon'>
                                    <i class="fa-solid fa-box-open"></i>
                                </div>
                            </div>
                            <p className='card-title'>Orders</p>
                        </div>
                        <div className=''>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card user-card'>
                            <div className='row'>
                                <div className='col number'>
                                    <h3>5</h3>
                                </div>
                                <div className='col icon'>
                                    <i class="fas fa-shopping-basket"></i>
                                </div>
                            </div>
                            <p className='card-title'>Total Products</p>
                        </div>
                        <div className=''>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card user-card'>
                            <div className='row'>
                                <div className='col number'>
                                    <h3>5</h3>
                                </div>
                                <div className='col icon'>
                                    <i class="fa-solid fa-money-bill"></i>
                                </div>
                            </div>
                            <p className='card-title'>Total Income</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard-table'>
                <h3>Order List</h3>
            </div>
            <div className='dashboard-table'>
                <table class="table align-middle mb-0 bg-white">
                    <thead class="bg-light">
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: "45px", height: "45px" }}
                                        class="rounded-circle"
                                    />
                                    <div class="ms-3">
                                        <p class="fw-bold mb-1">John Doe</p>
                                        <p class="text-muted mb-0">john.doe@gmail.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="fw-normal mb-1">Software engineer</p>
                                <p class="text-muted mb-0">IT department</p>
                            </td>
                            <td>
                                <span class="badge badge-success rounded-pill d-inline">Completed</span>
                            </td>
                            <td>
                                <button type="button" class="btn btn-link btn-sm btn-rounded">
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                                        class="rounded-circle"
                                        alt=""
                                        style={{ width: "45px", height: "45px" }}
                                    />
                                    <div class="ms-3">
                                        <p class="fw-bold mb-1">Alex Ray</p>
                                        <p class="text-muted mb-0">alex.ray@gmail.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="fw-normal mb-1">Consultant</p>
                                <p class="text-muted mb-0">Finance</p>
                            </td>
                            <td>
                                <span class="badge badge-primary rounded-pill d-inline"
                                >Pending</span
                                >
                            </td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-link btn-rounded btn-sm fw-bold"
                                    data-mdb-ripple-color="dark"
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                                        class="rounded-circle"
                                        alt=""
                                        style={{ width: "45px", height: "45px" }}
                                    />
                                    <div class="ms-3">
                                        <p class="fw-bold mb-1">Kate Hunington</p>
                                        <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="fw-normal mb-1">Designer</p>
                                <p class="text-muted mb-0">UI/UX</p>
                            </td>
                            <td>
                                <span class="badge badge-warning rounded-pill d-inline">Cancel</span>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    class="btn btn-link btn-rounded btn-sm fw-bold"
                                    data-mdb-ripple-color="dark">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Card