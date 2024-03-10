import React, { useEffect, useState } from 'react'
import { numberOfProducts } from './api/api'
import ReactPaginate from 'react-paginate';

const Pagination = ({productLimit, setCurrentPage}) => {
    const [allPages, setAllPages] = useState(0)

    const handleChangePage = ({selected}) => {
        setCurrentPage(selected + 1)
    }

    useEffect(() => {
        numberOfProducts()
        .then(res => {
            setAllPages(Math.ceil(res / productLimit))
        })
    }, [])

  return (
    <div className='pagination'>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handleChangePage}
            pageRangeDisplayed={5}
            pageCount={allPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    </div>
  )
}

export default Pagination