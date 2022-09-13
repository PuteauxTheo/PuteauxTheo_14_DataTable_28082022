export default function Pagination({ currentPage, handleClick, totalEntries, entriesShown}) {

    const nbPage = Math.ceil(totalEntries / entriesShown);
    /* Create Array with nbPage Length for simulate navigation */
    const nbPageArray = new Array(nbPage).fill(0);

    const handlePreviousPage = () => {
        if(currentPage > 1) handleClick(currentPage - 1 ) 

    }

    const handleNextPage = () => {
        if(currentPage < nbPage) handleClick(currentPage + 1)
    }

    return (
        <div className="pagination">
            <button type="button" className={currentPage === 1 ? "pagination-btn disabled" : "pagination-btn"} onClick={handlePreviousPage}> Previous </button>
            {
                nbPageArray.map( (el, index) => (

                    <button type="button" onClick={() => handleClick(index+1)} className={currentPage === index + 1 ? "pagination-btn active" : "pagination-btn"}>
                        {index+1}
                    </button>
        
                ))
            }
            <button type="button" className={currentPage === nbPage ? "pagination-btn disabled" : "pagination-btn"} onClick={handleNextPage}>Next</button>
        </div>
    )
}