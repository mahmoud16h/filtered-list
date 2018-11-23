import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import {getMerchantData, getProductData} from './actions/data'
import ProductCard from './components/ProductCard'
import FilterHeader from './components/FilterHeader'

class App extends Component {

    componentDidMount() {
        this.props.getMerchants()
        this.props.getProducts()
    }

    render() {
        return (
            <div className='App'>
                <div className='logo-container'>
                    <img className='logo' alt="" src={require('./floom_logo.jpg')} />
                </div>
                <FilterHeader/>
                <div className='line-break'/>
                <ProductCard data={this.props.user}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.data,
});

const mapDispatchToProps = {
    getMerchants: getMerchantData,
    getProducts: getProductData,
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(App);

