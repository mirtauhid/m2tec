import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,

    Route, Switch
} from "react-router-dom";
import Angebote from '../../Routes/Angebote/Angebote';
import Contact from '../../Routes/Contact/Contact';
import Home from '../../Routes/Home/Home';
import Impressum from '../../Routes/impressum/Impressum';
import ItemDetails from '../../Routes/ItemDetails/ItemDetails';
import Lieferbedingungen from '../../Routes/Lieferbedingungen/Lieferbedingungen';
import NeueArtikel from '../../Routes/NeueArtikel/NeueArtikel';
import Pagination from '../../Routes/Pagination/Pagination';
import Uberuns from '../../Routes/Uberuns/Uberuns';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Main.css';

export const SearchContext = createContext();

const Main = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [option, setOption] = useState("");
    const [searchData, setSearchData] = useState("");

    console.log(searchData);

    const handleSearchTerm = (value) => {
        setSearchTerm(value)

    }

    const processFilter = (value) => {
        setOption(value)
    }





    return (
        <div className="container-fluid">
            <div className="main-container">
                <SearchContext.Provider value={[searchData, setSearchData]}>
                    <Router>
                        <Header handleSearchTerm={handleSearchTerm} processFilter={processFilter} ></Header>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path="/">
                                    <Home searchTerm={searchTerm} ></Home>
                                </Route>
                                <Route path="/3-unsere-produkte">
                                    <Pagination searchTerm={searchTerm} option={option} />
                                </Route>
                                <Route exact path="/3-unsere-produkte/:category/:subcategory">
                                    <Pagination />
                                </Route>
                                <Route path="/kontakt">
                                    <Contact></Contact>
                                </Route>
                                <Route path="/angebote">
                                    <Angebote></Angebote>
                                </Route>
                                <Route path="/uberuns">
                                    <Uberuns></Uberuns>
                                </Route>
                                <Route path="/impressum">
                                    <Impressum></Impressum>
                                </Route>
                                <Route path="/lieferbedingungen">
                                    <Lieferbedingungen></Lieferbedingungen>
                                </Route>
                                <Route path="/neue-artikel">
                                    <NeueArtikel></NeueArtikel>
                                </Route>
                                <Route path="/item-details/:Nr">
                                    <ItemDetails></ItemDetails>
                                </Route>
                            </Switch>
                        </div>
                        <Footer></Footer>
                    </Router>
                </SearchContext.Provider>
            </div>
        </div>
    );
};

export default Main;