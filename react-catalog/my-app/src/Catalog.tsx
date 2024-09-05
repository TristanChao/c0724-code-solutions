import { useEffect, useState } from 'react';
import { readCatalog } from '../lib/read.ts';
import { type Product } from '../lib/data.ts';
import { toDollars } from '../lib/to-dollars.ts';
import './Catalog.css';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await readCatalog();
        setProducts(response);
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
            <ItemCard
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              shortDescription={product.shortDescription}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

type cardProps = {
  imageUrl: string;
  name: string;
  price: number;
  shortDescription: string;
};
function ItemCard({ imageUrl, name, price, shortDescription }: cardProps) {
  return (
    <>
      <div className="card-img-div">
        <img src={imageUrl} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{toDollars(price)}</p>
      <p>{shortDescription}</p>
    </>
  );
}
