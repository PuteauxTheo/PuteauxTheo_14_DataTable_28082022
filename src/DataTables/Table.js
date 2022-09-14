

export default function Table({ labels, data, minShow, maxShow, sort, handleSort, sortedData }) {

    const { column , isAsc } = sort;



    return (
        <table className="table">
            <thead>
                <tr className="table-header-row">
                    {labels.map(el =>
                        <th onClick={() => handleSort(el.value)} className="table-header-cell">
                            <div className="label-column">
                                <span>{el.text}</span>
                                <div className="arrows">
                                    <div className={
                                        column === el.value ? 
                                            !isAsc ?  "arrow-up arrow-active" : "arrow-up arrow-disabled"
                                            : "arrow-up"                                            
                                    }>                                       
                                    </div>
                                    <div className={
                                        column === el.value ?
                                            isAsc ? "arrow-down arrow-active" : "arrow-down arrow-disabled"
                                            : "arrow-down"
                                    }>                                    
                                    </div>
                                </div>
                            </div>
                        </th>
                    )}
                </tr>
            </thead>
            <tbody>
                {/* if Datatable is empty */}
                {
                    sortedData.length < 1 && <span>No matching records found</span>
                }
                {/* Display data */}
                {data.map((el, index) => {
                    if (index + 1 >= minShow && index < maxShow) {
                        return (
                            <tr className="table-row">
                                {Object.values(el).map((value) => (
                                    <td className="table-cell">{value}</td>
                                ))}
                            </tr>
                        );
                    }
                    return null;
                })}
            </tbody>
        </table>
    )
}