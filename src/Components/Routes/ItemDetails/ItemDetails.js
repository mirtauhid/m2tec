import { faCircle } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { default as React, useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MainData from '../../../Data/data.json';
import './ItemDetails.css';

const ItemDetails = () => {
    const { Nr } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const allData = MainData.find(item => {
            if ((item.Nr + "").includes(Nr + "")) {
                return item
            }
        });
        setData(allData);
    }, []);



    return (
        <div className="container-md details-container">

            <div className="row">
                <div className="col-md-6">
                    <div className="item-image">
                        <div className="image">
                            <img style={{ width: '100%' }} src={data.img} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="details-section">
                        <div className="heading">
                            <br />
                            <h2 style={{ fontWeight: 'bold', }}>{data.name}</h2>
                            <strong style={{ color: '#7A7A7A' }}>{data.quantity}</strong>
                            <br />
                            <br />
                            <h4 style={{ color: '#7FC146', fontWeight: 'bold' }}><span style={{ color: '#7FC146' }}>{
                                "CHF" + " " + Number(data.price).toFixed(data.price && data.price.length > 2 ? data.price.length : 2)
                            }</span></h4>
                            <br />
                            <h5>Bestellung unter <span style={{ fontWeight: 'bold' }}>031 503 46 66</span></h5>
                            <br />
                            <h5>Lieferzeit in der Regel  <span style={{ fontWeight: 'bold' }}>1 - 3</span> Werktage</h5>
                            <br />
                            <h5>Einzelbestellung sowie Mengenbestellung möglich. <br />
                            Für Fragen kontaktieren Sie uns unter  <span style={{ fontWeight: 'bold' }}>031 503 46 66</span></h5>
                            <br />
                        </div>
                        <div className="details">
                            <div className="row">
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="home" title="Beschreibung">
                                        <br />
                                        {
                                            data.features && data.features.map(feature => <h5 style={{ color: '#7A7A7A', fontWeight: '500', display: 'block' }}><FontAwesomeIcon style={{ fontSize: '50%' }} icon={faCircle} />  {feature.description}</h5>)
                                        }
                                    </Tab>
                                    <Tab eventKey="profile" title="Artikeldetails">
                                        <br />
                                        <h4 style={{ fontWeight: '550', color: '#7A7A7A' }}>Artikel-Nr: {Nr}</h4>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;