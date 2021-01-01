import React from 'react';
import { Button } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {

    return (
        <div className=" main-menu  ">
            <nav>
                <ul>
                    <li>

                        <Button variant="outline-dark"><a href="/3-unsere-produkte">
                            UNSERE PRODUKTE</a></Button>
                        <ul className="mega-menu mega-menu-padding">
                            <li>
                                <ul>
                                    <li className="mega-menu-title"><a href="/3-unsere-produkte/BELEUCHTUNG">BELEUCHTUNG</a></li>
                                    <li><a href="/3-unsere-produkte/BELEUCHTUNG/LED Panel">LED Panel</a></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="mega-menu-title"><a href="/3-unsere-produkte/HANDY ZUBEHÖHR">HANDY ZUBEHÖHR</a></li>
                                    <li><a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Kopfhörer">Kopfhörer</a></li>
                                    <li><a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Kabel">Kabel</a></li>
                                    <li>
                                        <a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Ladegerät">Ladegerät/Set</a>
                                    </li>
                                    <li><a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Halterung">Halterung</a></li>
                                    <li>
                                        <a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Musik Box">Musik Box</a>
                                    </li>
                                    <li>
                                        <a href="/3-unsere-produkte/HANDY ZUBEHÖHR/SD Karte">SD Karte/USB</a>
                                    </li>
                                    <li><a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Powerbank">Powerbank</a></li>
                                    <li><a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Notebook-Netzteile">Notebook-Netzteile</a></li>
                                    <li><a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Netzteil">Netzteil/KFZ Adapter</a></li>
                                    <li><a href="/3-unsere-produkte/HANDY ZUBEHÖHR/AUX Kabel">AUX Kabel</a></li>
                                    <li>
                                        <a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Computer">Computer / PC Maus</a>
                                    </li>
                                    <li>
                                        <a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Kombi Set">Kombi Set / Display Set</a>
                                    </li>
                                    <li>
                                        <a href="/3-unsere-produkte/HANDY ZUBEHÖHR/Medien Kabel">Medien Kabel / Converter Kabel</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="mega-menu-title">
                                        <a href="/3-unsere-produkte/KL. HAUSGERÄTE">KL. HAUSGERÄTE</a>
                                    </li>
                                    <li><a href="/3-unsere-produkte/KL. HAUSGERÄTE/Haarschneidegeräte">Haarschneidegeräte</a></li>
                                    <li><a href="/3-unsere-produkte/KL. HAUSGERÄTE/Kopflampe">Kopflampe</a></li>
                                    <li><a href="/3-unsere-produkte/KL. HAUSGERÄTE/Taschenlampe">Taschenlampe</a></li>
                                    <li><a href="/3-unsere-produkte/KL. HAUSGERÄTE/Kamera">Kamera / Sport Kamera</a></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="mega-menu-title">
                                        <a href="/3-unsere-produkte/TASCHEN">TASCHEN / SCHLÖSSER</a>
                                    </li>
                                    <li><a href="/3-unsere-produkte/TASCHEN/Bauchtasche">Bauchtasche</a></li>
                                    <li><a href="/3-unsere-produkte/TASCHEN/Börse">Börse</a></li>
                                    <li><a href="/3-unsere-produkte/TASCHEN/Umhängetasche">Umhängetasche</a></li>
                                    <li><a href="/3-unsere-produkte/TASCHEN/Rucksack">Rucksack</a></li>
                                    <li><a href="/3-unsere-produkte/TASCHEN/Rucksack">Ketten & Schlösser</a></li>
                                    <li>
                                        <a href="/home-medical-equipment">Home Medical Equipment</a>
                                    </li>
                                    <li><a href="/home-christmas">Home Christmas</a></li>
                                    <li><a href="/home-black-friday">Home Black Friday</a></li>
                                    <li>
                                        <a href="/home-black-friday-two">Home Black Friday Two</a>
                                    </li>
                                    <li><a href="/home-valentines-day">Home Valentines Day</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;