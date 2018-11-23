import React from 'react'

const Filter = props => {
    const { toggleFilter, filterValue } = props
    return <button 
        onClick={toggleFilter} 
        className='ui primary button' 
        role='button'>

        Filter Greased Pigs: {filterValue}

        </button>
}


export default Filter