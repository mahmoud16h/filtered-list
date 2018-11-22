export const fetchMerchants = async ()=> await fetch(`http://localhost:8888/merchants`)
    .then(res => res.json())
    .then(json => ({data: json}))

export const fetchProducts = async ()=> await fetch(`http://localhost:8888/products`)
    .then(res => res.json())
    .then(json => ({data: json}))
