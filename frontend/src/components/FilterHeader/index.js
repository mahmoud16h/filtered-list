import React, { Component } from 'react';
import {connect} from "react-redux"
import './FilterHeader.css';
import {filterTags, searchCoordinates} from '../../actions/data'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {tags} from '../../constants/tags'

class FilterHeader extends Component {
    state={
        filterByTag: '',
        value: ''
    }

    handleChange = (event)=>{
        this.setState({value: event.target.value})
        this.props.searchCo(event.target.value)

    }

    render() {
        return (
            <div className='filter-container'>
                <div className="input-container">
                    <div>Search</div>
                    <input className="search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="51.500, -0.124"/>
                </div>

                <div className="tags-container">
                    <div>Tags</div>
                    <Dropdown
                        options={tags}
                        onChange={(value)=>{this.props.filterBy(value.value)}}
                        value={this.state.filterByTag}
                        placeholder="Filter via tags"
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    filterBy: filterTags,
    searchCo: searchCoordinates,
}

export default connect(
    null, mapDispatchToProps
)(FilterHeader);