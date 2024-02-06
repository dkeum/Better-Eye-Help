"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import {useShoppingCart} from "use-shopping-cart";

export interface SoftwareProductCardProps {
    className?: string,
    _id: string,
    title: string,
    description: string,
    price: number,
    views: number,
    stars: number,
    image: string,
    downloadLink: string
    stripe_prod_ID: string,
    stripe_price_ID: string,
}



const SoftwareProductCard = ({ _id, title, description, price, views, stars, image, downloadLink ,stripe_prod_ID, stripe_price_ID}: SoftwareProductCardProps) => {
    const [userRating, setUserRating] = useState<number | null>(null);
    const [showThankYou, setShowThankYou] = useState(false);
    const {addItem} = useShoppingCart();

    const handleRating = (rating: number) => {
        setUserRating(rating === userRating ? null : rating);
        setShowThankYou(true);
    };

    return (
        <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
            <Link href={downloadLink} target="_blank">
                <CardHeader className="flex-center flex-col gap-2.5 !p-0">
                    <div className="h-fit w-full">
                        <Image
                            src={image}
                            className="h-full rounded-md object-cover"
                            width={384}
                            height={440}
                            alt={title}
                        />
                    </div>
                    <div className="flex-center">
                        <h3 className="text-lg text-white font-bold">Rate the Product: </h3>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => handleRating(star)}
                                onMouseEnter={() => setShowThankYou(false)}
                                className={`text-3xl ${star <= (userRating ?? stars) ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
                            >
                                ⭐
                            </button>
                        ))}
                    </div>
                    {showThankYou && <p className="text-white mt-2">Thank you for your rating!</p>}
                    <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
                </CardHeader>
            </Link>
            <CardContent className="flex-between mt-4 p-0">
                <div className="flex-center body-medium gap-1.5 text-white truncate hover:overflow-visible hover:text-wrap w-full">
                    Description: {description}
                </div>
                <div className="flex-center body-medium gap-1.5 text-white">
                    👁️ Views: {views}
                </div>
                <div className="flex-center body-medium gap-1.5 text-white">
                    ⭐ Stars: {stars} / 5
                </div>
                <Link href={downloadLink} target="_blank" className="flex-center text-gradient_purple-blue body-semibold gap-1.5">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">Try for <br /> Free</button>
                </Link>
                
                    <button 
                    onClick={() => addItem({name:title,id:stripe_price_ID,price:price*100,currency:'CAD',count: 1})}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
                        Paid Version
                        <p>${price}</p>
                    </button>
              
            </CardContent>
        </Card>
    );
};

export default SoftwareProductCard;
