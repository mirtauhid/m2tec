import React from 'react';
import '../../Document/Document.css';
import './angebote.css';

const Angebote = () => {
    return (
        <article>
            <div className="mbr-white col-md-10" style={{ margin: '0 auto' }}>
                <h3 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-2">
                    SONDERANGEBOT
  </h3>
                <hr />
                <p className="mbr-text align-center pb-3 mbr-fonts-style display-5">
                    Entschuldigen Sie die Unannehmlichkeiten.
                    <br />
                    Suchen Sie erneut
  </p>
                <div className="mbr-section-btn align-center">
                    <a className="btn btn-md btn-outline-dark display-4" href="/kontakt">
                        Kontakt</a>
                </div>
            </div>
        </article>
    )
};

export default Angebote;