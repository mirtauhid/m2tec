import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import MainData from '../../../Data/data.json';
import Card from "../Card/Card";
import "./styles.css";

const PER_PAGE = 12;



const Pagination = ({ searchTerm, option }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  console.log(option);
  const location = useLocation();





  let path = [];
  path = (location.pathname.split('/'));
  console.log(path);


  useEffect(() => {
    fetchData();
  }, []);



  function fetchData() {
    const filteredData = MainData.filter(val => {
      if (path[2] == null) {
        return val
      } else if (path[3] == null && val.category.toLowerCase().includes(path[2].toLowerCase())) {
        return val
      } else if (path[3] != null && val.subCategory.toLowerCase().includes(path[3].toLowerCase())) {
        return val
      }
    })
    setData(filteredData);
  };





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
    <div className="Pagination">
      <br />
      <div className="cards-container">
        {
          currentPageData.map(item => <Card item={item} ></Card>)
        }
      </div>
      <br />
      <div className="pg-container-2">
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
      <strong >{data.length} data loaded</strong>
    </div>
  );
}

export default Pagination;
