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
    <div className="flex flex-col p-10 gap-x-10 justify-start gap-y-10 w-full max-w-screen-2xl min-h-screen mx-auto mt-5 bg-gradient-to-r from-blue-600 to-purple-500">
      {/* <SearchForm /> */}


      <h1 className="font-bold text-3xl text-white">Software Products</h1>
      <div className="flex flex-row justify-around gap-x-10 mt-32">

      { 
      softwareProducts.map((product: SoftwareProductCardProps) => (
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
  );
};

export default ProductPage;
