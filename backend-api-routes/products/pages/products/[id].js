import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, error, isLoading } = useSWR(`/api/products/${id}`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <Link href="/products">Back</Link>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>
        {product.price} {product.currency}
      </p>
    </div>
  );
}
