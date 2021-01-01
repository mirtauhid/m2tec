import React from 'react';
import '../../Document/Document.css';
import './Lieferbedingungen.css';

const Lieferbedingungen = () => {
    return (
        <article>
            <div className="mbr-white col-md-10" style={{ margin: '0 auto' }}>
                <h3 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-2">
                    Lieferbedingungen
  </h3>
                <hr />
                <p className="mbr-text align-center pb-3 mbr-fonts-style display-5">
                    Versand innerhalb der Schweiz
                    Wir bitten um Verständnis, dass die Lieferung nur per Nachnahme möglich ist. Liefern per Nachnahme kostet ca. 15 Franken pro Paket bis zu 30KG.Sollten Produkte aus unserem Sortiment nicht mehr lieferbar sein, werden wir uns in jedem Fall mit Ihnen Verbindung setzen, um die Bestellung entsprechend zu korrigieren.Versand ins Ausland
                    Bei Auslandsversendung lassen Sie sich von unserem Service beraten unter 031 503 46 66
  </p>
                <div className="mbr-section-btn align-center">
                    <a className="btn btn-md btn-outline-dark display-4" href="/kontakt">
                        Kontakt</a>
                </div>
            </div>
        </article>

    );
};

export default Lieferbedingungen;