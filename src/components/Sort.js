import React from 'react'

const Sort = props => {
    const { toggleSortByName, toggleSortByWeight } = props
    return (
    <div>
        <button onClick={toggleSortByName} className='ui primary button' role='button'>Sort By Name</button>
        <button onClick={toggleSortByWeight} className='ui primary button' role='button'>Sort By Weight</button>

    </div>
    )

}

export default Sort