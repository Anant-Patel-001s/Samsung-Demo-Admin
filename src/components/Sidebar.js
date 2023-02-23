import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { useLocation } from 'react-router-dom';
import Card from './dashboard/Card';


const Sidebar = () => {
    
    let location = useLocation();

    
    return (
        <div>
            <header>
                <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                    <div className="position-sticky">
                        <div className="list-group list-group-flush mx-3 mt-4">
                            <Link to="/"
                            //  className={ location.pathname === "/portfolio" ? "list-group-item list-group-item-action py-2 ripple active" : ""}
                             className="list-group-item list-group-item-action py-2 ripple active" 
                             aria-current="true">
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                            </Link>

                            <Link to="/shops" className="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-shopping-bag fa-fw me-3"></i>
                                <span>Shops</span>
                            </Link>

                            <Link to="/orders" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-bar fa-fw me-3"></i>
                                <span>Orders</span>
                            </Link>

                            <Link to="/products" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-lock fa-fw me-3"></i>
                                <span>Products</span>
                            </Link>

                            <Link to="/customers" className="list-group-item list-group-item-action py-2 ripple"><i
                                className="fas fa-users fa-fw me-3"></i>
                                <span>Customer</span>
                            </Link>
                        </div>
                    </div>
                </nav>

                <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>

                        <Link className="navbar-brand" to="#">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Samsung_logo_blue.png" height="45" alt="MDB Logo"
                                loading="lazy" />
                        </Link>

                        <ul className="navbar-nav ms-auto d-flex flex-row">
                            <li>
                                <button className='btn btn-primary'>Log Out</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main style={{ marginTop: "58px" }}>
                <div className="pt-4">
                        
                </div>
            </main>
        </div>
    )
}

export default Sidebar