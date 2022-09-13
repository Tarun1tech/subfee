import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className,
        leftBtn,
        rightBtn,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }
    
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul
            className={classnames('pagination justify-content-center pagination-container', { [className]: className })}
        >
            {/* Left navigation arrow */}

            <li className={classnames(' page-item page-link content-next-tablepagination-item', {
                disabled: currentPage == 1
            })} onClick={onPrevious}>
                {leftBtn}
                {/* Vorige */}
            </li>

            {paginationRange.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                // Render our Page Pills
                return (

                    <li className={classnames('page-item active pagination-item')}

                        onClick={() => onPageChange(pageNumber)}>
                        <span className={classnames('page-link active pagination-item', {
                            selected: pageNumber === currentPage
                        })} onClick={() => onPageChange(pageNumber)}>
                            {pageNumber}
                        </span>
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li className={classnames('page-item page-link content-next-table pagination-item', {
                disabled: currentPage == lastPage
            })}
                onClick={onNext} disabled>
                    {rightBtn}
                {/* Volgende */}
            </li>

        </ul>
    );
};

export default Pagination;