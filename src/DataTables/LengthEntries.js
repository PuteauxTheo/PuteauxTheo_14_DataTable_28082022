export default function LengthEntries() {
    return (
        <div className="dataTable-length">
            <label>
                <p>Show</p>
                <select>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
                <p>entries</p>
            </label>
        </div>
    )
}