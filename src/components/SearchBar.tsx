import React from 'react'
import '../assets/styles/components/_searchBar.scss'

interface SearchProps {
    value?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}

const SearchBar = ({ value, onChange, placeholder }: SearchProps): JSX.Element => {
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