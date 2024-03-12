"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/app/lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  currency,
  image,
  description,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  function buyNow(priceId : string) {
    checkoutSingleItem(priceId)
  }
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return <Button onClick={() => {
    buyNow(product.price_id)
  }}>Ajouter au panier</Button>;
}
