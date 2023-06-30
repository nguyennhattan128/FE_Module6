import ReactPaginate from 'react-paginate'

export default function Pagination(props) {

    const handlePageClick = async (data) => { // bắt được page
            let currentPage = data.selected + 1
        props.onPageChange(currentPage) //khai báo hàm cho props
    }
    let {page,page_size,total} = props
     let pageCount = Math.ceil(total/page_size)


    return(
        <>
        <ReactPaginate
        previousLabel='<<'
        nextLabel='>>'
        breakLabel='...'
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        />
        </>
    )
}