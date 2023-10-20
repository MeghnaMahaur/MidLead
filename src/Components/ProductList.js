import React, { useState, useEffect } from 'react';
import "./ProductList.css";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [inputdata, setInputdata] = useState({ quantity: {} });

  const handleQuantityChange = (event, product) => {
    const newQuantity = parseInt(event.target.value, 10);
  };

  useEffect(() => {
    fetch('http://localhost:8080/product/list')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className='contain'>
      <table className='table table-striped'>
        <thead className='table-head'>
          <tr className='table-row'>
            <th>Image</th>
            <th>Product Name</th>
            <th>Content</th>
            <th>Actual Price</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
      
        <tbody className="table-body">
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.imageUrl} alt={product.productName} />
              </td>
              <td>{product.productName}</td>
              <td>{product.content}</td>
              <td style={{ textDecoration: "line-through" }} className="price">{product.actualPrice}</td>

              <td>Price: ${product.price}</td>
              <td>
                <input
                  type="text"
                  autoComplete="off"
                  name="quantity"
                  value={inputdata.quantity[product.id] || ''}
                  onChange={(event) => handleQuantityChange(event, product)}
                />
              </td>
              <td>
                <input
                  type="text"
                  autoComplete="off"
                  name="Total"
                  value={product.total}
                  onChange={(event) => handleQuantityChange(event, product)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
