
function Filter({ handleShow, newSearch, setNewSearch }) {


    const handleSearchChange = (event) => {
        if (event.target.value.length > 0) {
            handleShow(false)
        } else {
            handleShow(true)
        }
        setNewSearch(event.target.value)
    }

    return (
        <div>Filter contacts: <input value={newSearch} onChange={handleSearchChange} /></div>
    )
}

export default Filter