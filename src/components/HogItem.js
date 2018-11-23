import React, { Component } from 'react'

export default class HogItem extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false,
            isHidden: false
        }
    }

    handleClickForMore = () => {
        const clicked = this.state.clicked
        this.setState({ clicked: !clicked })
    }

    handleClickToHide = () => {
        const isHidden = this.state.isHidden
        this.setState({ isHidden: !isHidden })
    }
    
    
    render () {
    const { isHidden } = this.state 
    const { hog } = this.props
    return this.state.clicked ?
    
    ( !isHidden ?
        <div className='ui eight wide column'>
            <div className='ui card' onClick={this.handleClickForMore}>
                <img src='' width='290' class='ui image' />
                <div className='content'>
                    <div className='header'>{hog.name}</div>
                        <div className='meta'>
                            <span className='date'>{hog["highest medal achieved"]}</span>
                            <button onClick={this.handleClickToHide} className='ui primary button' role="button">Hide Hog</button>
                        </div>
                        <div className='description'>
                            {hog.specialty}
                            <br/> 
                            {hog.greased ? "Muy Caliente!" : "Sans Grease"}
                        </div>
                    </div>
                    <div className='extra content'>
                    </div>
                </div>
            </div>
    
    :
    <button onClick={this.handleClickToHide} className='ui primary button' role='button'>Unhide</button>)
     :
    (!isHidden ?
        <div className='ui eight wide column'>
            <div className='ui card' onClick={this.handleClickForMore}>
                    <img src='' width='290' class='ui image' />
                <div className='content'>
                    <div className='header'>{hog.name}</div>
                    <div className='meta'>
                        <span className='date'>{hog["highest medal achieved"]}</span>
                        <button onClick={this.handleClickToHide} className='ui primary button' role="button">Hide Hog</button>
                    </div>

                </div>
            </div>
        </div>
    : <button onClick={this.handleClickToHide} className='ui primary button' role='button'>Unhide</button> )
}
}

