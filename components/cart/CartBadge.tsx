import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CartBadgeProps{
  items: number
  className?:string
} 

const CartBadge = ({items, className} : CartBadgeProps) => {
  return (
    <Badge className={cn("bg-white rounded-full", className)}  variant="outline">{items}</Badge>
  )
}

export default CartBadge