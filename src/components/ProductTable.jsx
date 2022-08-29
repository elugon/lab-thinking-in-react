import ProductRow from "./ProductRow";

function ProductTable(props) {

    const { products } = props;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(individualProducts => {
                        return (
                            <ProductRow 
                            name = {individualProducts.name} 
                            price = {individualProducts.price}
                            inStock = {individualProducts.inStock}
                         />)
                    })}
                </tbody>
            </table>

        </div>

    )
}

export default ProductTable; 