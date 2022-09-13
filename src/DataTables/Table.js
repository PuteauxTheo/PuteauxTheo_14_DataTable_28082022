

export default function Table({ labels, data, minShow, maxShow, sort, handleSort }) {

    const { column , isAsc } = sort;



    return (
        <table>
            <thead>
                <tr>
                    {labels.map(el =>

                        <th onClick={() => handleSort(el.value)}>
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

                {/* Display data */}
                {data.map((el, index) => {

                    if (index + 1 >= minShow && index < maxShow) {
                        return (
                            <tr>
                                {Object.values(el).map((value) => (
                                    <td>{value}</td>
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