import React from "react"

function Cart(props) {
    const { cartItems, handleAddProduct, handleRemoveProduct, handleClearCart } = props

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.price * item.quantity, 0)

    return (
        <div className='cart-items'>
            <h2 className='cart-items-header'>Cart items</h2>

            <div className='clear-cart'>
                {cartItems.length >= 1 && (
                    <button className='clear-cart-button' onClick={handleClearCart}>Clear Cart</button>
                )}
            </div>


            {cartItems.length === 0 && (
                <div className='cart-items-empty'> No items added</div>
            )}

            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className='cart-items-list'>
                        <img
                            className='cart-items-image'
                            src={item.image}
                            alt={item.name}
                        />
                        <div className='cart-items-name'>{item.name}</div>
                        <div className='cart-items-function'>
                            <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                            <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className='cart-items-price'>
                            {item.quantity} * N{item.price}
                        </div>


                    </div>
                ))}
            </div>

            <div className='cart-items-total-price-name'>
                Total price
                <div className='cart-items-total-price'> N{totalPrice}</div>
            </div>

        </div>



    )
}

export default Cart