import "./DataTable.css";
import React from "react";
import { useState } from "react";
import LengthEntries from "./LengthEntries";
import Search from "./Search";
import Table from "./Table";
import ShowEntries from "./ShowEntries";
import Pagination from "./Pagination";



export default function DataTable({ labels, data }) {

    const initialState = data;

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesShown, setEntriesShown] = useState(10);
    const [sortedData, setSortedData] = useState(initialState);
    const [isSearching, setIsSearching] = useState(false);

    const [sort, setSort] = useState({ column : "" , isAsc: true})

    const handleSort = (label) => {
        if(sort.column === label){
            setSort({
                ...sort,
                isAsc: !sort.isAsc,
            });
        }else{
            setSort({
                column: label,
                isAsc: false
            });
        }

        const sorted = sorting(label);
        setSortedData(sorted);
    }

    const sorting = (label) => {
        const arraySort = sortedData.sort((a,b) => {

            const labelA = a[label].trim().toLowerCase()
            const labelB = b[label].trim().toLowerCase()

            if (sort.isAsc) {
                if(labelA > labelB) { return 1}
                if(labelA < labelB) { return -1} 
            } else {
                if(labelA < labelB) { return 1}
                if(labelA > labelB) { return -1} 
            }

            return 0
        });

        return arraySort
    }

    const minShow = currentPage === 1 
        ? 1 
        : (currentPage - 1) * entriesShown + 1;
    const maxShow = currentPage * entriesShown < data.length 
        ? currentPage * entriesShown 
        : data.length ;
    const minShowFiltered = currentPage === 1 
        ? sortedData.length > 0 
            ? 1
            : 0
        : (currentPage - 1) * entriesShown + 1;
    const maxShowFiltered = currentPage * entriesShown < sortedData.length
        ? currentPage * entriesShown
        : sortedData.length;
    return (
        <div className="dataTable">
            <div className="top-table">
                <LengthEntries handleChange={setEntriesShown} />
                <Search  data={data} handleSearchData={setSortedData} handleIsSearching={setIsSearching}/>
            </div>

            <Table labels={labels} data={sortedData} minShow={minShow} maxShow={maxShow} sort={sort} handleSort={handleSort} sortedData={sortedData}/>

            <div className="bot-table">
                <ShowEntries minShow={minShow} maxShow={maxShow} isSearching={isSearching} totalEntries={data.length} minShowFiltered={minShowFiltered} maxShowFiltered={maxShowFiltered}/>
                <Pagination currentPage={currentPage} handleClick={setCurrentPage} totalEntries={data.length} entriesShown={entriesShown}/>
            </div>
        </div>
    )

}