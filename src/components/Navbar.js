import React from 'react'

export default function Navbar() {
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

    const sections = ['home', 'about', 'projects', 'contact']

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
                <div className='container'>
                    <a className='navbar-brand fw-bold' href="#home">
                        Jenit Lal Shakya
                    </a>

                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className="collapse navbar-collapse" id='nav'>
                        <ul className="navbar-nav ms-auto">
                            {sections.map((section, i) => (
                                <li className="nav-item" key={i}>
                                    <a className='nav-link' href={`#${section}`}>
                                        {capitalize(section)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
