import React from "react";
import PropTypes from "prop-types";

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

ShowEntries.propTypes = {
    minShow: PropTypes.number.isRequired,
    maxShow: PropTypes.number.isRequired,
    totalEntries: PropTypes.number.isRequired,
    totalEntriesShown: PropTypes.number,
    isSearching: PropTypes.bool,
    minShowFiltered: PropTypes.number.isRequired,
    maxShowFiltered: PropTypes.number.isRequired,
}