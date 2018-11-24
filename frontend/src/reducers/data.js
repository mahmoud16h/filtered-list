const initialState = {}

const distance = (lat1,lon1,lat2,lon2) => {
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1);
    let a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c; // Distance in km
    return d;
}

const deg2rad = (deg) => {
    return deg * (Math.PI/180)
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