

export default function Table({ labels, data }) {
    return (
        <table>
            <thead>
                <tr>
                    {labels.map(el =>

                        <th>
                            <div>
                                <span>{el.text}</span>
                                <div>
                                    <div>
                                        {/* icon */}
                                    </div>
                                </div>
                            </div>
                        </th>

                    )}
                </tr>
            </thead>
            <tbody>
                {/* if table is empty */}

                {/* Display data */}
                {data.map((el) => {
                    return (
                        <tr>
                            {Object.values(el).map((value) => (
                                <td>{value}</td>
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}