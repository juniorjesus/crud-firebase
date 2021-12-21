import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #db7093;
`

export const Navbar = () => {
    return (
        <div>
            <Nav className="navbar navbar-light #db7093">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img
                        src="https://res.cloudinary.com/duzf4vfki/image/upload/v1630692325/Clases/geek_wctguy.png"
                        width="80" /></a>

                    <Link className="navbar-toggler-icon" to=""></Link>
                </div>
            </Nav>

        </div>
    )
}
