import React, { useState } from "react";
import { OneNews } from "../index";
import _ from "lodash";
import "./news.css";
import ReactPaginate from "react-paginate";

function News(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const { articles } = props.news;
  const pageSize = 6;
  const displayData = _.chunk(articles, pageSize)[currentPage];

  const pageChangeHandler = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container">
      {displayData.map((news, index) => {
        return <OneNews key={index} news={news} />;
      })}
      {articles.length > pageSize ? (
        <div className="paginationList">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={6}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageChangeHandler}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={currentPage}
          />
        </div>
      ) : null}
    </div>
  );
}

export default News;
