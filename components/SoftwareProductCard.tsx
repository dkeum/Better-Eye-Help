"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import { useShoppingCart } from "use-shopping-cart";
import { UpdateProductDownloads, UpdateProductRating } from "@/sanity/schema/action";

export interface SoftwareProductCardProps {
  className?: string;
  _id: string;
  title: string;
  description: string;
  price: number;
  views: number;
  stars: number;
  image: string;
  downloadLink: string;
  stripe_prod_ID: string;
  stripe_price_ID: string;
}

const SoftwareProductCard = ({
  _id,
  title,
  description,
  price,
  views,
  stars,
  image,
  downloadLink,
  stripe_prod_ID,
  stripe_price_ID,
}: SoftwareProductCardProps) => {
  const [userRating, setUserRating] = useState<number | null>(5);
  const [showThankYou, setShowThankYou] = useState(false);
  const { addItem } = useShoppingCart();

  const handleRating = async (rating: number) => {
    setUserRating(rating === userRating ? null : rating);
    const result = await UpdateProductRating({_id,stars: rating || 5})
    console.log(result)
    setShowThankYou(true);
  };

  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <CardHeader className="flex flex-center flex-col gap-2.5 !p-0">
        <div className="min-h-[380px] w-full">
          <Image
            src={image}
            className="h-full rounded-md object-cover"
            width={384}
            height={440}
            alt={title}
          />
        </div>
        <div className="flex-center ">
          <h3 className="text-lg text-white font-bold">Rate the Product: </h3>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              onMouseEnter={() => setShowThankYou(false)}
              className={`text-3xl ${
                star <= (userRating ?? stars)
                  ? "text-yellow-400"
                  : "text-gray-300"
              } focus:outline-none`}
            >
              <svg
                className="w-4 h-4 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </button>
          ))}
        </div>
        {showThankYou && (
          <p className="text-white mt-2">Thank you for your rating!</p>
        )}
        <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left h-full min-h-[60px]">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-between p-0">
        <div className="flex-center body-medium gap-1.5 text-white truncate hover:overflow-visible hover:text-wrap w-full">
          Description: {description}
        </div>
        <div className="flex flex-row my-2 body-medium gap-1.5 text-white body-medium">
          <span>
            <Image
              className="bg-white rounded-full px-2"
              src="/download.png"
              alt="download logo"
              width={50}
              height={50}
            />
          </span>{" "}
          Number of Downloads: {views}
        </div>
        <div className="flex flex-row align-middle items-center body-medium gap-1.5 text-white text-lg">
          <span className="text-yellow-400">
            {" "}
            <svg
              className="w-4 h-4 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </span>{" "}
          Stars: {stars} / 5
        </div>

        <div className="flex flex-row mt-5 gap-x-5 justify-center items-center">
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg text-center">
              Basic Version
            </h3>
            <Link
              href={downloadLink}
              target="_blank"
              className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
            >
              <button 
                onClick={()=> UpdateProductDownloads(_id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
                Download for
                <br /> Free
              </button>
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white font-semibold text-lg text-center">
              Paid Version
            </h3>
            <button
              onClick={() =>
                addItem({
                  name: title,
                  id: stripe_price_ID,
                  price: price * 100,
                  currency: "CAD",
                  count: 1,
                })
              }
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto"
            >
              Add to Cart
              <p>${price}</p>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SoftwareProductCard;
