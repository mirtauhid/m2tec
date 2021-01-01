import { faArrowCircleRight } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import MainData from '../../../Data/data.json';
import slide1 from '../../../Images/slide1.jpg';
import slide2 from '../../../Images/slide2.jpg';
import Card from '../Card/Card';
import './Home.css';

const PER_PAGE = 9;

const Home = ({ searchTerm }) => {

  const [data, setData] = useState([]);


  const [currentPage, setCurrentPage] = useState(0);





  useEffect(() => {
    setData(MainData)
  }, []);






  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);

  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data.filter(val => {
    if (searchTerm === "") {
      return val
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val
    }
  })
    .slice(offset, offset + PER_PAGE)
  // .map(({ img }) => <img src={img} />);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div style={{ padding: "0", margin: "0 auto", textAlign: "center" }} className="container-md">
      <br />
      <br />
      <div className="carousel">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              style={{ objectFit: 'cover' }}
              src={slide1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={slide2}
              style={{ objectFit: 'cover' }}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />
      <h1 className="mt-5 mb-5" style={{ fontWeight: 'bold', fontSize: '3rem', color: 'black', letterSpacing: '1rem', padding: '0 auto' }}>BELIEBTE ARTIKEL
</h1>
      <br />
      <br />
      <div className="Pagination">
        <br />
        <div className="cards-container">
          {
            currentPageData.map(item => <Card item={item} ></Card>)
          }
        </div>
        <br />
        <div className="pg-container">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
        <br />
        <Link style={{ wordSpacing: '10px' }} className="alle-artikel" to="/3-unsere-produkte">ALLE ARTIKEL <FontAwesomeIcon icon={faArrowCircleRight} /> </Link>
        <br />
      </div>
    </div>
  );
};

export default Home;