import {formatCurrencyString, useShoppingCart} from "use-shopping-cart";


// export interface CartItemProps{
//     name:string,
//     id:string,
//     price:number,
//     currency:string,
//     count: number
// }


export type CartItem= {
    id: string;
    name: string;
    price: number;
    currency: string;
    quantity: number;
}

export interface CartItemsProps {
    item: CartItem
}


export default function CartItem({item}: CartItemsProps ) {
    const {name, quantity, price} = item;
    const {removeItem} = useShoppingCart();

    const handleRemoveItem = () => {
        removeItem(item.id);
    };

    return (
        <div className="flex items-center gap-4 py-3">
            <div>
                {name} <span className="text-xs">({quantity})</span>
            </div>
            <div className="ml-auto">
                {formatCurrencyString({value: price, currency: "CAD"})}
            </div>
            <button
                onClick={() => handleRemoveItem()}
                className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1"
            >
                X
            </button>
        </div>
    )
}