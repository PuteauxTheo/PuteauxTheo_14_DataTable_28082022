export default function LengthEntries({ value, handleChange }) {

    const handleEntriesShown = (e) => {
        handleChange(e.target.value)
    }

    return (
        <div className="dataTable-length">
            <label>
                <p>Show</p>
                <select value={value} onChange={e => handleEntriesShown(e)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
                <p>entries</p>
            </label>
        </div>
    )
}