import jsonData from './../products.json';


const initialState = {...jsonData}

const SORT_BY_PRICE_ASCENDING = 'SORT_BY_PRICE_ASCENDING'
const SORT_BY_PRICE_DESCENDING = 'SORT_BY_PRICE_DESCENDING'
const SORT_ALPHABETICALLY = 'SORT_ALPHABETICALLY'
const FILTER_BY_PRICE_FROM = 'FILTER_BY_PRICE_FROM'
const FILTER_BY_PRICE_TO = 'FILTER_BY_PRICE_TO'

export const sortByPriceAscendingCreator = () => ({ type: SORT_BY_PRICE_ASCENDING })
export const sortByPriceDescendingCreator = () => ({ type: SORT_BY_PRICE_DESCENDING })
export const sortAlphabeticallyCreator = () => ({ type: SORT_ALPHABETICALLY })
export const filterByPriceFromCreator = (value) => ({type: FILTER_BY_PRICE_FROM, value})
export const filterByPriceToCreator = (value) => ({type: FILTER_BY_PRICE_TO, value})

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_PRICE_ASCENDING: {
            return {
                ...state,
                products: [...state.products.sort((a, b) => a.price - b.price)]
            }
        }
        case SORT_BY_PRICE_DESCENDING: {
            return {
                ...state,
                products: [...state.products.sort((a, b) => b.price - a.price)]
            }
        }
        case SORT_ALPHABETICALLY: {
            return {
                ...state,
                products: [...state.products.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)]
            }
        }
        case FILTER_BY_PRICE_FROM: {
            return {
                ...state,
                products: [...initialState.products.filter(p => p.price > action.value)]
            }
        }
        case FILTER_BY_PRICE_TO: {
            return {
                ...state,
                products: [...initialState.products.filter(p => p.price < action.value)]
            }
        }
        default:
            return state
    }
}
