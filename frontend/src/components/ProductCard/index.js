import React  from 'react';
import './ProductCard.css';
const ProductCard = ({data}) => {

    const getMerchantName = (merchantId)=>{
        const merchant = data.merchants.data.filter(merchant => merchant.id === merchantId)
        return merchant[0].title
    }

    const getProducts = () => {
        if (!data){
            return(<div>Loading products...</div>)
        }
        if (data.filteredProducts) {
            return data.filteredProducts.data.map(product => {
                    const imageUrl = require(`./${product.image_urls[0]}.jpg`)
                    return(
                        <div key={product.id} className='container'>
                            <img className='image' alt='' src={imageUrl} />
                            <div className='info-container'>
                                <div align='left' className='product'>{product.title}</div>
                                <div align='left' className='merchant'>{getMerchantName(product.merchant_id)}</div>
                                <div align='left' className='description'>{product.description}</div>
                            </div>

                            <div className='price'>£{product.price}</div>
                            <div
                                click
                                className='buy'
                                onClick={()=>{alert(`Hey there, ${product.title} isn't really for sale, but the buy button does something :)`)}}>
                                Buy
                            </div>
                        </div>
                    )
                }
            )
        }
    }


    return(
        <div>
            {getProducts()}
        </div>
    )
}
export default ProductCard