
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../api/products";
import Spinner from "./Spinner";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllProducts } from "../store/productsSlice";
const ProductsPage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state: any)=> state.product.allProducts);
  const {data, isLoading} = useGetProductsQuery(undefined, {
    skip: allProducts.length > 0,
  });
  const searchQuery = useSelector((state: any) => state.product.searchQuery);
  const productLoading = useSelector((state: any) => state.product.productLoading);

  useEffect(() => {
    console.log("Load all products");
    if (data) dispatch(loadAllProducts(data));
  }, [data]);

  const visibleProducts = useMemo(() => {
    if (!searchQuery) return allProducts;

    return allProducts.filter((product: any) =>
      product.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allProducts, searchQuery]);
  
  return (
  <>
    {isLoading || productLoading ? (
      <Spinner />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
        {visibleProducts?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}
  </>
);

}

export default ProductsPage
