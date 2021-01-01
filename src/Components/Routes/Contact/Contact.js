import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container-md form-wrapper">
            <div className="row form-body">

                <div className="col-md-3 col-sm-3 left-side">
                    <h3 style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '-11px', letterSpacing: '4px', borderBottom: '1px solid rgb(241, 240, 240)' }}>KONTAKT</h3>
                    <p className='address-style'>
                        M2 Tec <br />
                        Marktgasse 32<br />
                        3011 Bern<br />
                        Switzerland</p>
                    <p className="address-style">E-Mail: <a href="info@m2tec.ch">info@m2tec.ch</a> </p>
                </div>

                <div className="col-md-9 col-sm-9 contact-form-style text-center">
                    <div>
                        <form action="" className="form-style">
                            <div className="form-group row">
                                <label className="col-md-3 col-sm-3">Betreff</label>
                                <select className='col-md-9 col-sm-9'>
                                    <option value="">option 1</option>
                                    <option value="">option 2</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <label className='col-md-3 col-sm-3'>E-Mail Adresse</label>
                                <input type="email" placeholder='E-Mail Adresse' className='col-md-9 col-sm-9' />
                            </div>
                            <div className="form-group row">
                                <label className='col-md-3 col-sm-3 file'>Anhang</label>
                                <input type="file" placeholder='M2 Tec' className='col-md-9 col-sm-9 form-button' />
                            </div>
                            <div className="form-group row">
                                <label className='col-md-3 col-sm-3'>Nachricht</label>
                                <textarea type="text" placeholder='M2 Tec' className='col-md-9 col-sm-9' />
                            </div>
                            <div className="form-group text-sm-right">
                                <button type="submit" className='btn btn-dark'>SENDEN</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

