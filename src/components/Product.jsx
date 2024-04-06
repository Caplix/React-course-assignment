// Product.jsx
// ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Import useCart from your context file

const ProductPage = () => {
    const { productId } = useParams();
    const { addToCart } = useCart(); // Use addToCart from the cart context
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch product');
                }
                const productData = await res.json();
                setProduct(productData);
            } catch (error) {
                console.error("Error fetching product data:", error);
                setError(error.message);
            }
        };

        fetchProduct();
    }, [productId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='centerContent'>
            {product ? (
                <div className='specificProductContainer'>
                    <h2>{product.data.title}</h2>
                    <p>Price: ${product.data.price}</p>
                    {product.data.image && product.data.image.url && (
                        <img className='specificProductImg' src={product.data.image.url} alt={product.title} />
                    )}
                    <p>{product.data.description}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ) : (
                <p>Loading product...</p>
            )}
        </div>
    );
};

export default ProductPage;
