export default function Search({ data, handleSearchData, handleIsSearching }){

    const handleSearch = (e) => {
        const input = e.target.value.trim().toLowerCase()
        if (input.length > 0) {
            const dataFilter = data.filter((el) => {
                const values = Object.values(el).map((value) => value.trim().toLowerCase()).join(" ")
                return values.includes(input)
            })
            handleIsSearching(true)
            handleSearchData(dataFilter)
            

        } else {
            handleIsSearching(false)
            handleSearchData(data)
        }
    }

    return (
        <div className="dataTable-search">
            <label>
                <p>Search</p>
                <input type="search" onChange={(e) => handleSearch(e)}/>
            </label>
        </div>
    )
}