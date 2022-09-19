import React from "react";

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
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                <p>entries</p>
            </label>
        </div>
    )
}