import { faInfoCircle } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ item }) => {

  console.log(item)

  return (
    <div className="custom-col">
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper" >
              <div className="box-up">
                <img style={{ width: '200px' }} className="img" src={item.img} alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">{item.name}</span>
                  </div>

                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <a className="cart" href="./">
                  <span className="price">CHF {item.price}</span>
                  <span className="add-to-cart">
                    <span className="txt"><Link style={{ textDecoration: "none", fontSize: "1rem", marginLeft: "50px", color: "white" }} to={"/item-details/" + item.Nr}>Product Details <FontAwesomeIcon icon={faInfoCircle} /></Link></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Card;