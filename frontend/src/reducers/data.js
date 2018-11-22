const initialState = {}

const distance = (lat1, lon1, lat2, lon2) => {
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
    }
    else {
        let radlat1 = Math.PI * lat1/180;
        let radlat2 = Math.PI * lat2/180;
        let theta = lon1-lon2;
        let radtheta = Math.PI * theta/180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 1.609344
        return dist;
    }
}

export const data = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MERCHANTS':
            return {...state, merchants: action.data}
        case 'ADD_PRODUCTS':
            return {...state, products:action.data, filteredProducts: action.data}
        case 'FILTER_TAGS':
            const filteredByTag = state.products.data.filter(product => product.tags.includes(action.filterBy))
            return {...state, filteredProducts: {data:filteredByTag}}
        case 'SEARCH_COORDINATES':
            const lonLat = action.searchBy.split(",")
            const lat = lonLat[0]
            const lon = lonLat[1]

            const merchants = state.merchants.data
            const storesInLocation = merchants.filter(merchant => {
                return distance(lat, lon, merchant.location[0], merchant.location[1]) < merchant.radius_meters/1000})

            const storeIds = storesInLocation.map(store => store.id)
            const filteredByDistance = state.products.data.filter(product => storeIds.includes(product.merchant_id))

            if(action.searchBy === "") {
                return {...state, filteredProducts: {data:state.products.data}}
            }
            if(filteredByDistance) {
                return {...state, filteredProducts: {data:filteredByDistance}}
            }
            return {...state}

        default:
            return state
    }
}