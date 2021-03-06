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
            <span
                className={`pagination directional`}
                key={`page-first`}
                title={`Go to the first page.`}
                onClick={() => {
                    return current !== 1 ? onPageChange(1) : null;
                }}
            >
                <span className="icon-arrow-long-left" />
            </span>
            {makePaginationArray(5, current - 2).map(page => {
                return (
                    <span
                        className={`pagination ${
                            page === current ? "current" : ""
                        }`}
                        key={`page-${page}`}
                        title={`Go to page ${page}`}
                        onClick={() => {
                            return page !== current ? onPageChange(page) : null;
                        }}
                    >
                        {page}
                    </span>
                );
            })}
            <span
                className={`pagination directional`}
                key={`page-end`}
                title={`Go to the last page. (${end})`}
                onClick={() => {
                    return end !== current ? onPageChange(end) : null;
                }}
            >
                <span className="icon-arrow-long-right" />
            </span>
        </div>
    );
};

export default Pagination;
