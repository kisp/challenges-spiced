import useSWR from "swr";
import Link from "next/link";

export default function ProductsListing() {
  const { data: products, error, isLoading } = useSWR("/api/products");

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
