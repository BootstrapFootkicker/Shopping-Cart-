import {Navbar} from "./Navbar.jsx";

export function Cart({currentCart}) {
    return (
        <>
            <Navbar/>
            <table>
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
                        <td>{<img src={product.image} alt="{product.name} image"/>}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.qty}</td>
                        <td>{product.price * product.qty}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}