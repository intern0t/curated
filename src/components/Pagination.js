import React from "react";

const Pagination = ({ current, end, onPageChange }) => {
    const makePaginationArray = (pages, startNumber) =>
        Array.from({ length: pages }, (e, index) => index + startNumber).filter(
            x => {
                return x > 0 && x <= end;
            }
        );

    return (
        <div className="pagination-container">
            {makePaginationArray(5, current - 2).map(page => {
                if (page !== current) {
                    return (
                        <span
                            className="pagination"
                            key={`page-${page}`}
                            title={`Go to page ${page}`}
                            onClick={() => {
                                onPageChange(page);
                            }}
                        >
                            {page}
                        </span>
                    );
                } else {
                    return (
                        <span
                            className="pagination current"
                            key={`page-${page}`}
                            title={`Go to page ${page}`}
                            onClick={() => {
                                onPageChange(page);
                            }}
                        >
                            {page}
                        </span>
                    );
                }
            })}
        </div>
    );
};

export default Pagination;
