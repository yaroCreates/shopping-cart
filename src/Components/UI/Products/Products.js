import React from "react"

function Products(props){
    const {productItems, handleAddProduct} = props
    return(
        <div className='products'>
            {productItems.map((productItem) => (
                <div className='card' key={productItem.id}>
                    <div >
                        <img
                            className='product-img'
                            src={productItem.image}
                            alt={productItem.name}
                            
                        />
                    </div>
                    <div className='product-name'>
                        <h3>{productItem.name}</h3>
                    </div>
                    <div className='product-price'>
                        N{productItem.price}
                    </div>
                    <div>
                        <button className='product-add-btn' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Products