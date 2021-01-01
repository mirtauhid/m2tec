import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="site-footer ">
        <div className="row mobile-view">
          <div className="col-xs-6 col-md-3">
            <h6>ARTIKEL</h6>
            <ul className="footer-links">
              <li><a href="/angebote">Angebote</a></li>
              <li><a href="/neue-artikel">Neue Artikel</a></li>
              <li><a href="/3-unsere-produkte">Verkaufshits</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>UNTERNEHMEN</h6>
            <ul className="footer-links">
              <li><a href="/impressum">Impressum</a></li>
              <li><a href="/lieferbedingungen">Lieferbedingungen</a></li>
              <li><a href="/uberuns">Über uns</a></li>
              <li><a href="/kontakt">Kontakt</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>IHR KONTO</h6>
            <ul className="footer-links">
              <li><a href="/">Persönliche Angaben</a></li>
              <li><a href="/">Bestellungen</a></li>
              <li><a href="/">Rückvergütungen</a></li>
              <li><a href="/">Adressen</a></li>
              <li><a href="/">Gutscheine</a></li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3 address">
            <h6 style={{ paddingLeft: '0' }}>KONTAKT</h6>
            <ul className="footer-links">
              <li><strong></strong></li>
              <li><strong>M2 Tec</strong></li>
              <li><strong>Marktgasse 32</strong></li>
              <li><strong>3011 Bern</strong></li>
              <li><strong>Switzerland</strong></li>
              <li><strong>E-Mail: info@m2tec.ch</strong></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="copyright">
        <small className="cp-text">
          © Copyright 2021 M2 Tec . All rights reserved.
          </small>
      </div>
    </footer>
  );
};

export default Footer;