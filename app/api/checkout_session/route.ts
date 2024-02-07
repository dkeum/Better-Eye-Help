import {NextRequest, NextResponse} from "next/server";
import {headers} from "next/headers";
import stripe from "@/stripe/utils/get-stripejs";
import { CartItem } from "@/components/cart/Cartitem";
import { buffer } from "micro";


export const config = {
    api: {
      bodyParser: false,
    },
  };

export async function POST(req: NextRequest, res: NextResponse) {
    const headersList = headers();
    const {cartDetails} = await req.json();
    const cartDetailsArray: CartItem[] = Object.values(cartDetails) as CartItem[];

    // const rawBody = await buffer(req)

    console.log(cartDetails)


    const lineItems = cartDetailsArray.map((item: CartItem) => {
        return {
            price_data: {
                currency: item.currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price,
            },
            quantity: item.quantity,
        };
    });

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${headersList.get("origin")}/thankyou`,
            cancel_url: `${headersList.get("origin")}/`,
        });

        return NextResponse.json({sessionId: session.id});
    } catch (err) {
        console.log(err)
        return NextResponse.json({error: "Error creating checkout session"});
    }
}