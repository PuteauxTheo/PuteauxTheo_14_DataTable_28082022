import "./DataTable.css";
import LengthEntries from "./LengthEntries";
import Search from "./Search";
import Table from "./Table";
import ShowEntries from "./ShowEntries";
import Pagination from "./Pagination";



export default function DataTable() {
    return (
        <div>
            <div className="top-table">
                <LengthEntries />
                <Search />
            </div>

            <Table />

            <div className="bot-table">
                <ShowEntries />
                <Pagination />
            </div>
        </div>
    )

}