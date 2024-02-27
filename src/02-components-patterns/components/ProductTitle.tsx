import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext( ProductContext );

    return (
        <div 
            className={ `${ styles.horizontalCenter } ${ className }` }
            style={ style }
        >
            <div className={ styles.productDescription }>
                <span>
                    { title ? title : product.title }
                </span>
            </div>
        </div>
    )
}