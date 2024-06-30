import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { IProductItem } from "./product";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading } from "react-icons/ai";


const FETCH_ALL_PRODUCTS = "https://api.escuelajs.co/api/v1/products";

function ProductDataLazyLoad() {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<IProductItem[]>([]);
  const [disableLoadMoreBtn, setDisableLoadMoreBtn] = useState(false);

  const limit = 10;

  useEffect(() => {
    fetch(`${FETCH_ALL_PRODUCTS}?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setProducts((existingProducts) => {
          if (!response || response.length === 0) {
            setDisableLoadMoreBtn(true);
            return existingProducts;
          } else {
            return [...existingProducts, ...response];
          }
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [offset]);

  function loadMore() {
    // start from the next page
    setLoading(true);
    setOffset((offset) => offset + limit);
  }

  console.log(products);

  return (
    <div className="flex flex-col items-center pt-4 pb-10">
      <div className="flex flex-wrap p-10 gap-5 justify-center align-middle">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col justify-between min-w-96 max-w-96 max-h-fit"
          >
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <div className="flex flex-col">
              <CardContent>
                <img
                  src={product.images[0]}
                  className="rounded-lg w-96 h-fit"
                ></img>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <p className="font-bold">Price : {product.price}</p>
                <p className="font-bold">Category : {product.category.name}</p>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>

      {loading ? (
        <Button disabled={true}>
          <svg className="animate-spin h-5 w-5 mr-3 text-white">
            <AiOutlineLoading />
          </svg>
          <span>Loading...</span>
        </Button>
      ) : (
        <Button onClick={loadMore} disabled={disableLoadMoreBtn}>
          {disableLoadMoreBtn ? 'No more data is present' : 'Load More ...'}
        </Button>
      )}
    </div>
  );
}

export default ProductDataLazyLoad;
