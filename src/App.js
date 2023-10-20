import React, { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [inputdata, SetInputdata] = useState({
    quantity: "",
  })

  function changehandle(e) {
    SetInputdata({ ...inputdata, quantity: e.target.value });
  }

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const [isCartVisible, setIsCartVisible] = useState(false);

  function handleCheckOrder(e) {
    setIsCartVisible(!isCartVisible);
  }

  const [netTotal, setNetTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8080/product/list`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
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

  const updateCart = (product, quantity) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = quantity;
    } else {
      const newProduct = { ...product, quantity };
      setSelectedProducts([...selectedProducts, newProduct]);
    }

    const { netTotal, discountTotal, subTotal } = calculateTotals(selectedProducts);
    setNetTotal(netTotal);
    setDiscountTotal(discountTotal);
    setSubTotal(subTotal);
  };

  const calculateTotals = (selectedProducts) => {
    let netTotal = 0;
    let discountTotal = 0;
    let subTotal = 0;

    selectedProducts.forEach((product) => {
      const quantity = parseInt(product.quantity, 10);
      const price = product.price;
      const actualPrice = product.actualPrice;

      netTotal += price * quantity;
      discountTotal += (actualPrice - price) * quantity;
      subTotal += actualPrice * quantity;
    });
    return { netTotal, discountTotal, subTotal };
  };

  return (
    <div className="App">
      <header>
        <nav className="navigation">
          <div>
            <img src="https://www.srivijaycrackers.com/images/sbalogo.png" className="logo" alt="Logo" />
          </div>
          <div className="div-nav-list">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="item" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="item" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="item" href="#">Pricelist</a>
              </li>
              <li className="nav-item">
                <a className="item" href="#">Safety Tips</a>
              </li>
              <li className="nav-item">
                <a className="item" href="#">Contact</a>
              </li>
            </ul>

          </div>
          <div className="number-sec">
            <span>+91 </span><span>98431169</span>
            <button type="button" className="btn"><span>Check</span> <span>Price</span></button>
          </div>
        </nav>
      </header>

      <img src="https://www.srivijaycrackers.com/images/banner6.jpg" className="img-fluid" alt="Banner" />

      <ProductList products={products} updateCart={updateCart} />

      <button type="button" className="btn" onClick={handleCheckOrder}>Please Check Your Order</button>

      {isCartVisible && <Cart cart={selectedProducts} netTotal={netTotal} discountTotal={discountTotal} subTotal={setSubTotal} />}

      <footer>
        <div className="main-footer">
          <div className="footer-div">
            <h2 className="footer-head">Sri Balaji Agencies</h2>
            <p>Sri Balaji Agencies is a leading direct fireworks outlet in Sivakasi, offering fire crackers with
              discount.</p>

            <h3>Our Showroom</h3>
            <p>3/571, Anuppankulam, Sivakasi Tamil Nadu 626189</p>
          </div>
          <div className="footer-div">
            <h2 className="footer-head">Contact Us</h2>
            <h3>Mobile</h3>
            <i className="bi bi-phone-fill">+91 98431  16916</i>
            <h3>Email</h3>
            <i className="bi bi-phone">sribalajiagencies9843116916@gmail.com</i>
          </div>
          <div className="footer-div">
            <h2 className="footer-head">Quick Links</h2>
            <a className="item" href="#">Home</a>
            <a className="item" href="#">About Sri Sri Balaji Agencies</a>
            <a className="item" href="#">Fire Crackers</a>
            <a className="item" href="#">Fireworks Gift Box</a>
            <a className="item" href="#">Price List</a>
            <a className="item" href="#">Quick Purchase</a>
            <a className="item" href="#">Contact us</a>
          </div>
          <div className="footer-div">
            <h2 className="footer-head">Reach Us</h2>
            <a href="https://www.google.com/maps/place/Sri+Softwarez/@9.4412815,77.7946231,1532m/data=!3m1!1e3!4m6!3m5!1s0x3b06cee6d797be0b:0xca4b550afa10ced6!8m2!3d9.4413452!4d77.7966831!16s%2Fg%2F11b6dfw_hd?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              View larger map
            </a>
          </div>
        </div>

        <div className="para-div">
          <p className="footer-para">As per 2018 supreme court order, online sale of firecrackers are not permitted! We value our
            customers and at the same time, respect jurisdiction. We request you to add your products to the
            cart and submit the required crackers through the enquiry button. We will contact you within 24 hrs
            and confirm the order through WhatsApp or phone call. Please add and submit your enquiries and enjoy
            your Diwali with Sri Balaji Agencies. Our License No.----. Sri Balaji Agencies as a company following
            100% legal & statutory compliances and all our shops, go-downs are maintained as per the explosive
            acts. We send the parcels through registered and legal transport service providers as like every
            other major companies in Sivakasi is doing so.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
