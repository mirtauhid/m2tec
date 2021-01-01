import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../Images/m2tec (1).png';
import NavBar from '../../NavBar/NavBar';
import './Header.css';

const Header = ({ handleSearchTerm, processFilter }) => {


    const handleSearch = (event) => {
        handleSearchTerm(event.target.value);
    }

    return (
        <header>
            <div className="header-container" >
                <div className="header-wrapper">
                    <div className="container-fluid header-nav" id="nav" >
                        <div className="container-md">
                            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                                <Navbar.Brand href="/">
                                    <img id="logo" style={{ height: '7vw', maxWidth: '300px' }} src={logo} alt="" />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <NavDropdown title="UNSERE PRODUKTE" id="basic-nav-dropdown">
                                            <NavDropdown title="BELEUCHTUNG" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/3-unsere-produkte/BELEUCHTUNG/LED Panel">LED Panel</NavDropdown.Item>
                                            </NavDropdown>

                                            <NavDropdown title="HANDY ZUBEHÖHR" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Kopfhörer">Kopfhörer</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Kabel">Kabel</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Ladegerät">Ladegerät</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Halterung3">Halterung3</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Musik Box">Musik Box</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/SD Karte">SD Karte/USB</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Powerbank">Powerbank</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Netzteil">Netzteil/KFZ Adapter</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/AUX Kabel">AUX Kabel</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Computer">Computer / PC Maus</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Kombi Set">Kombi Set / Display Set</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/Medien Kabel">Medien Kabel / Converter Kabel</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/HANDY ZUBEHÖHR/SD Karte">SD Karte/USB</NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title="KL. HAUSGERÄTE" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/3-unsere-produkte/KL. HAUSGERÄTE/Haarschneidegeräte">Haarschneidegeräte</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/KL. HAUSGERÄTE/Kopflampe">Kopflampe</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/KL. HAUSGERÄTE/Taschenlampe">Taschenlampe</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/KL. HAUSGERÄTE/Kamera">Kamera / Sport Kamera</NavDropdown.Item>
                                            </NavDropdown>

                                            <NavDropdown title="TASCHEN / SCHLÖSSER" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="/3-unsere-produkte/TASCHEN">TASCHEN / SCHLÖSSER</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/TASCHEN/Bauchtasche">Bauchtasche</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/TASCHEN/Börse">Börse</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/TASCHEN/Umhängetasche">Umhängetasche</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/TASCHEN/Rucksack">Rucksack</NavDropdown.Item>
                                                <NavDropdown.Item href="/3-unsere-produkte/TASCHEN/Ketten & Schlösser">Börse</NavDropdown.Item>
                                            </NavDropdown>
                                        </NavDropdown>
                                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>

                    <div className="container-fluid header-main">
                        <div className="container-md">
                            <div className="row">
                                <div className="col-md-2">
                                    <a href="/" ><img style={{ height: '6vw' }} src={logo} alt="" /></a>
                                </div>
                                <div className="col-md-6 text-center">
                                    <NavBar processFilter={processFilter} ></NavBar>
                                </div>
                                <div className="col-md-4">
                                    <div className="main">
                                        <div className="form-group has-search">
                                            <span className="fa fa-search form-control-feedback" />
                                            <input onChange={(event) => handleSearch(event)} type="text" className="form-control" placeholder="Katalog durchsuchen" />
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div style={{ padding: '0 10px 0 10px' }}
                id="mobileNav" className=" main mobileNav">
                <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback" />
                    <input onChange={(event) => handleSearch(event)} type="text" className="form-control" placeholder="Katalog durchsuchen" />
                </div>
            </div>
        </header >
    );
};

export default Header;