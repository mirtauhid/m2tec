import React from 'react';
import '../../Document/Document.css';
import './NeueArtikel.css';

const NeueArtikel = () => {
    return (
        <article>
            <div className="mbr-white col-md-10" style={{ margin: '0 auto' }}>
                <h3 className="mbr-section-subtitle align-center mbr-light pb-3 mbr-fonts-style display-2">
                    Entschuldigen Sie die <br/> Unannehmlichkeiten
  </h3>
                <hr />
                <p className="mbr-text align-center pb-3 mbr-fonts-style display-5">
                    Suchen Sie erneut
  </p>
                <div className="mbr-section-btn align-center">
                    <a className="btn btn-md btn-outline-dark display-4" href="/kontakt">
                        Kontakt</a>
                </div>
            </div>
        </article>

    );
};

export default NeueArtikel;