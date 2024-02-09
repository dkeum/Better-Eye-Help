import SearchForm from "@/components/SearchForm";
import SoftwareProductCard, {
  SoftwareProductCardProps,
} from "@/components/SoftwareProductCard";
import { getSoftwareProducts } from "@/sanity/schema/action";
import React from "react";

interface ProductPageProps {
  searchParams: { [key: string]: string | undefined };
}

export const revalidate = 900;

const ProductPage = async ({ searchParams }: ProductPageProps) => {
  // console.log(searchParams)

  const softwareProducts = await getSoftwareProducts({
    query: searchParams?.query || "",
    page: "1",
  });

  return (
    <div className="flex flex-col p-10 gap-x-10 justify-start items-center gap-y-10 w-full max-w-screen-2xl mx-auto mt-5 bg-gradient-to-r from-blue-600 to-purple-500">
      {/* <SearchForm /> */}

      <h1 className="font-bold text-4xl text-white mt-32">Software Products</h1>
      <div className="flex flex-col gap-y-10">

      <h2 className="font-bold text-2xl text-white">Most Popular Software Solutions</h2>
      <div className="flex flex-col md:flex-row justify-around md:gap-x-10 gap-y-10  ">
        {softwareProducts.map((product: SoftwareProductCardProps) => (
          <div className="" key={product._id}>
            <SoftwareProductCard
              title={product.title}
              _id={product._id}
              description={product.description}
              price={product.price}
              views={product.views}
              stars={product.stars}
              image={product.image}
              downloadLink={product.downloadLink}
              stripe_prod_ID={product.stripe_prod_ID}
              stripe_price_ID={product.stripe_price_ID}
            />
          </div>
        ))}
      </div>
      </div>

     
    </div>
  );
};

export default ProductPage;
