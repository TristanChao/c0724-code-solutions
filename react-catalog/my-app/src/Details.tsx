import { Link, useNavigate, useParams } from 'react-router-dom';
import { readProduct } from './lib/read';
import { type Product } from './lib/data';
import { useEffect, useState } from 'react';
import { toDollars } from './lib/to-dollars';
import './Details.css';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await readProduct(Number(productId));
        setProduct(response);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProduct();
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  if (!product) {
    return (
      <>
        <div>No product to display.</div>
        <Link to="/">&lt; Back to catalog.</Link>
      </>
    );
  }

  function handleAddCart() {
    alert('Item added to cart!');
    navigate('/');
  }

  return (
    <>
      <Link to="/">&lt; Back to catalog</Link>
      <div className="detail-container">
        <div className="img-div">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="detail-div">
          <h2>{product.name}</h2>
          <p>{toDollars(product.price)}</p>
          <p>{product.shortDescription}</p>
        </div>
      </div>
      <p>{product.longDescription}</p>
      <button onClick={handleAddCart}>Add to Cart</button>
    </>
  );
}
