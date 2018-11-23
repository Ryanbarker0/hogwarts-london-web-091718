import React, { Component } from 'react'
import HogItem from './HogItem.js'

class HogList extends Component {


    render() {
    const { sortHogs } = this.props
    return(
        <div className="ui grid container">
            {sortHogs().map(hog => <HogItem hog={hog} />)}
        </div>
    )
    }
    }


export default HogList;