import {Navbar} from "./Navbar.jsx";
import '../styles/Cart.css';

export function Cart({currentCart, setCart,cartQty,setCartQty}) {
    function removeItem(productName) {
        console.log(productName)
        setCart(currentCart => {
            return currentCart.filter(item => item.name !== productName);
        });
    }

    function setQuantity(productName, qty) {
        setCart(currentCart => {
            return currentCart.map(item => {
                if (item.name === productName) {
                    return {...item, qty: qty};
                } else {
                    return item;
                }
            });
        });
    }



    return (
        <>
            <Navbar cartQty={cartQty}/>
            <table id={'products'}>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {currentCart.map((product, index) => (
                    <tr key={index}>
                        <td>
                            <div className="productDetails">{<img src={product.image} alt="{product.name} image"/>}
                                {product.name}</div>
                        </td>

                        <td>${product.price.toFixed(2)}</td>
                        <td>
                            <input
                                type="number"
                                placeholder={product.qty}
                                onChange={(e) => setQuantity(product.name, e.target.value)}
                                min={1}
                                className="productQty"
                            />
                        </td>
                        <td>${(product.price * product.qty).toFixed(2)}</td>
                        <td>
                            <button onClick={() => removeItem(product.name)}>Remove</button>
                        </td>
                    </tr>


                ))}
                <tr>
                    <td></td>
                    <td></td>
                    <th>Total:</th>
                    <td>${(currentCart.reduce((acc, product) => acc + product.price * product.qty, 0)).toFixed(2)}</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}