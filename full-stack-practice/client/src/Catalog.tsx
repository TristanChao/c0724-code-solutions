import { useEffect, useState } from 'react';
import { type Product } from './lib/data.ts';
import { toDollars } from './lib/to-dollars.ts';
import './Catalog.css';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const productObj = await response.json();
        setProducts(productObj);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return (
      <p>Error: {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <h1>Catalog</h1>
      <hr />
      <div className="card-container">
        {products?.map((product) => (
          <Link
            to={`/details/${product.productId}`}
            key={product.productId}
            className="item-card">
            <ItemCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

type cardProps = {
  product: Product;
};
function ItemCard({ product }: cardProps) {
  return (
    <>
      <div className="card-img-div">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>{toDollars(product.price)}</p>
      <p>{product.shortDescription}</p>
    </>
  );
}
