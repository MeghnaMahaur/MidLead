import React, { useState } from 'react';
import "./Cart.css";

function Cart({ cart, netTotal, discountTotal, subTotal }) {
  const [isEstimateVisible, setIsEstimateVisible] = useState(false)

  function handleCheckEstimate(e) {
    setIsEstimateVisible(!isEstimateVisible)
  }

  return (

    <div className='cart-container'>
      <div className='cart-header'>
        <h2>Sri Balaji Agencies</h2>
        <button style={{ width: "10px", height: "10px" }} className='close-button'>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
      <ul className='cart-list'>
        {cart.map((product) => (
          <li key={product.id}>
            {product.productName} - ${product.price}
          </li>
        ))}
        <li>Net Total : ${netTotal}</li>
        <li>Discount Total : ${discountTotal}</li>
        <li>Sub Total :  ${subTotal}</li>
      </ul>
      <button
        type='button'
        className='btn'
        onClick={handleCheckEstimate}
      >
        Confirm Estimate
      </button>
      <div className='min-order-amount'>
        <h3>Min.Order Amount</h3>
        <ul>
          <li>Tamil Nadu Rs.3000</li>
          <li>Pondicherry Rs.3000</li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
