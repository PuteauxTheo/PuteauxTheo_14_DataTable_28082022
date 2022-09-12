export default function ShowEntries({ minShow, maxShow, totalEntries}) {
    return (
        <div className="showing-entries">
            <span>Showing {minShow} to {maxShow} of {totalEntries} entries</span>
        </div>
    )
}