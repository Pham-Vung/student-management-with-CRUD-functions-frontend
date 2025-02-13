import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <div className="col-md-3 mb-4">
            <form onSubmit={e => e.preventDefault()}>
                <input
                    style={{ width: "300px" }}
                    className='form-control'
                    type="search"
                    role='searchbox'
                    placeholder='Tìm kiếm...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Search
