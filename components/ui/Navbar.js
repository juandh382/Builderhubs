import React from 'react'
import Image from 'next/image'
import '../../styles/navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary-blue">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image
                        src="/logo.png"
                        width={107}
                        height={20}
                        alt="Picture of the author"
                    />

                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='shape-golden'></div>
                    <ul className="navbar-nav navbar-nav-bg-golden me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Products</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item nav-item-bg-golden">
                            <a className="nav-link" aria-current="page" href="#">Start free trial</a>
                        </li>
                        <div className='shape-golden'></div>
                        <li className="nav-item nav-item-bg-golden">
                            <a className="nav-link" href="#">View demo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
