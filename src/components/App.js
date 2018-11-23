import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList.js'
import Filter from './Filter.js'
import Sort from './Sort.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: [],
      filter: "OFF",
      sortName: false,
      sortWeight: false
    }
  }

  toggleFilter = () => {
      const value = this.state.filter === "OFF" ? "ON" : "OFF"
      this.setState({ filter: value})
  }

  toggleSortByName = () => {
    const nameValue = this.state.sortName
    const weightValue = this.state.sortWeight
    this.state.sortWeight ? this.setState({ sortName: !nameValue, sortWeight: !weightValue }) : this.setState({ sortName: !nameValue })

  }

  toggleSortByWeight = () => {
    const nameValue = this.state.sortName
    const weightValue = this.state.sortWeight
    this.state.sortName ? this.setState({ sortName: !nameValue, sortWeight: !weightValue }) : this.setState({sortWeight: !weightValue})

  }

  filteredHogs = () => {
    const filtered = this.state.hogs.filter(hog => hog.greased)
    return this.state.filter === "OFF" ? this.state.hogs : filtered
    }
  
  sortHogsByName = () => {
    const { filteredHogs } = this
    const sortedHogsCopy = [...filteredHogs()]
    sortedHogsCopy.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
    return this.state.sortName ? sortedHogsCopy : filteredHogs()

  }

  sortHogsByWeight = () => {
    const { sortHogsByName } = this
    const sortedHogsCopy = [...sortHogsByName()]
    sortedHogsCopy.sort((a, b) => a.weight - b.weight)
    return this.state.sortWeight ? sortedHogsCopy : sortHogsByName()  

  }
  
  getHogs = () => {
    this.setState({ hogs })
  }

  componentDidMount() {
    this.getHogs()
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter toggleFilter={this.toggleFilter} filterValue={this.state.filter}/>
          <Sort toggleSortByName={this.toggleSortByName} toggleSortByWeight={this.toggleSortByWeight}/>
          <HogList sortHogs={this.sortHogsByWeight} />
      </div>
    )
  }
}

export default App;
