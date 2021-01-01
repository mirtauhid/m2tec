import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ item }) => {


  return (
    <div className="row">
      <div className="card product-card mx-auto">
        <div className="card-header text-center">
          <h1 className="product-title">{item.name.slice(0, 30)}</h1>
          <div className="row px-0 mt-3 text-center">

          </div>
        </div>
        <div className="card-body">
          <div className="p-2">
            <img className="img-fluid float-center" src={item.img} alt='' />
          </div>
          <div className="buttons">
            <div className="row px-0">
              <div className="col-6 px-0">
                <div className="col-4 px-0 mt-4">
                  <p className="price">
                    {
                      "CHF" + " " + Number(item.price).toFixed(item.price && item.price.length > 2 ? item.price.length : 2)
                    }
                  </p>
                </div>
              </div>
              <div className="col-6 px-0">
                <Button type="button" className="btn btn-light btn-block" as={Link} to={"/item-details/" + item.Nr}>View Details</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;