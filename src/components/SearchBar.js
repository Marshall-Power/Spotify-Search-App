import React from 'react'
import '../assets/styles/components/_searchBar.scss'

const SearchBar = ({ value, onChange, placeholder }) => {
    return (
        <div>
          <input
            type="search"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='searchBox'
          />
        </div>
      )
}

export default SearchBar