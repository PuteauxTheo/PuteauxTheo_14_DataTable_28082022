import "./DataTable.css";
import { useState } from "react";
import LengthEntries from "./LengthEntries";
import Search from "./Search";
import Table from "./Table";
import ShowEntries from "./ShowEntries";
import Pagination from "./Pagination";



export default function DataTable({ labels, data }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [entriesShown, setEntriesShown] = useState(10);


    const minShow = currentPage === 1 ? 1 : (currentPage - 1) * entriesShown + 1;
    const maxShow = currentPage * entriesShown < data.length ? currentPage * entriesShown : data.length ;
    return (
        <div className="dataTable">
            <div className="top-table">
                <LengthEntries handleChange={setEntriesShown} />
                <Search />
            </div>

            <Table labels={labels} data={data} minShow={minShow} max={maxShow} />

            <div className="bot-table">
                <ShowEntries minShow={minShow} maxShow={maxShow} totalEntries={data.length}/>
                <Pagination currentPage={currentPage} handleClick={setCurrentPage} totalEntries={data.length} entriesShown={entriesShown}/>
            </div>
        </div>
    )

}