import {fetchMerchants, fetchProducts} from '../utils/api'

export const setMerchants = data => ({
    type: 'ADD_MERCHANTS',
    data
})

export const setProducts = data => ({
    type: 'ADD_PRODUCTS',
    data
})

export const filterTags = filterBy => ({
    type: 'FILTER_TAGS',
    filterBy
})

export const searchCoordinates = searchBy => ({
    type: 'SEARCH_COORDINATES',
    searchBy
})

export const getMerchantData = () => async dispatch => {
    const merchants = await fetchMerchants().catch(({error}) =>
        console.log(error),
    );

    if (merchants) {
        dispatch(setMerchants(merchants))
    }
}

export const getProductData = () => async dispatch => {
    const products = await fetchProducts().catch(({error}) =>
        console.log(error),
    );

    if (products) {
        dispatch(setProducts(products))
    }
}