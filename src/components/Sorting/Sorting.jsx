import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    sortByPriceAscendingCreator,
    sortByPriceDescendingCreator,
    sortAlphabeticallyCreator,
    filterByPriceFromCreator,
    filterByPriceToCreator
} from '../../store/reducer';


const Sorting = ({dispatch}) => {
    return (
        <div className="filterAndSorting">

            <div><h4>Цена</h4></div>
            <div className="filterByPrice mb-3">
                <div>
                    <label htmlFor="quantity1">от:&nbsp;</label>
                    <input onChange={(e) => {
                        dispatch(filterByPriceFromCreator(e.target.value))
                    }} type="number" id="quantity1" name="quantity" className="filterInputPrice" />
                </div>
                <div>
                    <label htmlFor="quantity2">до:&nbsp;</label>
                    <input onChange={(e) => {
                        dispatch(filterByPriceToCreator(e.target.value))
                    }} type="number" id="quantity2" name="quantity" className="filterInputPrice" />
                </div>
            </div>

            <div><h4>Валюта</h4></div>
            <div className="filterByCurrency mb-3">
                <div className="filterByCurrencyItem item1">
                    <input id="it1" type="radio" name="radio" value="uah" />
                        <label htmlFor="it1">UAH</label>
                </div>
                <div  className="filterByCurrencyItem item2">
                    <input id="it2" type="radio" name="radio" value="usd" />
                        <label htmlFor="it2">USD</label>
                </div>
            </div>

            <div><h4>Сортировка</h4></div>
            <div className="sorting">
                <div>
                    <input type="radio" id="sort1" value="a" name="sort" onChange={() => dispatch(sortByPriceAscendingCreator())} />
                    <label htmlFor="sort1">&nbsp;по возростанию цены</label>
                </div>
                <div>
                    <input type="radio" id="sort2" value="b" name="sort" onChange={() => dispatch(sortByPriceDescendingCreator())} />
                    <label htmlFor="sort2">&nbsp;по убыванию цены</label>
                </div>
                    <div>
                    <input type="radio" id="sort3" value="c" name="sort" onChange={() => dispatch(sortAlphabeticallyCreator())} />
                    <label htmlFor="sort2">&nbsp;по алфавиту</label>
                </div>
                </div>
        </div>


    )
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

const SortingContainer = connect(mapStateToProps)(Sorting)

export default SortingContainer;