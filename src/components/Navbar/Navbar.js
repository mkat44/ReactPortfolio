import React from "react";
import { Navbar, NavbarBrand, NavbarItem, Icon, NavbarMenu, NavbarLink, NavbarDropdown, NavbarEnd } from 'bloomer';
import "./Navbar.css";

class Nav extends React.Component {
    state = {

    }

    render() {
        return(
            <Navbar className="navbar">
                <NavbarBrand>
                    <NavbarItem>
                        <Icon className="fas fa-chevron-left" /> <Icon className="fas fa-feather-alt" /> <span className="name"><strong>MKCarr</strong></span> <Icon className="fas fa-chevron-right" />
                    </NavbarItem>
                    <NavbarItem isHidden="desktop" href="mailto:m.kat44@gmail.com?Subject=[Portfolio]%20Hello%20From%20Your%20Portfolio">
                        <Icon className="far fa-envelope" />
                    </NavbarItem>
                    <NavbarItem isHidden="desktop" href="https://github.com/mkat44">
                        <Icon className='fab fa-github' />
                    </NavbarItem>
                    <NavbarItem isHidden="desktop" href="https://www.linkedin.com/in/mary-carr-a19225170/">
                        <Icon className='fab fa-linkedin' />
                    </NavbarItem>
                    <NavbarItem hasDropdown isHoverable isHidden="desktop">
                        <NavbarLink href='/'><i className="fas fa-home"></i></NavbarLink>
                        <NavbarItem href='/resume'>Resume</NavbarItem>
                        <NavbarItem href='/projects'>Projects</NavbarItem>
                        <NavbarItem href="/contact">Contact</NavbarItem>
                    </NavbarItem>
                </NavbarBrand>
                <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                    <NavbarEnd>
                        <NavbarItem hasDropdown isHoverable>
                            <NavbarLink href='/'><i className="fas fa-home"></i></NavbarLink>
                            <NavbarDropdown>
                                <NavbarItem href='/'>About</NavbarItem>
                                <NavbarItem href='/resume'>Resume</NavbarItem>
                                <NavbarItem href='/projects'>Projects</NavbarItem>
                                <NavbarItem href="/contact">Contact</NavbarItem>
                            </NavbarDropdown>
                        </NavbarItem>
                        <NavbarItem href="mailto:m.kat44@gmail.com?Subject=[Portfolio]%20Hello%20From%20Your%20Portfolio">
                            <Icon className="far fa-envelope" />
                        </NavbarItem>
                        <NavbarItem href="https://github.com/mkat44">
                            <Icon className='fab fa-github' />
                        </NavbarItem>
                        <NavbarItem href="https://www.linkedin.com/in/mary-carr-a19225170/">
                            <Icon className='fab fa-linkedin' />
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Navbar>
        )
    }
}

export default Nav;