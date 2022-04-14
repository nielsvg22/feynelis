import React from 'react';
import $ from 'jquery';
import './Sidenav.css';

const Sidenav = () => {

    

    return (
        <div className="wrapper">
    {/* <!-- Sidebar --> */}
    <nav id="sidebar">

        <ul className="">
            <li>
                <a href="/"><i className="material-icons"></i>Dashboard</a>
            </li>
            <li>
                <a href="/headkuip"><i className="material-icons"></i>Models</a>
            </li>
            <li>
                <a href="/inventory"><i className="material-icons md-18">inventory_2</i>Inventory</a>
            </li>
            <li>
                <a href="/build"><i className="material-icons">precision_manufacturing</i>Build</a>
            </li>
            <li>
                <a href="/aircrafts"><i className="material-icons">flight</i>Aircrafts</a>
            </li>
            <li>
                <a href="/settings"><i className="material-icons">settings</i>Settings</a>
            </li>
            {/* Dropdown menu */}
            {/* <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Test</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Test 1</a>
                    </li>
                    <li>
                        <a href="#">Test 2</a>
                    </li>
                    <li>
                        <a href="#">Test 3</a>
                    </li>
                </ul>
            </li> */}
        </ul>
    </nav>

{/* Navbar button to hide navbar  */}
    {/* <div id="content">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <button type="button" id="sidebarCollapse" className="btn btn-info">
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>

        </div>
    </nav>
</div> */}

</div>

    )
}

export default Sidenav