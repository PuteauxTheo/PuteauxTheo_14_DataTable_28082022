import React from "react";

export default function ShowEntries({ minShow, maxShow, totalEntries, totalEntriesShown, isSearching, minShowFiltered, maxShowFiltered}) {
    return (
        <div className="showing-entries">
            {
                isSearching 
                ? <span>Showing {minShowFiltered} to {maxShowFiltered} of {totalEntriesShown} entries ( filtered from {totalEntries} total entries )</span>
                : <span>Showing {minShow} to {maxShow} of {totalEntries} entries</span>
            }
            
        </div>
    )
}