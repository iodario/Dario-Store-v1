import React from 'react';

const DropdownNav = () => {
    return (
        <>
            <li className="nav-item dropdown drop">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="google.com" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="google.com">Action</a>
                    <a className="dropdown-item" href="google.com">Another action</a>
                    <a className="dropdown-item" href="google.com">Something else here</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="google.com">Separated link</a>
                </div>
            </li>
        </>
    )
}

export default DropdownNav;