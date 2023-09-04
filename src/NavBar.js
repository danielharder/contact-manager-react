import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    // return (
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="#">ContactManagerReact</a>
    //     <div className="collapse navbar-collapse">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/add">Add Contact</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // );


    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <span className='navbar-brand'>Simple Contacts Manager</span>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <span className='nav-item nav-link'>
                        <Link to='/'>Contacts</Link>
                    </span>
                    <span className='nav-item nav-link'>
                        <Link to='/add'>Add Contact</Link>
                    </span>
                </div>
            </div>
        </nav>
    );

}

export default NavBar;
