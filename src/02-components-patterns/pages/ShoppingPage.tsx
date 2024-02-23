import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            
            <ProductCard 
                key={ product.id }
                product={ product }
                className="bg-dark text-white"
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons" />
                            
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
                                <button onClick={ reset }>Reset</button>
                                &nbsp;
                                <button onClick={ () => increaseBy(-2) } >-2</button>
                                &nbsp;
                                {
                                    ( !isMaxCountReached && <button onClick={ () => increaseBy(2) }>+2</button>)
                                }
                                &nbsp;
                                <span>{ count } - { maxCount } </span>
                            </div>
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}